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
      name: 'heroDisplayMode',
      title: 'Hero Display Mode',
      type: 'string',
      group: 'images',
      options: {
        list: [
          { title: 'Photo Only', value: 'photo' },
          { title: 'Video Only', value: 'video' },
          { title: 'Video with Photo (Recommended)', value: 'video-with-photo' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
      description:
        '"Video with Photo" gives instant photo display while the video loads, then the video plays over it — best of both worlds.',
    }),
    defineField({
      name: 'heroVideo',
      title: 'Hero Video (MP4)',
      type: 'file',
      group: 'images',
      options: { accept: 'video/mp4' },
      description: 'Upload an MP4 video to use as the hero background. Used when Hero Display Mode is set to Video or Video with Photo.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      group: 'images',
      options: { hotspot: true },
      description: 'Full-width background photo behind the hero headline. Also used as the video poster in "Video with Photo" mode.',
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
    defineField({
      name: 'showHomepageVideo',
      title: 'Show Homepage Video',
      type: 'boolean',
      group: 'visibility',
      description: 'Full-screen video that plays above the hero on desktop (hidden on mobile). Turn off to start the page directly with the hero.',
      initialValue: true,
    }),
  ],
});
