import { urlFor } from '@/sanity/lib/image';
import HomeContent from '@/components/HomeContent';
import {
  getSiteSettings,
  getFlashSale,
  getMonthlySpecial,
  getTeamMembers,
  getSectionVisibility,
  getHeroContent,
  getOurStory,
  getReviewsSection,
  getTeamSection,
  getLoyaltySection,
  getGiftsSection,
  getContactSection,
  getFooterContent,
} from '@/sanity/lib/queries';

export default async function Home() {
  const [
    siteSettings, flashSale, monthlySpecial, teamMembers, visibility,
    hero, story, reviews, teamSec, loyalty, gifts, contact, footer,
  ] = await Promise.all([
    getSiteSettings(),
    getFlashSale(),
    getMonthlySpecial(),
    getTeamMembers(),
    getSectionVisibility(),
    getHeroContent(),
    getOurStory(),
    getReviewsSection(),
    getTeamSection(),
    getLoyaltySection(),
    getGiftsSection(),
    getContactSection(),
    getFooterContent(),
  ]);

  const showAnnouncement = siteSettings?.announcementActive ?? true;
  const showFlashSale = (flashSale?.active || visibility?.showFlashSale) ?? false;
  const showProducts = visibility?.showProducts ?? false;
  const showInstagram = visibility?.showInstagram ?? false;

  const heroImageUrl = visibility?.heroImage
    ? urlFor(visibility.heroImage).width(1800).url()
    : null;
  const aboutImageUrl = visibility?.aboutImage
    ? urlFor(visibility.aboutImage).width(900).url()
    : null;
  const giftCardImageUrl = gifts?.giftCardImage
    ? urlFor(gifts.giftCardImage).width(600).url()
    : null;
  const specialsImageUrl = gifts?.specialsImage
    ? urlFor(gifts.specialsImage).width(400).url()
    : null;
  const monthlySpecialImageUrl =
    monthlySpecial?.specialImage
      ? urlFor(monthlySpecial.specialImage).width(600).url()
      : null;

  const phone = contact?.phone ?? '(919) 321-1148';
  const phoneRaw = phone.replace(/\D/g, '');
  const textNum = contact?.textNumber ?? '(919) 759-5828';
  const textRaw = textNum.replace(/\D/g, '');
  const email = contact?.email ?? 'info@labellebb.com';

  return (
    <HomeContent
      heroImageUrl={heroImageUrl}
      aboutImageUrl={aboutImageUrl}
      giftCardImageUrl={giftCardImageUrl}
      specialsImageUrl={specialsImageUrl}
      monthlySpecialImageUrl={monthlySpecialImageUrl}
      showAnnouncement={showAnnouncement}
      showFlashSale={showFlashSale}
      showProducts={showProducts}
      showInstagram={showInstagram}
      siteSettings={siteSettings}
      flashSale={flashSale}
      hero={hero}
      story={story}
      reviews={reviews}
      teamSec={teamSec}
      teamMembers={teamMembers ?? []}
      loyalty={loyalty}
      gifts={gifts}
      special={monthlySpecial}
      contact={contact}
      footer={footer}
      phone={phone}
      phoneRaw={phoneRaw}
      textNum={textNum}
      textRaw={textRaw}
      email={email}
    />
  );
}
