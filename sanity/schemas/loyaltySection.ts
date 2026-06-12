import { defineField, defineType } from 'sanity';

export const loyaltySection = defineType({
  name: 'loyaltySection',
  title: 'Loyalty / Promo Section',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'e.g. First Time? Welcome.' }),
    defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'e.g. Start Your Beauty Journey' }),
    defineField({ name: 'subtext', title: 'Body Text', type: 'text', rows: 3 }),
    defineField({ name: 'promoCode', title: 'Promo Code', type: 'string', description: 'e.g. FIRSTTIME' }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string', description: 'e.g. Claim Your Discount' }),
    defineField({ name: 'stat1Number', title: 'Stat 1 Number', type: 'string', description: 'e.g. 10pts' }),
    defineField({ name: 'stat1Label', title: 'Stat 1 Label', type: 'string', description: 'e.g. Per Dollar Spent' }),
    defineField({ name: 'stat2Number', title: 'Stat 2 Number', type: 'string', description: 'e.g. 100pts' }),
    defineField({ name: 'stat2Label', title: 'Stat 2 Label', type: 'string', description: 'e.g. Online Booking Bonus' }),
    defineField({ name: 'stat3Number', title: 'Stat 3 Number', type: 'string', description: 'e.g. 500pts' }),
    defineField({ name: 'stat3Label', title: 'Stat 3 Label', type: 'string', description: 'e.g. On Your 6th Visit' }),
  ],
});
