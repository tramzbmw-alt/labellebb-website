import Navbar from '@/components/Navbar';
import {
  getSectionVisibility,
  getFooterContent,
  getContactSection,
} from '@/sanity/lib/queries';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

const PANELS = [1, 2, 3, 4, 5, 6];

export const metadata = {
  title: "Art Gallery | La Belle' Beauty Bar",
  description:
    "Original artwork by Shailyn, owner of La Belle' Beauty Bar — available for display and purchase at La Belle' Beauty Bar, Apex NC.",
};

export default async function GalleryPage() {
  const [visibility, footer, contact] = await Promise.all([
    getSectionVisibility(),
    getFooterContent(),
    getContactSection(),
  ]);

  const showProductsPage = visibility?.showProductsPage ?? true;
  const showGalleryPage = visibility?.showGalleryPage ?? true;
  const phone = contact?.phone ?? '(919) 321-1148';
  const phoneRaw = phone.replace(/\D/g, '');
  const email = contact?.email ?? 'info@labellebb.com';

  return (
    <>
      <Navbar showProductsPage={showProductsPage} showGalleryPage={showGalleryPage} />

      {showGalleryPage ? (
        <>
          {/* ── HERO ── */}
          <section
            style={{
              background: '#111111',
              minHeight: '55vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '140px 24px 80px',
            }}
          >
            <span className="section-label">THE GALLERY</span>
            <div className="divider-gold" style={{ marginBottom: '28px' }} />
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 300,
                color: '#F5F0EA',
                fontStyle: 'italic',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Art by Shailyn
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '0.95rem',
                fontWeight: 300,
                color: 'rgba(245,240,234,0.6)',
                maxWidth: '500px',
                lineHeight: 1.85,
              }}
            >
              Original works by La Belle&apos; founder Shailyn — available for
              display and purchase at La Belle&apos; Beauty Bar, Apex NC.
            </p>
            <div
              style={{
                width: '80px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #C9954A, transparent)',
                margin: '40px auto 0',
              }}
            />
          </section>

          {/* ── PRIVATE COLLECTION PIECE ── */}
          <section
            style={{
              background: '#111111',
              padding: '60px 24px 100px',
              borderTop: '1px solid rgba(201,149,74,0.1)',
            }}
          >
            <div
              style={{
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              {/* Badge above image */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--sans)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: '#C9954A',
                  border: '1px solid rgba(201,149,74,0.5)',
                  padding: '7px 18px',
                  marginBottom: '28px',
                }}
              >
                Private Collection
              </span>

              {/* Image */}
              <div
                style={{
                  border: '1px solid rgba(201,149,74,0.3)',
                  padding: '6px',
                  marginBottom: '28px',
                  background: '#1A1A1A',
                }}
              >
                <img
                  src="/Shay_art_1.jpg"
                  alt="Still Life in Gold by Shailyn"
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Title & Medium */}
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  fontWeight: 300,
                  color: '#F5F0EA',
                  fontStyle: 'italic',
                  marginBottom: '8px',
                }}
              >
                Still Life in Gold
              </h2>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,234,0.4)',
                }}
              >
                Oil on Canvas
              </p>
            </div>
          </section>

          {/* ── SIX PANEL COLLECTION ── */}
          <section
            style={{
              background: '#0E0E0E',
              padding: '80px 24px 100px',
              borderTop: '1px solid rgba(201,149,74,0.1)',
            }}
          >
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              {/* Section header */}
              <div style={{ textAlign: 'center', marginBottom: '56px' }}>
                <span className="section-label">SIX PANEL COLLECTION</span>
                <div className="divider-gold" />
                <h2
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 300,
                    color: '#F5F0EA',
                    fontStyle: 'italic',
                    marginBottom: '14px',
                  }}
                >
                  Pink Harvest — Six Panel Collection
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    color: 'rgba(245,240,234,0.55)',
                    maxWidth: '480px',
                    margin: '0 auto',
                    lineHeight: 1.85,
                  }}
                >
                  A complete six-panel work available as a full set or individual pieces.
                </p>
              </div>

              {/* 3×2 grid desktop / 2×3 mobile */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '20px',
                  marginBottom: '56px',
                }}
                className="panel-grid"
              >
                {PANELS.map((n) => (
                  <div key={n} style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        border: '1px solid rgba(201,149,74,0.15)',
                        background: '#141414',
                        marginBottom: '12px',
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={`/6_Panels_Shay.${n}.jpg`}
                        alt={`Pink Harvest Panel ${n}`}
                        style={{
                          width: '100%',
                          display: 'block',
                          objectFit: 'cover',
                          aspectRatio: '1 / 1',
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        color: 'rgba(245,240,234,0.7)',
                        marginBottom: '6px',
                      }}
                    >
                      Panel {n}
                    </p>
                    <a
                      href={`mailto:info@labellebb.com?subject=${encodeURIComponent(`Pink Harvest — Panel ${n} Inquiry`)}`}
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '0.62rem',
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#C9954A',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(201,149,74,0.4)',
                        paddingBottom: '2px',
                        transition: 'border-color 0.2s',
                      }}
                    >
                      Inquire
                    </a>
                  </div>
                ))}
              </div>

              {/* Complete set CTA */}
              <div
                style={{
                  border: '1px solid rgba(201,149,74,0.25)',
                  padding: '52px 40px',
                  textAlign: 'center',
                  background: 'rgba(201,149,74,0.03)',
                }}
              >
                <span className="section-label">COMPLETE COLLECTION</span>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                    fontWeight: 300,
                    color: '#F5F0EA',
                    fontStyle: 'italic',
                    marginBottom: '12px',
                  }}
                >
                  Complete Set — Inquire for Pricing
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,234,0.45)',
                    marginBottom: '32px',
                    maxWidth: '380px',
                    margin: '0 auto 32px',
                    lineHeight: 1.75,
                  }}
                >
                  Acquire all six panels as a cohesive collection. Contact us to
                  discuss pricing and availability.
                </p>
                <a
                  href={`mailto:info@labellebb.com?subject=${encodeURIComponent('Pink Harvest Collection Inquiry')}`}
                  className="btn-gold"
                >
                  Inquire About This Collection
                </a>
              </div>
            </div>
          </section>

          {/* Responsive grid override — mobile 2 columns */}
          <style>{`
            @media (max-width: 640px) {
              .panel-grid {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }
          `}</style>
        </>
      ) : (
        /* ── COMING SOON ── */
        <section
          style={{
            background: '#111111',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '140px 24px 80px',
          }}
        >
          <span className="section-label">THE GALLERY</span>
          <div className="divider-gold" />
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F0EA',
              fontStyle: 'italic',
              marginBottom: '20px',
            }}
          >
            Coming Soon
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '1rem',
              color: 'rgba(245,240,234,0.5)',
              maxWidth: '400px',
              lineHeight: 1.85,
              marginBottom: '40px',
            }}
          >
            Shailyn&apos;s art gallery is coming soon. Check back for original
            works available for display and purchase in our Apex, NC studio.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
            Book a Service
          </a>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand" style={{ textAlign: 'center' }}>
            <img
              src="/labelle-logo-white.png"
              alt="La Belle' Beauty Bar"
              style={{ height: '70px', width: 'auto', display: 'block', margin: '0 auto 16px' }}
            />
            <p>
              {footer?.description ??
                "A luxury boutique beauty bar in Apex, NC — waxing, facials, lash & brow, and clean skincare, all in one beautiful space."}
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {(footer?.servicesList?.length
                ? footer.servicesList
                : ['Waxing', 'Facials', 'Brow + Lash']
              ).map((s) => (
                <li key={s}><a href="/#services">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener">Book Online</a></li>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#team">Meet the Team</a></li>
              {showProductsPage && <li><a href="/products">Products</a></li>}
              <li><a href="/gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit Us</h4>
            <address>
              {contact?.address ?? '3675 Green Level W Road'}
              <br />
              {contact?.city ?? 'Apex, NC 27523'}
              <br /><br />
              <a href={`tel:${phoneRaw}`}>{phone}</a>
              <br />
              <a href={`mailto:${email}`}>{email}</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            {footer?.copyrightText ??
              "© 2026 La Belle' Beauty Bar LLC · Apex, NC · All rights reserved"}
          </span>
          <span className="footer-tagline">
            {footer?.tagline ?? "We are Lavish. We are Luxury. We are La Belle'."}
          </span>
        </div>
      </footer>
    </>
  );
}
