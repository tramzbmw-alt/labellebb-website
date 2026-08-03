import { defineField, defineType } from 'sanity';

export const artwork = defineType({
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Shailyn fills in from Studio',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g. Acrylic on Canvas',
      initialValue: 'Acrylic on Canvas',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      description: 'e.g. 16 x 20 inches',
    }),
    defineField({
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      description: '0 = display only, no price shown',
      initialValue: 0,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Inquire', value: 'inquire' },
          { title: 'Not For Sale', value: 'not_for_sale' },
          { title: 'Sold', value: 'sold' },
        ],
        layout: 'radio',
      },
      initialValue: 'available',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
    defineField({
      name: 'isPartOfSeries',
      title: 'Part of a Series?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seriesName',
      title: 'Series Name',
      type: 'string',
      description: 'e.g. Fruit Series',
      hidden: ({ document }) => !document?.isPartOfSeries,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      status: 'status',
      series: 'seriesName',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepare({ title, media, status, series }: { title?: string; media?: any; status?: string; series?: string }) {
      return {
        title: title || '(Untitled)',
        subtitle: [series, status].filter(Boolean).join(' · '),
        media,
      };
    },
  },
});
