'use client';

import { useEffect } from 'react';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

export default function Navbar() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    const handleScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="navbar" aria-label="Main navigation">
      <a href="#hero" className="nav-logo">
        <img src="/labelle-logo-white.png" alt="La Belle' Beauty Bar" />
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#booking">Hours</a></li>
      </ul>
      <a href={BOOKING_URL} target="_blank" rel="noopener" className="nav-book">
        Book Now
      </a>
    </nav>
  );
}
