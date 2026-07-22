import { defineField, defineType } from 'sanity';

export const signatureServices = defineType({
  name: 'signatureServices',
  title: 'Signature Services',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionEyebrow',
      title: 'Section Eyebrow Text',
      type: 'string',
      description: 'e.g. WHAT WE OFFER',
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'e.g. Signature Services',
    }),
    defineField({
      name: 'sectionSubtext',
      title: 'Section Subtext',
      type: 'text',
    }),
    defineField({
      name: 'card1Title',
      title: 'Card 1 Title',
      type: 'string',
      description: 'e.g. Waxing',
    }),
    defineField({
      name: 'card1Description',
      title: 'Card 1 Description',
      type: 'text',
    }),
    defineField({
      name: 'card2Title',
      title: 'Card 2 Title',
      type: 'string',
      description: 'e.g. Facials',
    }),
    defineField({
      name: 'card2Description',
      title: 'Card 2 Description',
      type: 'text',
    }),
    defineField({
      name: 'card3Title',
      title: 'Card 3 Title',
      type: 'string',
      description: 'e.g. Brow + Lash',
    }),
    defineField({
      name: 'card3Description',
      title: 'Card 3 Description',
      type: 'text',
    }),
  ],
});
