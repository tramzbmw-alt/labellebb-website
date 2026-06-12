import { client } from './client';

const opts = { next: { revalidate: 60 } };

export type SiteSettings = {
  announcementBar?: string;
  announcementActive?: boolean;
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
};

export type TeamMember = {
  _id: string;
  name: string;
  title?: string;
  bio?: string;
  specialties?: string[];
};

export type HeroContent = {
  line1?: string;
  line2?: string;
  line3?: string;
  tagline?: string;
  bodyText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
};

export type SectionVisibility = {
  showInstagram?: boolean;
  showProducts?: boolean;
  showFlashSale?: boolean;
};

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`, {}, opts);
}

export async function getFlashSale(): Promise<FlashSale | null> {
  return client.fetch(`*[_type == "flashSale"][0]`, {}, opts);
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
  return client.fetch(`*[_type == "sectionVisibility"][0]`, {}, opts);
}

export async function getHeroContent(): Promise<HeroContent | null> {
  return client.fetch(`*[_type == "heroContent"][0]`, {}, opts);
}
