import { client } from './client';

const opts = { next: { revalidate: 60 } };
const liveOpts = { cache: 'no-store' } as const;

export type SiteSettings = {
  announcementBar?: string;
  announcementActive?: boolean;
  announcementTextEs?: string;
};

export type FlashSale = {
  active?: boolean;
  heading?: string;
  subtext?: string;
  expiryDate?: string;
  buttonText?: string;
};

export type MonthlySpecial = {
  active?: boolean;
  title?: string;
  subtitle?: string;
  description?: string;
  availableThrough?: string;
  specialImage?: { asset?: { _ref: string } };
  monthlySpecialTitleEs?: string;
  monthlySpecialDescriptionEs?: string;
};

export type TeamMember = {
  _id: string;
  name: string;
  title?: string;
  bio?: string;
  specialties?: string[];
};

export type SanityImageRef = {
  _type: 'image';
  asset: { _ref: string; _type: 'reference' };
  hotspot?: object;
  crop?: object;
};

export type SectionVisibility = {
  showInstagram?: boolean;
  showProducts?: boolean;
  showFlashSale?: boolean;
  heroImage?: SanityImageRef;
  aboutImage?: SanityImageRef;
};

export type OurStory = {
  eyebrow?: string;
  heading?: string;
  paragraph1?: string;
  paragraph2?: string;
  badge1?: string;
  badge2?: string;
  badge3?: string;
  badge4?: string;
  buttonText?: string;
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  stat3Number?: string;
  stat3Label?: string;
};

export type HeroContent = {
  line1?: string;
  line2?: string;
  line3?: string;
  tagline?: string;
  bodyText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  heroSubtextEs?: string;
};

export type ReviewsSection = {
  sectionEyebrow?: string;
  sectionHeading?: string;
  review1Quote?: string;
  review1Name?: string;
  review2Quote?: string;
  review2Name?: string;
  badgeText?: string;
};

export type TeamSection = {
  sectionEyebrow?: string;
  sectionHeading?: string;
  sectionSubtext?: string;
};

export type LoyaltySection = {
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  promoCode?: string;
  buttonText?: string;
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  stat3Number?: string;
  stat3Label?: string;
};

export type GiftsSection = {
  sectionEyebrow?: string;
  giftCardHeading?: string;
  giftCardSubtext?: string;
  giftCardButtonText?: string;
  specialsEyebrow?: string;
  giftCardImage?: SanityImageRef;
  specialsImage?: SanityImageRef;
};

export type ContactSection = {
  address?: string;
  city?: string;
  phone?: string;
  textNumber?: string;
  email?: string;
  gettingHereText?: string;
  bookButtonText?: string;
};

export type FooterContent = {
  description?: string;
  copyrightText?: string;
  tagline?: string;
};

export type SignatureServices = {
  sectionEyebrow?: string;
  sectionHeading?: string;
  sectionSubtext?: string;
  card1Title?: string;
  card1Description?: string;
  card2Title?: string;
  card2Description?: string;
  card3Title?: string;
  card3Description?: string;
};

export const signatureServicesQuery =
  "*[_type == 'signatureServices' && _id == 'signatureServices'][0]";

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`, {}, opts);
}

export async function getFlashSale(): Promise<FlashSale | null> {
  return client.fetch(`*[_type == "flashSale" && _id == "flashSale"][0]`, {}, liveOpts);
}

export async function getMonthlySpecial(): Promise<MonthlySpecial | null> {
  return client.fetch(`*[_type == "monthlySpecial" && active == true][0]`, {}, opts);
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(
    `*[_type == "teamMember"] | order(order asc) { _id, name, title, bio, specialties }`,
    {},
    opts
  );
}

export async function getSectionVisibility(): Promise<SectionVisibility | null> {
  return client.fetch(`*[_type == "sectionVisibility"][0]`, {}, liveOpts);
}

export async function getHeroContent(): Promise<HeroContent | null> {
  return client.fetch(`*[_type == "heroContent"][0]`, {}, opts);
}

export async function getOurStory(): Promise<OurStory | null> {
  return client.fetch(`*[_type == "ourStory"][0]`, {}, opts);
}

export async function getReviewsSection(): Promise<ReviewsSection | null> {
  return client.fetch(`*[_type == "reviewsSection"][0]`, {}, opts);
}

export async function getTeamSection(): Promise<TeamSection | null> {
  return client.fetch(`*[_type == "teamSection"][0]`, {}, opts);
}

export async function getLoyaltySection(): Promise<LoyaltySection | null> {
  return client.fetch(`*[_type == "loyaltySection"][0]`, {}, opts);
}

export async function getGiftsSection(): Promise<GiftsSection | null> {
  return client.fetch(`*[_type == "giftsSection"][0]`, {}, opts);
}

export async function getContactSection(): Promise<ContactSection | null> {
  return client.fetch(`*[_type == "contactSection"][0]`, {}, opts);
}

export async function getFooterContent(): Promise<FooterContent | null> {
  return client.fetch(`*[_type == "footerContent"][0]`, {}, opts);
}

export async function getSignatureServices(): Promise<SignatureServices | null> {
  return client.fetch(signatureServicesQuery, {}, opts);
}
