import { type SchemaTypeDefinition } from 'sanity';
import { heroContent } from '../schemas/heroContent';
import { ourStory } from '../schemas/ourStory';
import { siteSettings } from '../schemas/siteSettings';
import { flashSale } from '../schemas/flashSale';
import { monthlySpecial } from '../schemas/monthlySpecial';
import { teamMember } from '../schemas/teamMember';
import { teamSection } from '../schemas/teamSection';
import { services } from '../schemas/services';
import { sectionVisibility } from '../schemas/sectionVisibility';
import { reviewsSection } from '../schemas/reviewsSection';
import { loyaltySection } from '../schemas/loyaltySection';
import { giftsSection } from '../schemas/giftsSection';
import { contactSection } from '../schemas/contactSection';
import { footerContent } from '../schemas/footerContent';
import { signatureServices } from '../schemas/signatureServices';
import { artwork } from '../schemas/artwork';
import { retailSection } from '../schemas/retailSection';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    heroContent,
    ourStory,
    siteSettings,
    flashSale,
    monthlySpecial,
    teamSection,
    teamMember,
    services,
    sectionVisibility,
    reviewsSection,
    loyaltySection,
    giftsSection,
    contactSection,
    footerContent,
    signatureServices,
    artwork,
    retailSection,
  ],
};
