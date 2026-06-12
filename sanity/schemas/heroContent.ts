import { defineField, defineType } from 'sanity';

export const heroContent = defineType({
  name: 'heroContent',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'line1',
      title: 'Headline Line 1',
      type: 'string',
      description: 'e.g. We Are Lavish,',
    }),
    defineField({
      name: 'line2',
      title: 'Headline Line 2',
      type: 'string',
      description: 'e.g. We Are Luxury,',
    }),
    defineField({
      name: 'line3',
      title: 'Headline Line 3',
      type: 'string',
      description: "e.g. We Are La Belle'",
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. Luxury Boutique Beauty · Apex, NC',
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'text',
      rows: 3,
      description: 'The paragraph below the tagline',
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      description: 'e.g. Book Your Appointment',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      description: 'e.g. Explore Services',
    }),
  ],
});
