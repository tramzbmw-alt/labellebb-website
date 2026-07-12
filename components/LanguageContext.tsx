'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { en } from '@/lib/translations/en';
import { es } from '@/lib/translations/es';
import type { Translations } from '@/lib/translations/en';

export type Lang = 'en' | 'es';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('labelle_lang') as Lang | null;
    if (saved === 'es' || saved === 'en') setLangState(saved);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('labelle_lang', newLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: lang === 'es' ? es : en }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
