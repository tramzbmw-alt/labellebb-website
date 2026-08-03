import Navbar from '@/components/Navbar';
import { urlFor } from '@/sanity/lib/image';
import {
  getSectionVisibility,
  getFooterContent,
  getContactSection,
  getArtworks,
  getFeaturedArtwork,
  type Artwork,
} from '@/sanity/lib/queries';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

export const metadata = {
  title: "Art Gallery | La Belle' Beauty Bar",
  description:
    "Original artwork by Shailyn, owner of La Belle' Beauty Bar — available for purchase and on display in our Apex, NC studio.",
};

function statusBadge(status: Artwork['status']) {
  const map: Record<string, { label: string; color: string }> = {
    available: { label: 'Available', color: '#C9954A' },
    inquire: { label: 'Inquire', color: '#4A7C7E' },
    not_for_sale: { label: 'Display Only — Not For Sale', color: 'rgba(245,240,234,0.4)' },
    sold: { label: 'Sold', color: 'rgba(245,240,234,0.3)' },
  };
  return map[status ?? 'available'] ?? map['available'];
}

export default async function GalleryPage() {
  const [visibility, footer, contact, artworks, featured] = await Promise.all([
    getSectionVisibility(),
    getFooterContent(),
    getContactSection(),
    getArtworks(),
    getFeaturedArtwork(),
  ]);

  const showProductsPage = visibility?.showProductsPage ?? true;
  const showGalleryPage = visibility?.showGalleryPage ?? true;
  const phone = contact?.phone ?? '(919) 321-1148';
  const phoneRaw = phone.replace(/\D/g, '');
  const email = contact?.email ?? 'info@labellebb.com';

  const fruitSeries = artworks.filter(
    (a) => a.isPartOfSeries && a.seriesName?.toLowerCase().includes('fruit')
  );
  const featuredArtwork = featured;

  return (
    <>
      <Navbar showProductsPage={showProductsPage} showGalleryPage={showGalleryPage} />

      {showGalleryPage ? (
        <>
          {/* HERO */}
          <section
            style={{
              background: '#111111',
              minHeight: '60vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '140px 24px 80px',
            }}
          >
            <span className="section-label">THE COLLECTION</span>
            <div className="divider-gold" />
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 300,
                color: '#F5F0EA',
                fontStyle: 'italic',
                lineHeight: 1.15,
                marginBottom: '24px',
              }}
            >
              Art by Shailyn
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(245,240,234,0.65)',
                maxWidth: '540px',
                lineHeight: 1.85,
              }}
            >
              Original works by La Belle&apos; Beauty Bar owner Shailyn — available for
              purchase and on display in our Apex, NC studio.
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

          {/* FEATURED WORK */}
          <section
            style={{
              background: '#111111',
              padding: '80px 24px',
              borderTop: '1px solid rgba(201,149,74,0.12)',
            }}
          >
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <span className="section-label">FEATURED WORK — DISPLAY ONLY</span>
              <div className="divider-gold left" />
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '48px',
                  alignItems: 'start',
                  marginTop: '40px',
                }}
              >
                {/* Artwork Image */}
                <div
                  style={{
                    background: '#1A1A1A',
                    aspectRatio: '4/5',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(201,149,74,0.15)',
                  }}
                >
                  {featuredArtwork?.image ? (
                    <img
                      src={urlFor(featuredArtwork.image).width(800).url()}
                      alt={featuredArtwork.title ?? 'Featured artwork'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(245,240,234,0.2)',
                        fontFamily: 'var(--sans)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}
                    >
                      Image coming soon
                    </div>
                  )}
                </div>

                {/* Artwork Info */}
                <div style={{ paddingTop: '16px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--sans)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,234,0.4)',
                      border: '1px solid rgba(245,240,234,0.15)',
                      padding: '6px 14px',
                      marginBottom: '24px',
                    }}
                  >
                    Display Only — Not For Sale
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                      fontWeight: 300,
                      color: '#F5F0EA',
                      marginBottom: '12px',
                      fontStyle: 'italic',
                    }}
                  >
                    {featuredArtwork?.title ?? 'Still Life'}
                  </h2>
                  <p
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.8rem',
                      color: '#C9954A',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '20px',
                    }}
                  >
                    {featuredArtwork?.medium ?? 'Acrylic on Canvas'}
                    {featuredArtwork?.dimensions ? ` · ${featuredArtwork.dimensions}` : ''}
                  </p>
                  {featuredArtwork?.description && (
                    <p
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '0.95rem',
                        color: 'rgba(245,240,234,0.6)',
                        lineHeight: 1.85,
                        marginBottom: '24px',
                      }}
                    >
                      {featuredArtwork.description}
                    </p>
                  )}
                  <p
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.85rem',
                      color: 'rgba(245,240,234,0.45)',
                      fontStyle: 'italic',
                    }}
                  >
                    This piece is currently on private display in our Apex, NC studio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FRUIT SERIES */}
          <section
            style={{
              background: '#0E0E0E',
              padding: '80px 24px 100px',
              borderTop: '1px solid rgba(201,149,74,0.12)',
            }}
          >
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-label">FRUIT SERIES</span>
                <div className="divider-gold" />
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    color: 'rgba(245,240,234,0.6)',
                    maxWidth: '560px',
                    margin: '0 auto',
                    lineHeight: 1.85,
                  }}
                >
                  A vibrant six-panel collection celebrating the beauty of nature&apos;s
                  bounty. Each panel is available individually or as a complete
                  collection.
                </p>
              </div>

              {/* 3×2 Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '24px',
                  marginBottom: '48px',
                }}
              >
                {(fruitSeries.length > 0
                  ? fruitSeries
                  : Array.from({ length: 6 }, (_, i) => ({
                      _id: `placeholder-${i}`,
                      title: undefined,
                      medium: 'Acrylic on Canvas',
                      price: 75,
                      status: 'available' as const,
                      image: undefined,
                      isPartOfSeries: true,
                      seriesName: 'Fruit Series',
                    }))
                ).map((piece, idx) => {
                  const badge = statusBadge(piece.status);
                  const subject = piece.title
                    ? `Artwork Inquiry — ${piece.title}`
                    : 'Artwork Inquiry — Fruit Series Panel';
                  return (
                    <div
                      key={piece._id}
                      style={{
                        background: '#1A1A1A',
                        border: '1px solid rgba(201,149,74,0.12)',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Image area */}
                      <div
                        style={{
                          aspectRatio: '1/1',
                          background: '#141414',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        {piece.image ? (
                          <img
                            src={urlFor(piece.image).width(600).url()}
                            alt={piece.title ?? `Fruit Series Panel ${idx + 1}`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        ) : (
                          <div
                            style={{
                              width: '100%',
                              height: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'rgba(245,240,234,0.15)',
                              fontFamily: 'var(--sans)',
                              fontSize: '0.7rem',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                            }}
                          >
                            Panel {idx + 1}
                          </div>
                        )}
                      </div>

                      {/* Card Body */}
                      <div style={{ padding: '24px' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '1.4rem',
                            fontWeight: 300,
                            color: '#F5F0EA',
                            marginBottom: '6px',
                            fontStyle: 'italic',
                          }}
                        >
                          {piece.title ?? <span style={{ color: 'rgba(245,240,234,0.3)', fontSize: '1rem' }}>Title coming soon</span>}
                        </h3>
                        <p
                          style={{
                            fontFamily: 'var(--sans)',
                            fontSize: '0.7rem',
                            color: 'rgba(245,240,234,0.4)',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: '16px',
                          }}
                        >
                          {piece.medium ?? 'Acrylic on Canvas'}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '20px',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--serif)',
                              fontSize: '1.5rem',
                              fontWeight: 400,
                              color: '#C9954A',
                            }}
                          >
                            {piece.price ? `$${piece.price}` : ''}
                          </span>
                          <span
                            style={{
                              fontFamily: 'var(--sans)',
                              fontSize: '0.6rem',
                              fontWeight: 600,
                              letterSpacing: '0.14em',
                              textTransform: 'uppercase',
                              color: badge.color,
                              border: `1px solid ${badge.color}`,
                              padding: '4px 10px',
                            }}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <a
                          href={`mailto:info@labellebb.com?subject=${encodeURIComponent(subject)}`}
                          className="btn-gold"
                          style={{ display: 'block', textAlign: 'center', padding: '12px 20px', fontSize: '0.62rem' }}
                        >
                          Inquire About This Piece
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Complete Set Card */}
              <div
                style={{
                  border: '1px solid rgba(201,149,74,0.3)',
                  padding: '48px',
                  textAlign: 'center',
                  background: 'rgba(201,149,74,0.04)',
                }}
              >
                <span className="section-label">COMPLETE COLLECTION</span>
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    fontWeight: 300,
                    color: '#F5F0EA',
                    marginBottom: '12px',
                    fontStyle: 'italic',
                  }}
                >
                  Complete Fruit Series — All 6 Panels
                </h3>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '2.2rem',
                      color: '#C9954A',
                    }}
                  >
                    $400
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.75rem',
                      color: 'rgba(245,240,234,0.4)',
                      alignSelf: 'center',
                      textDecoration: 'line-through',
                    }}
                  >
                    $450 individually
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.85rem',
                    color: 'rgba(245,240,234,0.5)',
                    marginBottom: '32px',
                  }}
                >
                  Save $50 when you acquire the complete six-panel collection.
                </p>
                <a
                  href={`mailto:info@labellebb.com?subject=${encodeURIComponent('Artwork Inquiry — Complete Fruit Series (All 6 Panels)')}`}
                  className="btn-gold"
                >
                  Inquire About Complete Set
                </a>
              </div>
            </div>
          </section>

          {/* COMMISSIONS */}
          <section
            style={{
              background: '#1C2B2D',
              padding: '100px 24px',
              textAlign: 'center',
            }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <span className="section-label">CUSTOM WORK</span>
              <div className="divider-gold" />
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 300,
                  color: '#F5F0EA',
                  marginBottom: '20px',
                }}
              >
                Commission a Custom Piece
              </h2>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: 'rgba(245,240,234,0.6)',
                  lineHeight: 1.85,
                  marginBottom: '40px',
                }}
              >
                Interested in a custom painting for your home or business? Shailyn
                accepts a limited number of commissions each year. Reach out to discuss
                your vision.
              </p>
              <a
                href={`mailto:info@labellebb.com?subject=${encodeURIComponent('Commission Inquiry')}`}
                className="btn-gold"
              >
                Inquire About a Commission
              </a>
            </div>
          </section>
        </>
      ) : (
        /* COMING SOON — showGalleryPage is false */
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
          <span className="section-label">THE COLLECTION</span>
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
              color: 'rgba(245,240,234,0.55)',
              maxWidth: '440px',
              lineHeight: 1.85,
              marginBottom: '40px',
            }}
          >
            Shailyn&apos;s art gallery is coming soon. Check back for original works
            available for purchase and on display in our Apex, NC studio.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
            Book a Service
          </a>
        </section>
      )}

      {/* FOOTER */}
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
            {footer?.copyrightText ?? "© 2026 La Belle' Beauty Bar LLC · Apex, NC · All rights reserved"}
          </span>
          <span className="footer-tagline">
            {footer?.tagline ?? "We are Lavish. We are Luxury. We are La Belle'."}
          </span>
        </div>
      </footer>
    </>
  );
}
