import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'announcementBar',
      title: 'Announcement Bar Text',
      type: 'string',
      description: 'Text shown in the top announcement strip',
    }),
    defineField({
      name: 'announcementActive',
      title: 'Show Announcement Bar',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
