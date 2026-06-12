import { defineField, defineType } from 'sanity';

export const sectionVisibility = defineType({
  name: 'sectionVisibility',
  title: 'Section Visibility',
  type: 'document',
  fields: [
    defineField({
      name: 'showInstagram',
      title: 'Show Instagram Section',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showProducts',
      title: 'Show Products Section',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showFlashSale',
      title: 'Show Flash Sale Section',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Full-width background photo on the hero section',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Section Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'The photo shown in the Our Story / About section',
    }),
  ],
});
