import { defineField, defineType } from 'sanity';

export const giftsSection = defineType({
  name: 'giftsSection',
  title: 'Gifts & Specials Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionEyebrow', title: 'Section Eyebrow', type: 'string', description: 'e.g. Gifts & Specials' }),
    defineField({ name: 'giftCardHeading', title: 'Gift Card Heading', type: 'string', description: "e.g. Give the Gift of Beauty" }),
    defineField({ name: 'giftCardSubtext', title: 'Gift Card Subtext', type: 'text', rows: 2 }),
    defineField({ name: 'giftCardButtonText', title: 'Gift Card Button Text', type: 'string', description: 'e.g. Purchase a Gift Card' }),
    defineField({ name: 'specialsEyebrow', title: "Monthly Special Eyebrow", type: 'string', description: "e.g. This Month's Special" }),
  ],
});
