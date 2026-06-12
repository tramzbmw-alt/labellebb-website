import { defineField, defineType } from 'sanity';

export const ourStory = defineType({
  name: 'ourStory',
  title: 'Our Story',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string', description: 'e.g. Our Story' }),
    defineField({ name: 'heading', title: 'Main Heading', type: 'string', description: 'e.g. A Sanctuary Built for You' }),
    defineField({ name: 'paragraph1', title: 'First Paragraph', type: 'text', rows: 3 }),
    defineField({ name: 'paragraph2', title: 'Second Paragraph', type: 'text', rows: 3 }),
    defineField({ name: 'badge1', title: 'Badge 1', type: 'string', description: 'e.g. Woman-Owned' }),
    defineField({ name: 'badge2', title: 'Badge 2', type: 'string', description: 'e.g. 5-Star Rated' }),
    defineField({ name: 'badge3', title: 'Badge 3', type: 'string', description: 'e.g. Clean Beauty' }),
    defineField({ name: 'badge4', title: 'Badge 4', type: 'string', description: 'e.g. Luxury Experience' }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string', description: 'e.g. Reserve Your Visit' }),
    defineField({ name: 'stat1Number', title: 'Stat 1 Number', type: 'string', description: 'e.g. 5★' }),
    defineField({ name: 'stat1Label', title: 'Stat 1 Label', type: 'string', description: 'e.g. Average Rating' }),
    defineField({ name: 'stat2Number', title: 'Stat 2 Number', type: 'string', description: 'e.g. 64' }),
    defineField({ name: 'stat2Label', title: 'Stat 2 Label', type: 'string', description: 'e.g. Google Reviews' }),
    defineField({ name: 'stat3Number', title: 'Stat 3 Number', type: 'string', description: 'e.g. 7+' }),
    defineField({ name: 'stat3Label', title: 'Stat 3 Label', type: 'string', description: 'e.g. Services Offered' }),
  ],
});
