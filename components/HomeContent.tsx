'use client';

import Navbar from '@/components/Navbar';
import ChatWidget from '@/components/ChatWidget';
import ClientInit from '@/components/ClientInit';
import { useLanguage } from '@/components/LanguageContext';
import type {
  SiteSettings,
  FlashSale,
  MonthlySpecial,
  TeamMember,
  HeroContent,
  OurStory,
  ReviewsSection,
  TeamSection,
  LoyaltySection,
  GiftsSection,
  ContactSection,
  FooterContent,
  SignatureServices,
} from '@/sanity/lib/queries';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

export interface HomeContentProps {
  heroImageUrl: string | null;
  aboutImageUrl: string | null;
  giftCardImageUrl: string | null;
  specialsImageUrl: string | null;
  monthlySpecialImageUrl: string | null;
  showAnnouncement: boolean;
  showFlashSale: boolean;
  showProducts: boolean;
  showProductsPage: boolean;
  showGalleryPage: boolean;
  showInstagram: boolean;
  siteSettings: SiteSettings | null;
  flashSale: FlashSale | null;
  hero: HeroContent | null;
  story: OurStory | null;
  reviews: ReviewsSection | null;
  teamSec: TeamSection | null;
  teamMembers: TeamMember[];
  loyalty: LoyaltySection | null;
  gifts: GiftsSection | null;
  special: MonthlySpecial | null;
  contact: ContactSection | null;
  footer: FooterContent | null;
  signatureServices: SignatureServices | null;
  phone: string;
  phoneRaw: string;
  textNum: string;
  textRaw: string;
  email: string;
}

export default function HomeContent({
  heroImageUrl,
  aboutImageUrl,
  giftCardImageUrl,
  specialsImageUrl,
  monthlySpecialImageUrl,
  showAnnouncement,
  showFlashSale,
  showProducts,
  showProductsPage,
  showGalleryPage,
  showInstagram,
  siteSettings,
  flashSale,
  hero,
  story,
  reviews,
  teamSec,
  teamMembers,
  loyalty,
  gifts,
  special,
  contact,
  footer,
  signatureServices,
  phone,
  phoneRaw,
  textNum,
  textRaw,
  email,
}: HomeContentProps) {
  const { lang, t } = useLanguage();
  const isEs = lang === 'es';

  // Helper: use Sanity EN value when in English, translation when in Spanish
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  function s<T extends unknown>(sanityVal: T | undefined | null, fallback: T): T {
    return isEs ? fallback : (sanityVal ?? fallback);
  }

  // Helper: Sanity field with a Spanish Sanity override
  function sEs(
    enVal: string | undefined | null,
    esVal: string | undefined | null,
    fallback: string
  ): string {
    return isEs ? (esVal ?? fallback) : (enVal ?? fallback);
  }

  const hasTeam = teamMembers && teamMembers.length > 0;

  const announcementText = sEs(
    siteSettings?.announcementBar,
    siteSettings?.announcementTextEs,
    t.announcement.text
  );

  const heroBodyText = sEs(hero?.bodyText, hero?.heroSubtextEs, t.hero.subtext);

  return (
    <>
      <Navbar showProductsPage={showProductsPage} showGalleryPage={showGalleryPage} />

      {/* HERO */}
      <section id="hero">
        <div
          className="hero-bg"
          style={heroImageUrl ? { backgroundImage: `url(${heroImageUrl})` } : undefined}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-headline">
            {!isEs && hero?.line1 ? (
              hero.line1
            ) : (
              <span>
                {t.hero.we}{' '}
                <span style={{ color: '#C9954A', fontStyle: 'italic' }}>{t.hero.lavish}</span>
              </span>
            )}
            <br />
            {!isEs && hero?.line2 ? (
              hero.line2
            ) : (
              <span>
                {t.hero.we}{' '}
                <span style={{ color: '#C9954A', fontStyle: 'italic' }}>{t.hero.luxury}</span>
              </span>
            )}
            <br />
            {!isEs && hero?.line3 ? (
              hero.line3
            ) : (
              <span>
                {t.hero.we}{' '}
                <span style={{ color: '#C9954A', fontStyle: 'italic' }}>{t.hero.labelle}</span>
              </span>
            )}
          </h1>
          <div className="hero-eyebrow">
            {s(hero?.tagline, t.hero.tagline)}
          </div>
          <p className="hero-sub">{heroBodyText}</p>
          <div className="hero-actions">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              {s(hero?.primaryButtonText, t.hero.primaryBtn)}
            </a>
            <a href="#services" className="btn-outline">
              {s(hero?.secondaryButtonText, t.hero.secondaryBtn)}
            </a>
          </div>
        </div>
        <div className="hero-badge">
          <div className="hero-badge-star">★★★★★</div>
          <span className="hero-badge-num">64</span>
          <span className="hero-badge-text">{t.hero.googleReviews}</span>
        </div>
        <div className="hero-scroll">
          <span>{t.hero.discover}</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ANNOUNCEMENT STRIP */}
      {showAnnouncement && (
        <div className="strip" id="announcementStrip">
          <p>
            {announcementText}&nbsp;·&nbsp;{' '}
            <a href={BOOKING_URL} target="_blank" rel="noopener">
              {t.announcement.bookNow}
            </a>
          </p>
        </div>
      )}

      {/* FLASH SALE */}
      <div
        id="flashSale"
        style={{
          display: showFlashSale ? 'block' : 'none',
          background: '#C9954A',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}
        >
          <span style={{ fontSize: '2rem' }}>⚡</span>
          <span
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#111111',
              textTransform: 'uppercase',
            }}
          >
            {s(flashSale?.heading, t.flashSale.defaultHeading)}
          </span>
          <span style={{ fontSize: '2rem' }}>⚡</span>
        </div>
        <p
          style={{
            fontFamily: "'Montserrat',sans-serif",
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
            color: '#111111',
            marginBottom: '8px',
          }}
        >
          {s(flashSale?.subtext, t.flashSale.defaultSubtext)}
        </p>
        {flashSale?.expiryDate && (
          <p
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: '#111111',
              marginBottom: '28px',
              opacity: 0.75,
            }}
          >
            {t.flashSale.limitedTime} &middot; {t.flashSale.expires} {flashSale.expiryDate}
          </p>
        )}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          style={{
            display: 'inline-block',
            padding: '14px 40px',
            background: '#111111',
            color: '#C9954A',
            fontFamily: "'Montserrat',sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            border: '2px solid #111111',
            transition: 'background 0.3s,color 0.3s',
          }}
        >
          {s(flashSale?.buttonText, t.flashSale.bookNow)}
        </a>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-photo">
          <img
            src={aboutImageUrl ?? '/labelle-home-header.png'}
            alt="La Belle' Beauty Bar interior"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          />
          <div className="about-photo-accent" />
        </div>
        <div className="about-content">
          <span className="section-label">{s(story?.eyebrow, t.about.eyebrow)}</span>
          <div className="divider-gold left" />
          <h2>
            {!isEs && story?.heading ? (
              story.heading
            ) : (
              <>
                {t.about.headingLine1}
                <br />
                {t.about.headingLine2} <em>{t.about.headingLine2Em}</em>
              </>
            )}
          </h2>
          <p>{s(story?.paragraph1, t.about.p1)}</p>
          <p>{s(story?.paragraph2, t.about.p2)}</p>
          <div className="about-tags">
            <span className="about-tag">{s(story?.badge1, t.about.badge1)}</span>
            <span className="about-tag">{s(story?.badge2, t.about.badge2)}</span>
            <span className="about-tag">{s(story?.badge3, t.about.badge3)}</span>
            <span className="about-tag">{s(story?.badge4, t.about.badge4)}</span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="btn-gold"
            style={{ textAlign: 'center' }}
          >
            {s(story?.buttonText, t.about.btn)}
          </a>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">{story?.stat1Number ?? '5★'}</span>
              <span className="stat-label">{s(story?.stat1Label, t.about.stat1Label)}</span>
            </div>
            <div className="stat">
              <span className="stat-num">{story?.stat2Number ?? '64'}</span>
              <span className="stat-label">{s(story?.stat2Label, t.about.stat2Label)}</span>
            </div>
            <div className="stat">
              <span className="stat-num">{story?.stat3Number ?? '7+'}</span>
              <span className="stat-label">{s(story?.stat3Label, t.about.stat3Label)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <span className="section-label">{s(signatureServices?.sectionEyebrow, t.services.eyebrow)}</span>
        <div className="divider-gold" />
        <h2>
          {!isEs && signatureServices?.sectionHeading
            ? signatureServices.sectionHeading
            : <>{t.services.heading} <em>{t.services.headingEm}</em></>
          }
        </h2>
        <p className="services-sub">{s(signatureServices?.sectionSubtext, t.services.subtext)}</p>
        <div className="services-grid">
          <div className="service-card">
            <img
              src="/labelle-services-header.png"
              alt="Waxing services at La Belle'"
              loading="lazy"
            />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-num">01</span>
              <div className="service-card-line" />
              <h3>{s(signatureServices?.card1Title, t.services.card1Title)}</h3>
              <p>{s(signatureServices?.card1Description, t.services.card1Desc)}</p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="/labelle-services-section.png"
              alt="Facial services at La Belle'"
              loading="lazy"
            />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-num">02</span>
              <div className="service-card-line" />
              <h3>{s(signatureServices?.card2Title, t.services.card2Title)}</h3>
              <p>{s(signatureServices?.card2Description, t.services.card2Desc)}</p>
            </div>
          </div>
          <div className="service-card">
            <img
              src="/labelle-services-lash-brow.png"
              alt="Lash and brow services at La Belle'"
              loading="lazy"
            />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-num">03</span>
              <div className="service-card-line" />
              <h3 style={{ whiteSpace: 'nowrap' }}>{s(signatureServices?.card3Title, t.services.card3Title)}</h3>
              <p>{s(signatureServices?.card3Description, t.services.card3Desc)}</p>
            </div>
          </div>
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
          {t.services.cta}
        </a>
      </section>

      {/* PRODUCTS */}
      {showProducts && (
        <section id="products">
          <div className="products-content">
            <span className="section-label">{t.products.eyebrow}</span>
            <div className="divider-gold left" />
            <h2>
              {t.products.heading1}
              <br />
              <em>{t.products.heading2}</em>
            </h2>
            <p>{t.products.p1}</p>
            <p>{t.products.p2}</p>
            <div className="products-pills">
              <span className="pill">{t.products.pill1}</span>
              <span className="pill">{t.products.pill2}</span>
              <span className="pill">{t.products.pill3}</span>
              <span className="pill">{t.products.pill4}</span>
              <span className="pill">{t.products.pill5}</span>
              <span className="pill">{t.products.pill6}</span>
            </div>
          </div>
          <div className="products-photo">
            <img
              src="/labelle-section-products.png"
              alt="La Belle' natural beauty products"
              loading="lazy"
            />
          </div>
        </section>
      )}

      {/* LOYALTY / PROMO */}
      <section id="promo">
        <div className="promo-inner">
          <span className="promo-label">{s(loyalty?.eyebrow, t.promo.eyebrow)}</span>
          <h2>
            {!isEs && loyalty?.heading ? (
              loyalty.heading
            ) : (
              <>
                {t.promo.heading1}
                <br />
                {t.promo.heading2}
              </>
            )}
          </h2>
          <p>{s(loyalty?.subtext, t.promo.subtext)}</p>
          <div className="promo-code">{loyalty?.promoCode ?? 'FIRSTTIME'}</div>
          <br />
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-white">
            {s(loyalty?.buttonText, t.promo.btn)}
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <span className="section-label">{s(teamSec?.sectionEyebrow, t.team.eyebrow)}</span>
        <div className="divider-gold" />
        <h2>
          {!isEs && teamSec?.sectionHeading ? (
            teamSec.sectionHeading
          ) : (
            <>
              {t.team.heading1} <em>{t.team.heading2Em}</em>
            </>
          )}
        </h2>
        <p className="team-sub">{s(teamSec?.sectionSubtext, t.team.subtext)}</p>
        <div className="team-grid">
          {hasTeam ? (
            teamMembers.map((member) => (
              <div key={member._id} className="team-card">
                <div className="team-card-body">
                  <img
                    src="/labelle-site-logo.png"
                    alt="La Belle' emblem"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'block', margin: '0 auto 12px auto' }}
                  />
                  <h3>{member.name}</h3>
                  <span className="title">
                    {member.name === 'Mia'
                      ? s(member.title, t.team.miaTitle)
                      : member.name === 'Phyllcia'
                      ? s(member.title, t.team.phyllciaTitle)
                      : member.title}
                  </span>
                  <div className="team-divider" />
                  <p>
                    {member.name === 'Mia'
                      ? s(member.bio, t.team.miaBio)
                      : member.name === 'Phyllcia'
                      ? s(member.bio, t.team.phyllciaBio)
                      : member.bio}
                  </p>
                  {member.specialties && member.specialties.length > 0 && (
                    <div className="about-tags" style={{ marginTop: '12px' }}>
                      {member.specialties.map((sp) => (
                        <span key={sp} className="about-tag">
                          {sp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="team-card">
                <div className="team-card-body">
                  <img
                    src="/labelle-site-logo.png"
                    alt="La Belle' emblem"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'block', margin: '0 auto 12px auto' }}
                  />
                  <h3>Mia</h3>
                  <span className="title">{t.team.miaTitle}</span>
                  <div className="team-divider" />
                  <p>{t.team.miaBio}</p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-body">
                  <img
                    src="/labelle-site-logo.png"
                    alt="La Belle' emblem"
                    style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'block', margin: '0 auto 12px auto' }}
                  />
                  <h3>Phyllcia</h3>
                  <span className="title">{t.team.phyllciaTitle}</span>
                  <div className="team-divider" />
                  <p>{t.team.phyllciaBio}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* GIFTS & SPECIALS */}
      <section id="gifts">
        <div className="section-header">
          <span className="section-label">{s(gifts?.sectionEyebrow, t.gifts.eyebrow)}</span>
          <div className="divider-gold" />
        </div>
        <div className={`gifts-grid${!special ? ' gifts-grid--two' : ''}`}>

          {/* Card 1 — Gift Card */}
          <div className="gifts-card">
            <img
              className="gifts-card-img"
              src={giftCardImageUrl ?? '/Gift_Card_View.png'}
              alt="La Belle' Beauty Bar gift card"
              loading="lazy"
            />
            <h3>
              {!isEs && gifts?.giftCardHeading ? (
                gifts.giftCardHeading
              ) : (
                <>
                  {t.gifts.giftHeading1} <em>{t.gifts.giftHeading1Em}</em>
                </>
              )}
            </h3>
            <p>{s(gifts?.giftCardSubtext, t.gifts.giftSubtext)}</p>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              {s(gifts?.giftCardButtonText, t.gifts.giftBtn)}
            </a>
          </div>

          {/* Card 2 — Monthly Special */}
          {special && (
            <div className="gifts-card">
              {monthlySpecialImageUrl && (
                <img
                  className="gifts-card-img"
                  src={monthlySpecialImageUrl}
                  alt={special.title ?? 'Monthly Special'}
                  loading="lazy"
                />
              )}
              <h3>
                {sEs(special.title, special.monthlySpecialTitleEs, t.gifts.eyebrow)}
              </h3>
              {special.subtitle && <p className="gifts-sub">{special.subtitle}</p>}
              {(special.description || special.monthlySpecialDescriptionEs) && (
                <p>
                  {sEs(special.description, special.monthlySpecialDescriptionEs, '')}
                </p>
              )}
              {special.availableThrough && (
                <span className="gifts-date">
                  {t.gifts.availableThrough} {special.availableThrough}
                </span>
              )}
              <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
                {t.gifts.bookSpecial}
              </a>
            </div>
          )}

          {/* Card 3 — New Client Offer */}
          <div className="gifts-card">
            <img
              className="gifts-card-img"
              src={specialsImageUrl ?? '/Belle-Points.png'}
              alt="25% off for first time clients"
              loading="lazy"
              style={{ objectPosition: 'top center' }}
            />
            <h3>{t.gifts.firstTimeTitle}</h3>
            <p>{t.gifts.firstTimeDesc}</p>
            <span className="gifts-code">{t.gifts.firstTimeCode}</span>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              {t.gifts.firstTimeBtn}
            </a>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="testimonials-inner">
          <span className="section-label">{s(reviews?.sectionEyebrow, t.reviews.eyebrow)}</span>
          <div className="divider-gold" />
          <span className="quote-mark">&ldquo;</span>
          <p className="testimonial-text">
            {s(reviews?.review1Quote, t.reviews.review1)}
          </p>
          <p className="testimonial-author">
            {s(reviews?.review1Name, t.reviews.review1Name)}&nbsp;
            <span>★★★★★</span>&nbsp;{t.reviews.googleReview}
          </p>
          <div className="review-count">
            <span className="review-stars">★★★★★</span>
            <span className="review-info">{s(reviews?.badgeText, t.reviews.badge)}</span>
          </div>
        </div>
      </section>

      {/* BOOKING / HOURS */}
      <section id="booking">
        <div className="booking-bg-text">La Belle&apos;</div>
        <div className="booking-inner">
          <span className="section-label">{t.booking.eyebrow}</span>
          <h2>
            {t.booking.heading1}
            <br />
            <em>{t.booking.heading2Em}</em>
          </h2>
          <p>{t.booking.subtext}</p>
          <div className="booking-actions">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              {t.booking.primaryBtn}
            </a>
            <a href={`tel:${phoneRaw}`} className="btn-outline">
              {t.booking.callPrefix} {phone}
            </a>
          </div>
          <div className="booking-hours">
            <div className="hour-item">
              <span className="hour-day">{t.booking.tue}</span>
              <span className="hour-time">9am – 7pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">{t.booking.wedThu}</span>
              <span className="hour-time">12pm – 7pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">{t.booking.fri}</span>
              <span className="hour-time">9am – 6pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">{t.booking.sat}</span>
              <span className="hour-time">10am – 4pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">{t.booking.sunMon}</span>
              <span className="hour-time">{t.booking.closed}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section id="contact">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.155!2d-78.9102673!3d35.7775925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aced123cb5c36d%3A0xa36212737ce82752!2sLa%20Belle%27%20Beauty%20Bar!5e0!3m2!1sen!2sus!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Belle' Beauty Bar location map"
          />
        </div>
        <div className="contact-info">
          <div className="contact-info-inner">
            <span
              className="section-label"
              style={{ fontSize: '16px', letterSpacing: '.25em', marginBottom: '8px' }}
            >
              {t.contact.eyebrow}
            </span>
            <div
              style={{ width: '40px', height: '1px', background: '#C9954A', margin: '0 auto 20px' }}
            />
            <div className="contact-block">
              <span className="contact-block-label">{t.contact.address}</span>
              <address>
                {contact?.address ?? '3675 Green Level W Road, Suite 205'}
                <br />
                {contact?.city ?? 'Apex, NC 27523'}
              </address>
            </div>
            <div className="contact-block">
              <span className="contact-block-label">{t.contact.contactLabel}</span>
              <p>
                <a href={`tel:${phoneRaw}`}>{t.contact.callPrefix} {phone}</a>
                <br />
                <a href={`sms:${textRaw}`}>{t.contact.textPrefix} {textNum}</a>
              </p>
            </div>
            <div className="contact-block">
              <span className="contact-block-label">{t.contact.hours}</span>
              <div className="contact-hours-grid">
                <span className="day">{t.contact.tue}</span>
                <span>9:00 am – 7:00 pm</span>
                <span className="day">{t.contact.wed}</span>
                <span>12:00 pm – 7:00 pm</span>
                <span className="day">{t.contact.thu}</span>
                <span>12:00 pm – 7:00 pm</span>
                <span className="day">{t.contact.fri}</span>
                <span>9:00 am – 6:00 pm</span>
                <span className="day">{t.contact.sat}</span>
                <span>10:00 am – 4:00 pm</span>
                <span className="day closed">{t.contact.sun}</span>
                <span className="closed">{t.contact.closed}</span>
                <span className="day closed">{t.contact.mon}</span>
                <span className="closed">{t.contact.closed}</span>
              </div>
            </div>
            <div className="contact-divider" />
            <p className="contact-arrival">
              <span className="contact-block-label" style={{ marginBottom: '6px' }}>
                {t.contact.gettingHere}
              </span>
              {sEs(contact?.gettingHereText, null, t.contact.gettingHereText)}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn-gold"
              style={{ padding: '14px 40px' }}
            >
              {s(contact?.bookButtonText, t.contact.btn)}
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <div style={{ display: showInstagram ? 'block' : 'none' }}>
        <section id="social">
          <span className="section-label">{t.instagram.eyebrow}</span>
          <div className="divider-gold" />
          <h2>
            {t.instagram.heading1}{t.instagram.heading2Em ? <> <em>{t.instagram.heading2Em}</em></> : null}
          </h2>
          <p className="social-sub">{t.instagram.subtext}</p>
          <div className="social-platforms">
            <a
              href="https://www.instagram.com/labellebeautyb"
              target="_blank"
              rel="noopener"
              className="social-pill"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram &nbsp;
              <span className="social-pill-handle">@labellebeautyb</span>
            </a>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand" style={{ textAlign: 'center' }}>
            <img
              src="/labelle-logo-white.png"
              alt="La Belle' Beauty Bar"
              style={{ height: '70px', width: 'auto', display: 'block', margin: '0 auto 16px' }}
            />
            <p>{s(footer?.description, t.footer.description)}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer.services}</h4>
            <ul>
              {(isEs
                ? [t.footer.waxing, t.footer.facials, t.footer.browLash]
                : (footer?.servicesList?.length ? footer.servicesList : ['Waxing', 'Facials', 'Brow + Lash'])
              ).map((service) => (
                <li key={service}><a href="#services">{service}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener">{t.footer.bookOnline}</a></li>
              <li><a href="#about">{t.footer.aboutUs}</a></li>
              <li><a href="#team">{t.footer.meetTeam}</a></li>
              <li><a href="#testimonials">{t.footer.reviews}</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t.footer.visitUs}</h4>
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
            {s(footer?.copyrightText, t.footer.copyright)}
          </span>
          <span className="footer-tagline">
            {s(footer?.tagline, t.footer.tagline)}
          </span>
        </div>
      </footer>

      <ChatWidget />
      <ClientInit />
    </>
  );
}
