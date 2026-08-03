import { defineField, defineType } from 'sanity';

export const sectionVisibility = defineType({
  name: 'sectionVisibility',
  title: 'Site Images & Visibility',
  type: 'document',
  groups: [
    { name: 'images', title: 'Site Images' },
    { name: 'visibility', title: 'Show / Hide Sections' },
  ],
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'images',
      options: { hotspot: true },
      description: 'Full-width background photo behind the hero headline',
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Section Photo',
      type: 'image',
      group: 'images',
      options: { hotspot: true },
      description: 'Photo shown in the Our Story / About section',
    }),
    defineField({
      name: 'showFlashSale',
      title: 'Show Flash Sale Banner',
      type: 'boolean',
      group: 'visibility',
      initialValue: false,
    }),
    defineField({
      name: 'showProducts',
      title: 'Show Products Section',
      type: 'boolean',
      group: 'visibility',
      initialValue: false,
    }),
    defineField({
      name: 'showInstagram',
      title: 'Show Instagram Section',
      type: 'boolean',
      group: 'visibility',
      initialValue: false,
    }),
    defineField({
      name: 'showProductsPage',
      title: 'Show Products Page',
      type: 'boolean',
      group: 'visibility',
      description: 'When off, /products shows a Coming Soon message and PRODUCTS disappears from nav',
      initialValue: true,
    }),
    defineField({
      name: 'showGalleryPage',
      title: 'Show Gallery Page',
      type: 'boolean',
      group: 'visibility',
      description: 'When off, /gallery shows a Coming Soon message and GALLERY disappears from nav',
      initialValue: true,
    }),
  ],
});
