import { defineField, defineType } from 'sanity';

export const monthlySpecial = defineType({
  name: 'monthlySpecial',
  title: 'Monthly Special',
  type: 'document',
  fields: [
    defineField({
      name: 'active',
      title: 'Show Monthly Special',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'availableThrough',
      title: 'Available Through',
      type: 'string',
      description: 'e.g. "June 21" or "End of Month"',
    }),
    defineField({
      name: 'specialImage',
      title: 'Promo Image',
      type: 'image',
      options: { hotspot: true },
      description: "Optional image for this month's special",
    }),
    defineField({
      name: 'monthlySpecialTitleEs',
      title: 'Title (Spanish)',
      type: 'string',
      description: 'Spanish version of the monthly special title',
    }),
    defineField({
      name: 'monthlySpecialDescriptionEs',
      title: 'Description (Spanish)',
      type: 'text',
      rows: 3,
      description: 'Spanish version of the monthly special description',
    }),
  ],
});
