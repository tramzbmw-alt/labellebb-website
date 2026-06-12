import { defineField, defineType } from 'sanity';

export const contactSection = defineType({
  name: 'contactSection',
  title: 'Contact Section',
  type: 'document',
  fields: [
    defineField({ name: 'address', title: 'Street Address', type: 'string', description: 'e.g. 3675 Green Level W Road, Suite 205' }),
    defineField({ name: 'city', title: 'City / State / Zip', type: 'string', description: 'e.g. Apex, NC 27523' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string', description: 'e.g. (919) 321-1148' }),
    defineField({ name: 'textNumber', title: 'Text Number', type: 'string', description: 'e.g. (919) 759-5828' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'gettingHereText', title: 'Getting Here Instructions', type: 'text', rows: 3 }),
    defineField({ name: 'bookButtonText', title: 'Book Button Text', type: 'string', description: 'e.g. Book Appointment' }),
  ],
});
