'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const FRESHA_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

const SYSTEM_PROMPT = `You are Madam La Belle', the elegant AI concierge for La Belle' Beauty Bar in Apex, NC. You are warm, luxurious, knowledgeable and personal — never robotic. You represent a high-end luxury beauty bar and speak accordingly.

SERVICES AND PRICING:
WAXING:
- Brazilian Wax — $65
- Hollywood Wax — $75
- Bikini Line — $35
- Full Leg — $75
- Half Leg — $45
- Underarm — $25
- Lip — $15
- Chin — $15
- Full Face — $55
- Back Wax — $65
- Chest Wax — $55
- Eyebrow Wax — $20
- Arm Wax — $45
FACIALS:
- Signature Facial — $85
- Back Purifier — $75
- Beard Facial — $75

LASH AND BROW:
- Lash Lift — $85
- Lash Tint — $35
- Lash Lift and Tint — $100
- Brow Lamination — $75
- Brow Tint — $25
- Brow Lamination and Tint — $90
- Brow Wax — $20

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

const OPENING_MESSAGE =
  "Welcome to La Belle' Beauty Bar! I'm Madam La Belle', your personal beauty concierge ✨ Whether you have questions about our services, pricing, or want to book an appointment — I'm here to help. How can I assist you today?";

const SUGGESTIONS = [
  'How much is a Brazilian?',
  'First time visitor',
  'What services do you offer?',
  'Book an appointment',
];

type Message = {
  id: string;
  role: 'user' | 'agent';
  text: string;
  showBooking?: boolean;
  ts: string;
};

type HistoryEntry = { role: string; content: string };

function getTs() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatWidget() {
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
    (role: 'user' | 'agent', text: string, showBooking = false) => {
      setMessages((prev) => [
        ...prev,
        { id: Math.random().toString(36).slice(2), role, text, showBooking, ts: getTs() },
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
        { id: '0', role: 'agent', text: OPENING_MESSAGE, ts: getTs() },
      ]);
    }
    setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

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
        reply = reply.replace('[SHOW_BOOKING_BUTTON]', '').trim();
        setHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
        addMessage('agent', reply, showBooking);
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
          Chat with Madam La Belle&apos; ✨
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
            <span className="chat-header-sub">Your Beauty Concierge</span>
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
                  Book Your Appointment →
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
            {SUGGESTIONS.map((q) => (
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
            placeholder="Ask Madam La Belle'..."
            aria-label="Ask Madam La Belle' a question"
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
