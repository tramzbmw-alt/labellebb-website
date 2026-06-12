import { type SchemaTypeDefinition } from 'sanity';
import { siteSettings } from '../schemas/siteSettings';
import { flashSale } from '../schemas/flashSale';
import { monthlySpecial } from '../schemas/monthlySpecial';
import { teamMember } from '../schemas/teamMember';
import { services } from '../schemas/services';
import { sectionVisibility } from '../schemas/sectionVisibility';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, flashSale, monthlySpecial, teamMember, services, sectionVisibility],
};
