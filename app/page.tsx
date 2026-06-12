import Navbar from '@/components/Navbar';
import ChatWidget from '@/components/ChatWidget';
import ClientInit from '@/components/ClientInit';

const BOOKING_URL =
  'https://www.fresha.com/a/la-belle-beauty-bar-apex-3675-green-level-west-road-k4js9tu2/booking?menu=true&pId=2774348';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-headline">
            We Are{' '}
            <span style={{ color: '#C9954A', fontStyle: 'italic' }}>Lavish</span>
            <span style={{ color: '#ffffff' }}>,</span>
            <br />
            We Are{' '}
            <span style={{ color: '#C9954A', fontStyle: 'italic' }}>Luxury</span>
            <span style={{ color: '#ffffff' }}>,</span>
            <br />
            We Are{' '}
            <span style={{ color: '#C9954A', fontStyle: 'italic' }}>La Belle</span>
            <span style={{ color: '#ffffff' }}>&apos;</span>
          </h1>
          <div className="hero-eyebrow">Luxury Boutique Beauty · Apex, NC</div>
          <p className="hero-sub">
            La Belle&apos; Beauty Bar is a one-stop-shop that offers a plethora of beauty
            services and products rooted in luxury, community and expertise — waxing, facials,
            lash &amp; brow services, and curated clean skincare.
          </p>
          <div className="hero-actions">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              Book Your Appointment
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>
        </div>
        <div className="hero-badge">
          <div className="hero-badge-star">★★★★★</div>
          <span className="hero-badge-num">64</span>
          <span className="hero-badge-text">Google Reviews</span>
        </div>
        <div className="hero-scroll">
          <span>Discover</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ANNOUNCEMENT STRIP */}
      <div className="strip" id="announcementStrip">
        <p>
          New clients receive 25% off — use code <strong>FIRSTTIME</strong> at booking
          &nbsp;·&nbsp;{' '}
          <a href={BOOKING_URL} target="_blank" rel="noopener">
            Book Now
          </a>
        </p>
      </div>

      {/* FLASH SALE: Change display:none to display:block to activate */}
      <div
        id="flashSale"
        style={{
          display: 'none',
          background: '#C9954A',
          padding: '40px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}
        >
          <span className="fs-lightning" style={{ fontSize: '2rem' }}>
            ⚡
          </span>
          <span
            className="fs-heading"
            style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#111111',
              textTransform: 'uppercase',
            }}
          >
            Father&apos;s Day Special 🎁
          </span>
          <span className="fs-lightning" style={{ fontSize: '2rem' }}>
            ⚡
          </span>
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
          Treat Dad to a Beard Facial or Back Wax — the perfect gift this Father&apos;s Day
        </p>
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
          Limited time offer &middot; June 15 only
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener"
          className="fs-book-btn"
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
          Book Now
        </a>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-photo">
          <img
            src="/labelle-home-header.png"
            alt="La Belle' Beauty Bar interior"
            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
          />
          <div className="about-photo-accent" />
        </div>
        <div className="about-content">
          <span className="section-label">Our Story</span>
          <div className="divider-gold left" />
          <h2>
            A Sanctuary
            <br />
            Built for <em>You</em>
          </h2>
          <p>
            La Belle&apos; Beauty Bar is a luxury boutique beauty bar nestled in Apex, NC —
            where every client is treated to a personalized, elevated experience from the moment
            they walk through the door.
          </p>
          <p>
            Founded on a passion for clean beauty and genuine care, we believe luxury isn&apos;t
            just about results — it&apos;s about feeling completely seen, celebrated, and at home.
          </p>
          <div className="about-tags">
            <span className="about-tag">Woman-Owned</span>
            <span className="about-tag">5-Star Rated</span>
            <span className="about-tag">Clean Beauty</span>
            <span className="about-tag">Luxury Experience</span>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className="btn-gold"
            style={{ textAlign: 'center' }}
          >
            Reserve Your Visit
          </a>
          <div className="about-stats">
            <div className="stat">
              <span className="stat-num">5★</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat">
              <span className="stat-num">64</span>
              <span className="stat-label">Google Reviews</span>
            </div>
            <div className="stat">
              <span className="stat-num">7+</span>
              <span className="stat-label">Services Offered</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <span className="section-label">What We Offer</span>
        <div className="divider-gold" />
        <h2>
          Signature <em>Services</em>
        </h2>
        <p className="services-sub">
          From precise waxing to transformative facials and stunning lash &amp; brow artistry —
          every treatment is designed with intention.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <img src="/labelle-services-header.png" alt="Waxing services at La Belle'" loading="lazy" />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-num">01</span>
              <div className="service-card-line" />
              <h3>Waxing</h3>
              <p>
                Precision waxing using hard wax — gentle on sensitive skin. Brazilian, bikini,
                underarm, full body, and face waxing with smooth, long-lasting results.
              </p>
            </div>
          </div>
          <div className="service-card">
            <img src="/labelle-services-section.png" alt="Facial services at La Belle'" loading="lazy" />
            <div className="service-card-overlay" />
            <div className="service-card-content">
              <span className="service-card-num">02</span>
              <div className="service-card-line" />
              <h3>Facials</h3>
              <p>
                Custom facials, beard treatments, and back purifiers — each one tailored to your
                skin&apos;s unique story.
              </p>
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
              <h3 style={{ whiteSpace: 'nowrap' }}>Brow + Lash</h3>
              <p>
                Lash lifts, tinting, brow lamination, and shaping — frame your face with artistry
                that lasts for weeks.
              </p>
            </div>
          </div>
        </div>

        <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
          View Full Menu &amp; Book
        </a>
      </section>

      {/* PRODUCTS SECTION: Change display:none to display:block to re-enable when products available */}
      <div style={{ display: 'none' }}>
        <section id="products">
          <div className="products-content">
            <span className="section-label">Retail &amp; Skincare</span>
            <div className="divider-gold left" />
            <h2>
              Clean Beauty
              <br />
              <em>You Can Take Home</em>
            </h2>
            <p>
              Our curated retail selection features natural, organic, and vegan formulas — the
              same quality we trust in every treatment, available for your daily ritual.
            </p>
            <p>
              From luxurious body oils and whipped butters to targeted serums and gentle
              cleansers, every product is chosen with your skin&apos;s health in mind.
            </p>
            <div className="products-pills">
              <span className="pill">Body Oils</span>
              <span className="pill">Body Butters</span>
              <span className="pill">Serums</span>
              <span className="pill">Cleansers</span>
              <span className="pill">Vegan</span>
              <span className="pill">Organic</span>
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
      </div>

      {/* PROMO BANNER */}
      <section id="promo">
        <div className="promo-inner">
          <span className="promo-label">First Time? Welcome.</span>
          <h2>
            Start Your
            <br />
            Beauty Journey
          </h2>
          <p>
            New to La Belle&apos;? We&apos;d love to meet you. Use the code below at checkout and
            receive 25% off your first service — because you deserve to arrive in luxury.
          </p>
          <div className="promo-code">FIRSTTIME</div>
          <br />
          <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-white">
            Claim Your Discount
          </a>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <span className="section-label">Meet the Experts</span>
        <div className="divider-gold" />
        <h2>
          Your <em>Beauty Team</em>
        </h2>
        <p className="team-sub">
          Licensed, passionate, and dedicated to giving every client a results-driven, luxury
          experience.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-card-body">
              <h3>Mia</h3>
              <span className="title">Licensed Esthetician</span>
              <div className="team-divider" />
              <p>
                Specializing in full body waxing and brow + lash services. Mia brings expertise
                and a warm touch to every appointment.
              </p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-card-body">
              <h3>Phyllcia</h3>
              <span className="title">Master Esthetician</span>
              <div className="team-divider" />
              <p>
                A master of transformative facials and full-body waxing services. Phyllcia
                tailors every treatment to your skin&apos;s individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GIFTS & SPECIALS */}
      <section id="gifts">
        <div className="section-header">
          <span className="section-label">Gifts &amp; Specials</span>
          <div className="divider-gold" />
        </div>

        <div className="gifts-grid">
          {/* Gift Cards */}
          <div className="gifts-col">
            <img src="/Gift_Card_View.png" alt="La Belle' Beauty Bar gift card" loading="lazy" />
            <h3>
              Give the Gift
              <br />
              of <em>Beauty</em>
            </h3>
            <p>
              Treat someone special to a La Belle&apos; experience. Gift cards are available in
              any amount and never expire.
            </p>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              Purchase a Gift Card
            </a>
          </div>

          {/* Monthly Special — Update this section monthly */}
          <div className="gifts-col">
            <span className="section-label">This Month&apos;s Special</span>
            <div className="gifts-divider" />
            <h3>Father&apos;s Day</h3>
            <p className="gifts-sub">Beard Facial or Back Wax</p>
            <p>
              The perfect gift for Dad this Father&apos;s Day. Treat him to a luxurious
              experience at La Belle&apos;.
            </p>
            <span className="gifts-date">Available through June 21st</span>
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              Book This Special
            </a>
            <img
              src="/Belle-Points.png"
              alt="25% off all services for first time clients - use code FIRSTTIME"
              style={{ maxWidth: '280px', display: 'block', margin: '16px auto' }}
            />
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn-gold"
              style={{ display: 'block', textAlign: 'center', margin: '16px auto', maxWidth: '280px' }}
            >
              BOOK THIS SPECIAL
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="testimonials-inner">
          <span className="section-label">Client Love</span>
          <div className="divider-gold" />
          <span className="quote-mark">&ldquo;</span>
          <p className="testimonial-text">
            La Belle&apos; is honestly the best beauty experience I&apos;ve had. Phyllcia made me
            feel so welcome and my skin has never looked better. I won&apos;t go anywhere else.
          </p>
          <p className="testimonial-author">
            — Verified Client &nbsp;<span>★★★★★</span>&nbsp; Google Review
          </p>
          <div className="review-count">
            <span className="review-stars">★★★★★</span>
            <span className="review-info">5.0 · 64 Google Reviews · Apex, NC</span>
          </div>
        </div>
      </section>

      {/* BOOKING / HOURS */}
      <section id="booking">
        <div className="booking-bg-text">La Belle&apos;</div>
        <div className="booking-inner">
          <span className="section-label">Ready When You Are</span>
          <h2>
            Book Your
            <br />
            <em>Experience</em>
          </h2>
          <p>
            Reserve your appointment online in minutes — secure, simple, and hassle-free. New
            clients always welcome.
          </p>
          <div className="booking-actions">
            <a href={BOOKING_URL} target="_blank" rel="noopener" className="btn-gold">
              Book Your Appointment
            </a>
            <a href="tel:9193211148" className="btn-outline">
              Call (919) 321-1148
            </a>
          </div>
          <div className="booking-hours">
            <div className="hour-item">
              <span className="hour-day">Tuesday</span>
              <span className="hour-time">9am – 7pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">Wed · Thu</span>
              <span className="hour-time">12pm – 7pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">Friday</span>
              <span className="hour-time">9am – 6pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">Saturday</span>
              <span className="hour-time">10am – 4pm</span>
            </div>
            <div className="hour-item">
              <span className="hour-day">Sun · Mon</span>
              <span className="hour-time">Closed</span>
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
              Find Us
            </span>
            <div
              style={{
                width: '40px',
                height: '1px',
                background: '#C9954A',
                margin: '0 auto 20px',
              }}
            />
            <div className="contact-block">
              <span className="contact-block-label">Address</span>
              <address>
                3675 Green Level W Road, Suite 205
                <br />
                Apex, NC 27523
              </address>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Contact</span>
              <p>
                <a href="tel:9193211148">Call: (919) 321-1148</a>
                <br />
                <a href="sms:9197595828">Text: (919) 759-5828</a>
              </p>
            </div>

            <div className="contact-block">
              <span className="contact-block-label">Hours</span>
              <div className="contact-hours-grid">
                <span className="day">Tuesday</span>
                <span>9:00 am – 7:00 pm</span>
                <span className="day">Wednesday</span>
                <span>12:00 pm – 7:00 pm</span>
                <span className="day">Thursday</span>
                <span>12:00 pm – 7:00 pm</span>
                <span className="day">Friday</span>
                <span>9:00 am – 6:00 pm</span>
                <span className="day">Saturday</span>
                <span>10:00 am – 4:00 pm</span>
                <span className="day closed">Sunday</span>
                <span className="closed">Closed</span>
                <span className="day closed">Monday</span>
                <span className="closed">Closed</span>
              </div>
            </div>

            <div className="contact-divider" />

            <p className="contact-arrival">
              <span className="contact-block-label" style={{ marginBottom: '6px' }}>
                Getting Here
              </span>
              Enter through the keypad door, then take the elevator or stairs to the 2nd floor.
              Turn left, go through the door marked Suites 201–209 — Suite 205 is on the left.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn-gold"
              style={{ padding: '14px 40px' }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION: Change display:none to display:block when ready to add Instagram feed */}
      <div style={{ display: 'none' }}>
        <section id="social">
          <span className="section-label">Stay Connected</span>
          <div className="divider-gold" />
          <h2>
            Follow <em>Us</em>
          </h2>
          <p className="social-sub">
            Stay in the loop with new services, exclusive specials, and a peek behind the curtain
            at La Belle&apos;.
          </p>
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
            <p>
              A luxury boutique beauty bar in Apex, NC — waxing, facials, lash &amp; brow, and
              clean skincare, all in one beautiful space.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">Waxing</a>
              </li>
              <li>
                <a href="#services">Facials</a>
              </li>
              <li>
                <a href="#services">Brow + Lash</a>
              </li>
              <li>
                <a href="#services">Back Purifiers</a>
              </li>
              <li>
                <a href="#services">Beard Treatment Facial</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href={BOOKING_URL} target="_blank" rel="noopener">
                  Book Online
                </a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Meet the Team</a>
              </li>
              <li>
                <a href="#testimonials">Reviews</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit Us</h4>
            <address>
              3675 Green Level W Road
              <br />
              Suite 205
              <br />
              Apex, NC 27523
              <br />
              <br />
              <a href="tel:9193211148">(919) 321-1148</a>
              <br />
              <a href="mailto:info@labellebb.com">info@labellebb.com</a>
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; 2026 La Belle&apos; Beauty Bar LLC · Apex, NC · All rights reserved
          </span>
          <span className="footer-tagline">
            We are Lavish. We are Luxury. We are La Belle&apos;.
          </span>
        </div>
      </footer>

      <ChatWidget />
      <ClientInit />
    </>
  );
}
