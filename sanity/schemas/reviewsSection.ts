import { defineField, defineType } from 'sanity';

export const reviewsSection = defineType({
  name: 'reviewsSection',
  title: 'Reviews Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionEyebrow', title: 'Section Eyebrow', type: 'string', description: 'e.g. Client Love' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string', description: 'e.g. What Our Clients Say' }),
    defineField({ name: 'review1Quote', title: 'Review 1 Quote', type: 'text', rows: 3 }),
    defineField({ name: 'review1Name', title: 'Review 1 Attribution', type: 'string', description: 'e.g. — Verified Client · Google Review' }),
    defineField({ name: 'review2Quote', title: 'Review 2 Quote', type: 'text', rows: 3 }),
    defineField({ name: 'review2Name', title: 'Review 2 Attribution', type: 'string' }),
    defineField({ name: 'badgeText', title: 'Badge Text', type: 'string', description: 'e.g. 5.0 · 64 Google Reviews · Apex, NC' }),
  ],
});
