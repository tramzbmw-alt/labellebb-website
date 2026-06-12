import { defineField, defineType } from 'sanity';

export const flashSale = defineType({
  name: 'flashSale',
  title: 'Flash Sale',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Show Flash Sale',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
    }),
    defineField({
      name: 'expiryDate',
      title: 'Expiry Date',
      type: 'date',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Book Now',
    }),
  ],
});
