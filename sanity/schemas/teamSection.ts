import { defineField, defineType } from 'sanity';

export const teamSection = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'document',
  fields: [
    defineField({ name: 'sectionEyebrow', title: 'Section Eyebrow', type: 'string', description: 'e.g. Meet the Experts' }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string', description: 'e.g. Your Beauty Team' }),
    defineField({ name: 'sectionSubtext', title: 'Section Subtext', type: 'text', rows: 2 }),
  ],
});
