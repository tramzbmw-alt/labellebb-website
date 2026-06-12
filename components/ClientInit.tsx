'use client';

import { useEffect } from 'react';

export default function ClientInit() {
  useEffect(() => {
    // Scroll-entrance animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll(
        '.about-content, .products-content, .service-card, .team-card, .testimonials-inner, .booking-inner'
      )
      .forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(32px)';
        htmlEl.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        observer.observe(el);
      });

    // Hide announcement strip when flash sale is active
    const flashSale = document.getElementById('flashSale');
    const announcementStrip = document.getElementById('announcementStrip');
    if (flashSale && announcementStrip && getComputedStyle(flashSale).display !== 'none') {
      announcementStrip.style.display = 'none';
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
