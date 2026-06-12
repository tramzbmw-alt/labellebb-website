import type { Metadata } from 'next';
import './globals.css';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: "La Belle' Beauty Bar",
  image: 'https://labellebb.vercel.app/labelle-about-section.png',
  url: 'https://labellebb.vercel.app',
  telephone: '+19193211148',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3675 Green Level W Road, Suite 205',
    addressLocality: 'Apex',
    addressRegion: 'NC',
    postalCode: '27523',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '12:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '12:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' },
  ],
  priceRange: '$$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '64',
  },
};

export const metadata: Metadata = {
  title: "La Belle' Beauty Bar | Luxury Boutique Beauty · Apex, NC",
  description:
    "La Belle' Beauty Bar — luxury waxing, facials, lash & brow services in Apex, NC. Black-owned, woman-owned. 5-star boutique beauty bar.",
  openGraph: {
    title: "La Belle' Beauty Bar — Luxury Beauty in Apex, NC",
    description:
      'Waxing, facials, lash & brow services in Apex, NC. Woman-owned luxury beauty bar. Book online today.',
    images: ['https://labellebb.vercel.app/labelle-about-section.png'],
    url: 'https://labellebb.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "La Belle' Beauty Bar",
    description: 'Luxury waxing, facials, lash & brow services in Apex, NC.',
    images: ['https://labellebb.vercel.app/labelle-about-section.png'],
  },
  alternates: {
    canonical: 'https://labellebb.vercel.app',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
