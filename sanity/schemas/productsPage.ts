import { defineField, defineType } from 'sanity';

export const productsPage = defineType({
  name: 'productsPage',
  title: 'Products Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'e.g. Products We Love',
    }),
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow Text',
      type: 'string',
      description: 'e.g. CLEAN BEAUTY',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'string',
      description: 'e.g. Natural · Organic · Vegan · Luxurious',
    }),
    defineField({
      name: 'collectionHeading',
      title: 'Collection Heading',
      type: 'string',
      description: 'e.g. Luxe Body Oil Collection',
    }),
    defineField({
      name: 'collectionSubtext',
      title: 'Collection Subtext',
      type: 'string',
      description: 'e.g. Natural · Clean · Luxurious · $26 each',
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Bottom CTA Heading',
      type: 'string',
      description: 'e.g. Experience our products in person',
    }),
    defineField({
      name: 'ctaSubtext',
      title: 'Bottom CTA Subtext',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Bottom CTA Button Text',
      type: 'string',
      description: 'e.g. BOOK YOUR APPOINTMENT',
    }),
  ],
});
