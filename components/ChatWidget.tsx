'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';

const FRESHA_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

const PRICE_MENU_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/all-offer';

const SYSTEM_PROMPT_EN = `You are Madam La Belle', the elegant AI concierge for La Belle' Beauty Bar in Apex, NC. You are warm, luxurious, knowledgeable and personal — never robotic. You represent a high-end luxury beauty bar and speak accordingly.

PRICING RULE — VERY IMPORTANT:
When anyone asks about pricing, costs, or how much any service costs, do NOT quote prices or mention any dollar amounts. Instead say something warm like: "For our most current pricing, you can view our full service menu here ✨" and include the text [SHOW_PRICE_LINK] in your response. This ensures clients always see live, up-to-date pricing.

SERVICES OFFERED:
WAXING: Brazilian, Hollywood, Bikini Line, Full Leg, Half Leg, Underarm, Lip, Chin, Full Face, Back Wax, Chest Wax, Eyebrow Wax, Arm Wax
FACIALS: Signature Facial, Back Purifier, Beard Facial
LASH AND BROW: Lash Lift, Lash Tint, Lash Lift and Tint, Brow Lamination, Brow Tint, Brow Lamination and Tint, Brow Wax

BUSINESS INFO:
- Address: 3675 Green Level W Road Suite 205, Apex NC 27523
- Phone: (919) 321-1148
- Text: (919) 759-5828
- Hours: Tuesday 9am-7pm, Wednesday 12pm-7pm, Thursday 12pm-7pm, Friday 9am-6pm, Saturday 10am-4pm, Sunday-Monday Closed
- New clients: 25% off first visit with code FIRSTTIME
- Loyalty program: Earn 10 points per dollar spent, 100 points for booking online, 500 points on 6th visit
- Current special: Father's Day — Beard Facial or Back Wax, the perfect gift for Dad, available through June 21. Mention this when relevant (e.g. gifting, men's services, what's special right now).
- All products are natural, organic and vegan
- Hard wax used — gentle on sensitive skin

ABOUT THE BUSINESS:
La Belle' Beauty Bar is a luxury boutique beauty bar in Apex NC. Woman-owned. 5-star rated with 64 Google reviews. 'We are Lavish, We are Luxury, We are La Belle.'

WHEN CLIENT WANTS TO BOOK:
Say: 'I would love to get you scheduled at La Belle'! Let me take you to our booking page where you can choose your perfect time with Mia or Phyllcia.'
Then add the text: [SHOW_BOOKING_BUTTON]

ANSWER QUESTIONS ABOUT:
- What to expect during first wax visit
- How to prepare for services (no shaving 2 weeks before wax etc)
- Aftercare advice
- Difference between services (Brazilian vs Hollywood etc)
- Product recommendations
- Parking and directions to Suite 205
- Anything related to beauty services and skincare

Keep responses concise, warm and elegant. Maximum 3 short paragraphs per response.`;

const SYSTEM_PROMPT_ES = `Eres Madam La Belle', la elegante concierge de IA para La Belle' Beauty Bar en Apex, NC. Eres cálida, lujosa, conocedora y personal — nunca robótica. Representas una boutique de belleza de lujo y hablas en consecuencia. RESPONDE SIEMPRE EN ESPAÑOL.

REGLA DE PRECIOS — MUY IMPORTANTE:
Cuando alguien pregunte sobre precios o cuánto cuesta un servicio, NO menciones precios ni cantidades en dólares. Di algo cálido como: "Para nuestros precios más actuales, puedes ver nuestro menú completo de servicios aquí ✨" e incluye el texto [SHOW_PRICE_LINK] en tu respuesta.

SERVICIOS OFRECIDOS:
DEPILACIÓN CON CERA: Brasileña, Hollywood, Línea de Bikini, Pierna Completa, Media Pierna, Axilas, Labio, Barbilla, Cara Completa, Espalda, Pecho, Cejas, Brazos
FACIALES: Facial de Firma, Purificador de Espalda, Facial de Barba
CEJAS Y PESTAÑAS: Lifting de Pestañas, Tinte de Pestañas, Lifting y Tinte, Laminación de Cejas, Tinte de Cejas, Laminación y Tinte, Depilación de Cejas

INFORMACIÓN DEL NEGOCIO:
- Dirección: 3675 Green Level W Road Suite 205, Apex NC 27523
- Teléfono: (919) 321-1148
- Texto: (919) 759-5828
- Horario: Martes 9am-7pm, Miércoles 12pm-7pm, Jueves 12pm-7pm, Viernes 9am-6pm, Sábado 10am-4pm, Domingo-Lunes Cerrado
- Nuevas clientas: 25% de descuento en primera visita con código FIRSTTIME
- Programa de lealtad: Gana 10 puntos por dólar gastado, 100 puntos por reserva en línea, 500 puntos en la 6ta visita
- Todos los productos son naturales, orgánicos y veganos
- Se usa cera dura — suave con la piel sensible

SOBRE EL NEGOCIO:
La Belle' Beauty Bar es una boutique de belleza de lujo en Apex NC. De propiedad de mujeres. Con calificación de 5 estrellas y 64 reseñas en Google. 'Somos Exquisitas, Somos Lujo, Somos La Belle.'

CUANDO LA CLIENTA QUIERE RESERVAR:
Di: '¡Me encantaría programar tu cita en La Belle'! Permíteme llevarte a nuestra página de reservas donde puedes elegir tu momento perfecto con Mia o Phyllcia.'
Luego agrega el texto: [SHOW_BOOKING_BUTTON]

Responde preguntas sobre:
- Qué esperar en la primera visita de depilación
- Cómo prepararse para los servicios
- Cuidados posteriores al servicio
- Diferencias entre servicios (Brasileña vs Hollywood, etc.)
- Recomendaciones de productos
- Estacionamiento y cómo llegar a la Suite 205
- Todo relacionado con servicios de belleza y skincare

Mantén las respuestas concisas, cálidas y elegantes. Máximo 3 párrafos cortos por respuesta.`;


type Message = {
  id: string;
  role: 'user' | 'agent';
  text: string;
  showBooking?: boolean;
  showPriceLink?: boolean;
  ts: string;
};

type HistoryEntry = { role: string; content: string };

function getTs() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatWidget() {
  const { lang, t } = useLanguage();
  const isEs = lang === 'es';
  const SYSTEM_PROMPT = isEs ? SYSTEM_PROMPT_ES : SYSTEM_PROMPT_EN;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [fabAnimating, setFabAnimating] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const openedOnceRef = useRef(false);

  const addMessage = useCallback(
    (role: 'user' | 'agent', text: string, showBooking = false, showPriceLink = false) => {
      setMessages((prev) => [
        ...prev,
        { id: Math.random().toString(36).slice(2), role, text, showBooking, showPriceLink, ts: getTs() },
      ]);
    },
    []
  );

  const openChat = useCallback(() => {
    setIsOpen(true);
    setFabAnimating(false);
    if (!openedOnceRef.current) {
      openedOnceRef.current = true;
      setMessages([
        { id: '0', role: 'agent', text: t.chat.openingMessage, ts: getTs() },
      ]);
    }
    setTimeout(() => inputRef.current?.focus(), 300);
  }, [t.chat.openingMessage]);

  const closeChat = () => {
    setIsOpen(false);
    setFabAnimating(true);
  };

  // Auto-open on first visit after 5 s
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!sessionStorage.getItem('labelle_chat_seen')) {
      sessionStorage.setItem('labelle_chat_seen', '1');
      const timer = setTimeout(() => {
        if (!openedOnceRef.current) openChat();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [openChat]);

  // When language changes, update the opening message if no real conversation has started
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].role === 'agent') {
        return [{ ...prev[0], text: t.chat.openingMessage }];
      }
      return prev;
    });
  }, [t.chat.openingMessage]);

  // Scroll to bottom on new messages / typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isSending) return;
    setShowSuggestions(false);
    addMessage('user', text);
    setInputValue('');
    setIsSending(true);
    setIsTyping(true);

    const newHistory: HistoryEntry[] = [...history, { role: 'user', content: text }];
    setHistory(newHistory);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-5',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newHistory,
        }),
      });
      const data = await res.json();
      setIsTyping(false);

      if (data.content?.[0]) {
        let reply: string = data.content[0].text;
        const showBooking = reply.includes('[SHOW_BOOKING_BUTTON]');
        const showPriceLink = reply.includes('[SHOW_PRICE_LINK]');
        reply = reply
          .replace('[SHOW_BOOKING_BUTTON]', '')
          .replace('[SHOW_PRICE_LINK]', '')
          .trim();
        setHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
        addMessage('agent', reply, showBooking, showPriceLink);
      } else {
        addMessage(
          'agent',
          "I'm so sorry — I'm having a little trouble connecting right now. Please call us at (919) 321-1148 and we'll be happy to help!"
        );
      }
    } catch {
      setIsTyping(false);
      addMessage(
        'agent',
        "I'm having trouble connecting at the moment. Please reach us directly at (919) 321-1148 or text (919) 759-5828 — we'd love to hear from you!"
      );
    }

    setIsSending(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = Math.min(e.target.scrollHeight, 72) + 'px';
  };

  const handleLaunch = () => (isOpen ? closeChat() : openChat());

  return (
    <>
      {/* Launcher */}
      <div className="chat-launcher">
        <span className="chat-label" onClick={handleLaunch}>
          {t.chat.label}
        </span>
        <button
          className="chat-fab"
          onClick={handleLaunch}
          aria-label="Chat with Madam La Belle'"
          style={fabAnimating ? undefined : { animation: 'none' }}
        >
          <div
            style={{
              background: '#000000',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/labelle-site-logo.png"
              alt="Madam La Belle'"
              style={{ width: '36px', height: '36px', borderRadius: '50%' }}
            />
          </div>
        </button>
      </div>

      {/* Chat window */}
      <div
        className={`chat-window${isOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Madam La Belle' chat"
      >
        <div className="chat-header">
          <div
            style={{
              background: '#000000',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src="/labelle-site-logo.png"
              alt="La Belle' emblem"
              style={{ width: '36px', height: '36px', borderRadius: '50%' }}
            />
          </div>
          <div className="chat-header-info">
            <span className="chat-header-name">Madam La Belle&apos;</span>
            <span className="chat-header-sub">{t.chat.headerSub}</span>
          </div>
          <button className="chat-close" onClick={closeChat} aria-label="Close chat">
            &times;
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chat-msg ${msg.role}`}>
              <div className="chat-bubble">{msg.text}</div>
              {msg.showBooking && (
                <a
                  className="chat-booking-btn"
                  href={FRESHA_URL}
                  target="_blank"
                  rel="noopener"
                >
                  {t.chat.bookBtn}
                </a>
              )}
              {msg.showPriceLink && (
                <a
                  className="chat-booking-btn"
                  href={PRICE_MENU_URL}
                  target="_blank"
                  rel="noopener"
                >
                  {t.chat.priceBtn}
                </a>
              )}
              <div className="chat-ts">{msg.ts}</div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-msg agent">
              <div className="chat-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            {t.chat.suggestions.map((q) => (
              <button
                key={q}
                type="button"
                className="chat-pill"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-area">
          <textarea
            ref={inputRef}
            className="chat-input"
            rows={1}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={t.chat.placeholder}
            aria-label={t.chat.placeholder}
          />
          <button
            className="chat-send"
            onClick={() => sendMessage(inputValue)}
            disabled={isSending}
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
