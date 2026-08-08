import Navbar from '@/components/Navbar';
import {
  getSectionVisibility,
  getFooterContent,
  getContactSection,
} from '@/sanity/lib/queries';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';
const SHOPIFY_URL = 'https://labellebeautyb.myshopify.com/collections/all';

const CATEGORIES = [
  'Body Oils',
  'Bundles',
  'Clean Beauty',
  'Vegan',
  'Natural',
  'Luxurious',
];

const PRODUCTS = [
  { name: 'Noire Luxe Body Oil',   url: 'https://labellebeautyb.myshopify.com/products/noire-luxe-body-oil' },
  { name: 'Coco Luxe Body Oil',    url: 'https://labellebeautyb.myshopify.com/products/coco-luxe-body-oil' },
  { name: 'Valour Luxe Body Oil',  url: 'https://labellebeautyb.myshopify.com/products/valour-luxe-body-oil' },
  { name: 'Dulce Luxe Body Oil',   url: 'https://labellebeautyb.myshopify.com/products/dulce-luxe-body-oil-copy' },
  { name: 'Bare Luxe Body Oil',    url: 'https://labellebeautyb.myshopify.com/products/bare-luxe-body-oil' },
  { name: 'Lavish Luxe Body Oil',  url: 'https://labellebeautyb.myshopify.com/products/lavish-luxe-body-oil-copy-copy' },
];

export const metadata = {
  title: "Products | La Belle' Beauty Bar",
  description:
    "Shop clean, natural, organic, and vegan skincare products from La Belle' Beauty Bar in Apex, NC.",
};

export default async function ProductsPage() {
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

      {showProductsPage ? (
        <>
          {/* PLACEHOLDER VIDEO: Replace src with Shailyn's product video when ready */}
          <style>{`
            html { scroll-behavior: smooth; }
            .video-hero {
              position: relative;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
            .video-hero-btn {
              display: inline-block;
              margin-top: 32px;
              padding: 14px 40px;
              border: 1px solid #C9954A;
              color: #C9954A;
              font-family: var(--sans);
              font-size: 0.65rem;
              font-weight: 600;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              text-decoration: none;
              transition: background 0.3s, color 0.3s;
            }
            .video-hero-btn:hover { background: #C9954A; color: #111111; }
            @keyframes bounce-arrow {
              0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.6; }
              50% { transform: translateX(-50%) translateY(8px); opacity: 1; }
            }
            .scroll-indicator {
              position: absolute;
              bottom: 32px;
              left: 50%;
              transform: translateX(-50%);
              animation: bounce-arrow 1.8s ease-in-out infinite;
              text-decoration: none;
            }
            .product-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
              max-width: 960px;
              margin: 0 auto;
            }
            @media (max-width: 768px) {
              .product-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
            }
            .product-card {
              background: #111111;
              border: 1px solid rgba(201,149,74,0.25);
              padding: 32px 20px;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
              transition: border-color 0.3s;
            }
            .product-card:hover { border-color: rgba(201,149,74,0.6); }
            .bundle-card {
              grid-column: 1 / -1;
              background: rgba(201,149,74,0.04);
              border: 1px solid rgba(201,149,74,0.35);
              padding: 40px 32px;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 12px;
            }
            .product-card-btn {
              display: inline-block;
              margin-top: 4px;
              padding: 10px 28px;
              border: 1px solid #C9954A;
              color: #C9954A;
              font-family: var(--sans);
              font-size: 0.6rem;
              font-weight: 600;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              text-decoration: none;
              transition: background 0.3s, color 0.3s;
            }
            .product-card-btn:hover { background: #C9954A; color: #111111; }
          `}</style>
          <div className="video-hero">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            >
              <source src="https://assets.mixkit.co/videos/52046/52046-360.mp4" type="video/mp4" />
            </video>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.45)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 24px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  color: '#C9954A',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                CLEAN BEAUTY
              </span>
              <h1
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '56px',
                  fontWeight: 300,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  marginBottom: '16px',
                }}
              >
                Products We Love
              </h1>
              <div
                style={{
                  width: '40px',
                  height: '1px',
                  background: '#C9954A',
                  margin: '0 auto 20px',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: '#FFFFFF',
                }}
              >
                Natural · Organic · Vegan · Luxurious
              </p>
              <a href="#products-content" className="video-hero-btn">Shop Now</a>
            </div>
            <a href="#products-content" className="scroll-indicator" aria-label="Scroll to products">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#C9954A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* HERO */}
          <section
            id="products-content"
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
            <span className="section-label">RETAIL &amp; SKINCARE</span>
            <div className="divider-gold" style={{ marginBottom: '28px' }} />
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontWeight: 300,
                color: '#F5F0EA',
                lineHeight: 1.15,
                marginBottom: '24px',
                maxWidth: '700px',
              }}
            >
              Clean Beauty You Can Take Home
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(245,240,234,0.7)',
                maxWidth: '520px',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}
            >
              Curated natural, organic, and vegan products rooted in luxury —
              body oils, butters, serums, and cleansers crafted for real results.
            </p>

            {/* Category Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              {CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C9954A',
                    border: '1px solid rgba(201,149,74,0.4)',
                    padding: '8px 20px',
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </section>

          {/* PRODUCT GRID */}
          <section
            style={{
              background: '#111111',
              padding: '80px 24px 120px',
              borderTop: '1px solid rgba(201,149,74,0.15)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 300,
                  color: '#C9954A',
                  marginBottom: '12px',
                }}
              >
                Luxe Body Oil Collection
              </h2>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.8rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'rgba(245,240,234,0.6)',
                }}
              >
                Natural · Clean · Luxurious · $26 each
              </p>
            </div>

            <div className="product-grid">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="product-card">
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                      fontWeight: 300,
                      color: '#F5F0EA',
                      lineHeight: 1.25,
                    }}
                  >
                    {p.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--sans)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#C9954A',
                      letterSpacing: '0.06em',
                    }}
                  >
                    $26.00
                  </span>
                  <a href={p.url} target="_blank" rel="noopener" className="product-card-btn">
                    Shop Now
                  </a>
                </div>
              ))}

              {/* Bundle card — spans full width */}
              <div className="bundle-card">
                <h3
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                    fontWeight: 300,
                    color: '#C9954A',
                  }}
                >
                  Bundle &amp; Save
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '0.78rem',
                    fontWeight: 300,
                    letterSpacing: '0.08em',
                    color: 'rgba(245,240,234,0.65)',
                  }}
                >
                  Buy 2 get 15% OFF &nbsp;·&nbsp; Buy 3 get 20% OFF &nbsp;·&nbsp; Buy 4+ get 25% OFF
                </p>
                <a
                  href="https://labellebeautyb.myshopify.com/collections/bundles"
                  target="_blank"
                  rel="noopener"
                  className="product-card-btn"
                  style={{ marginTop: '8px' }}
                >
                  Shop Bundles
                </a>
              </div>
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section
            style={{
              background: '#1C2B2D',
              padding: '80px 24px',
              textAlign: 'center',
            }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <span className="section-label">VISIT US</span>
              <div className="divider-gold" />
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 300,
                  color: '#F5F0EA',
                  marginBottom: '16px',
                }}
              >
                Experience our products in person
              </h2>
              <p
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize: '0.95rem',
                  fontWeight: 300,
                  color: 'rgba(245,240,234,0.65)',
                  marginBottom: '36px',
                }}
              >
                Book a service today and take home your favourites from our studio.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
                Book Now
              </a>
            </div>
          </section>
        </>
      ) : (
        /* COMING SOON — showProductsPage is false */
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
          <span className="section-label">RETAIL &amp; SKINCARE</span>
          <div className="divider-gold" />
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F0EA',
              marginBottom: '20px',
            }}
          >
            Coming Soon
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '1rem',
              color: 'rgba(245,240,234,0.6)',
              maxWidth: '440px',
              lineHeight: 1.85,
              marginBottom: '40px',
            }}
          >
            Our product shop is being prepared. In the meantime, visit our Shopify
            store to browse available products.
          </p>
          <a href={SHOPIFY_URL} target="_blank" rel="noopener" className="btn-gold">
            Shop Now
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
              <li><a href="/products">Products</a></li>
              {showGalleryPage && <li><a href="/gallery">Gallery</a></li>}
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
