import { defineField, defineType } from 'sanity';

export const footerContent = defineType({
  name: 'footerContent',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({ name: 'description', title: 'Brand Description', type: 'text', rows: 2, description: 'Tagline paragraph under the logo' }),
    defineField({ name: 'copyrightText', title: 'Copyright Text', type: 'string', description: 'e.g. © 2026 La Belle\' Beauty Bar LLC · Apex, NC · All rights reserved' }),
    defineField({ name: 'tagline', title: 'Footer Tagline', type: 'string', description: "e.g. We are Lavish. We are Luxury. We are La Belle'." }),
  ],
});
