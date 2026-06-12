import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-06-12',
  useCdn: false,
});

const documents = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    announcementBar: 'NEW CLIENTS RECEIVE 25% OFF — USE CODE FIRSTTIME AT BOOKING',
    announcementActive: true,
  },
  {
    _id: 'heroContent',
    _type: 'heroContent',
    tagline: 'Luxury Boutique Beauty · Apex, NC',
    bodyText:
      "La Belle' Beauty Bar is a one-stop-shop that offers a plethora of beauty services and products rooted in luxury, community and expertise — waxing, facials, lash & brow services, and curated clean skincare.",
    primaryButtonText: 'Book Your Appointment',
    secondaryButtonText: 'Explore Services',
  },
  {
    _id: 'ourStory',
    _type: 'ourStory',
    eyebrow: 'Our Story',
    heading: 'A Sanctuary Built for You',
    paragraph1:
      "La Belle' Beauty Bar is a luxury boutique beauty bar nestled in Apex, NC — where every client is treated to a personalized, elevated experience from the moment they walk through the door.",
    paragraph2:
      "Founded on a passion for clean beauty and genuine care, we believe luxury isn't just about results — it's about feeling completely seen, celebrated, and at home.",
    badge1: 'Woman-Owned',
    badge2: '5-Star Rated',
    badge3: 'Clean Beauty',
    badge4: 'Luxury Experience',
    buttonText: 'Reserve Your Visit',
    stat1Number: '5★',
    stat1Label: 'Average Rating',
    stat2Number: '64',
    stat2Label: 'Google Reviews',
    stat3Number: '7+',
    stat3Label: 'Services Offered',
  },
  {
    _id: 'reviewsSection',
    _type: 'reviewsSection',
    sectionEyebrow: 'Client Love',
    sectionHeading: 'What our clients say',
    review1Quote:
      'I love it here! This is home for me! As they say there is no place like home!!!',
    review1Name: '— Google Review',
    review2Quote:
      "I was thrilled to find La Belle — close to home and I loved the idea of supporting a Black-owned, woman-owned business.",
    review2Name: '— Google Review',
    badgeText: '5.0 Stars · 64 Google Reviews · 100% Recommend on Facebook',
  },
  {
    _id: 'teamSection',
    _type: 'teamSection',
    sectionEyebrow: 'Meet the Experts',
    sectionHeading: 'Your Beauty Team',
    sectionSubtext:
      'Licensed, passionate, and dedicated to giving every client a results-driven, luxury experience.',
  },
  {
    _id: 'loyaltySection',
    _type: 'loyaltySection',
    eyebrow: 'First Time? Welcome.',
    heading: 'Start Your Beauty Journey',
    subtext:
      "New to La Belle'? We'd love to meet you. Use the code below at checkout and receive 25% off your first service — because you deserve to arrive in luxury.",
    promoCode: 'FIRSTTIME',
    buttonText: 'Claim Your Discount',
    stat1Number: '10pts',
    stat1Label: 'Per Dollar Spent',
    stat2Number: '100pts',
    stat2Label: 'Online Booking Bonus',
    stat3Number: '500pts',
    stat3Label: 'On Your 6th Visit',
  },
  {
    _id: 'giftsSection',
    _type: 'giftsSection',
    sectionEyebrow: 'Gifts & Specials',
    giftCardHeading: "Give the Gift of Beauty",
    giftCardSubtext:
      "Treat someone special to a La Belle' experience. Gift cards are available in any amount and never expire.",
    giftCardButtonText: 'Purchase a Gift Card',
    specialsEyebrow: "This Month's Special",
  },
  {
    _id: 'contactSection',
    _type: 'contactSection',
    address: '3675 Green Level W Road, Suite 205',
    city: 'Apex, NC 27523',
    phone: '(919) 321-1148',
    textNumber: '(919) 759-5828',
    email: 'info@labellebb.com',
    gettingHereText:
      'Enter through the keypad door, then take the elevator or stairs to the 2nd floor. Turn left, go through the door marked Suites 201–209 — Suite 205 is on the left.',
    bookButtonText: 'Book Appointment',
  },
  {
    _id: 'monthlySpecial-fathersDay',
    _type: 'monthlySpecial',
    active: true,
    title: "Father's Day",
    subtitle: 'Beard Facial or Back Wax',
    description: "The perfect gift for Dad this Father's Day. Treat him to a luxurious experience at La Belle'.",
    availableThrough: 'June 21st',
  },
  {
    _id: 'footerContent',
    _type: 'footerContent',
    description:
      "A luxury boutique beauty bar in Apex, NC — waxing, facials, lash & brow, and clean skincare, all in one beautiful space.",
    copyrightText: "© 2026 La Belle' Beauty Bar LLC · Apex, NC · All rights reserved",
    tagline: "We are Lavish. We are Luxury. We are La Belle'.",
  },
];

async function seed() {
  console.log(`Seeding ${documents.length} documents to project ${client.config().projectId}...\n`);

  for (const doc of documents) {
    try {
      // createIfNotExists + patch preserves image fields set by seed-images.mjs
      await client.createIfNotExists(doc);
      const { _id, _type, ...fields } = doc;
      await client.patch(_id).set(fields).commit();
      console.log(`✓ ${doc._type} (${doc._id})`);
    } catch (err) {
      console.error(`✗ ${doc._type}: ${err.message}`);
    }
  }

  console.log('\nDone.');
}

seed();
