'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage, type Lang } from '@/components/LanguageContext';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

export default function Navbar({
  showProductsPage = false,
  showGalleryPage = false,
}: {
  showProductsPage?: boolean;
  showGalleryPage?: boolean;
}) {
  const { lang, setLang, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  function selectLang(l: Lang) {
    setLang(l);
    setDropdownOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav id="navbar" ref={navRef} aria-label="Main navigation">
      <a href="/" className="nav-logo">
        <img src="/labelle-logo-white.png" alt="La Belle' Beauty Bar" />
      </a>

      {/* Desktop nav links */}
      <ul className="nav-links">
        <li><a href="/#about">{t.nav.about}</a></li>
        <li><a href="/#services">{t.nav.services}</a></li>
        {showProductsPage && <li><a href="/products">{t.nav.products}</a></li>}
        {showGalleryPage && <li><a href="/gallery">{t.nav.gallery}</a></li>}
        <li><a href="/#team">{t.nav.team}</a></li>
        <li><a href="/#booking">{t.nav.hours}</a></li>
      </ul>

      {/* Language Selector */}
      <div className="lang-selector" ref={dropdownRef}>
        <button
          className="lang-toggle"
          onClick={() => setDropdownOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Select language"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>{lang.toUpperCase()}</span>
          <svg
            width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {dropdownOpen && (
          <ul className="lang-dropdown" role="listbox" aria-label="Language options">
            <li role="option" aria-selected={lang === 'en'}>
              <button onClick={() => selectLang('en')} className={lang === 'en' ? 'active' : ''}>
                🇺🇸 English (EN)
              </button>
            </li>
            <li role="option" aria-selected={lang === 'es'}>
              <button onClick={() => selectLang('es')} className={lang === 'es' ? 'active' : ''}>
                🇪🇸 Español (ES)
              </button>
            </li>
          </ul>
        )}
      </div>

      <a href={BOOKING_URL} target="_blank" rel="noopener" className="nav-book">
        {t.nav.bookNow}
      </a>

      {/* Hamburger — mobile only */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9954A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9954A" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu" role="menu">
          <a href="/#about" onClick={closeMenu} role="menuitem">{t.nav.about}</a>
          <a href="/#services" onClick={closeMenu} role="menuitem">{t.nav.services}</a>
          {showProductsPage && <a href="/products" onClick={closeMenu} role="menuitem">{t.nav.products}</a>}
          {showGalleryPage && <a href="/gallery" onClick={closeMenu} role="menuitem">{t.nav.gallery}</a>}
          <a href="/#team" onClick={closeMenu} role="menuitem">{t.nav.team}</a>
          <a href="/#booking" onClick={closeMenu} role="menuitem">{t.nav.hours}</a>
        </div>
      )}
    </nav>
  );
}
