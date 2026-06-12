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
  ],
});
