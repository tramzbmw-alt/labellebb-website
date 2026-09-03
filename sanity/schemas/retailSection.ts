import { defineField, defineType } from 'sanity';

export const retailSection = defineType({
  name: 'retailSection',
  title: 'Retail & Skincare Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'e.g. Daily Needs',
    }),
    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      description: 'e.g. Clean Beauty You Can Take Home',
    }),
    defineField({
      name: 'description1',
      title: 'First Paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description2',
      title: 'Second Paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tags',
      title: 'Product Category Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. BODY OILS, CLEAN BEAUTY, SCRUBS',
    }),
  ],
});
