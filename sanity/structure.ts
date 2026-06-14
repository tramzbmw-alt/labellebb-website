import type { StructureResolver } from 'sanity/structure';

// Singleton documents open directly — no sub-list click needed.
// teamMember remains a list because there are multiple members.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Images & Visibility')
        .id('sectionVisibility')
        .child(S.document().schemaType('sectionVisibility').documentId('sectionVisibility')),

      S.divider(),

      S.listItem()
        .title('Hero Content')
        .id('heroContent')
        .child(S.document().schemaType('heroContent').documentId('heroContent')),

      S.listItem()
        .title('Our Story')
        .id('ourStory')
        .child(S.document().schemaType('ourStory').documentId('ourStory')),

      S.listItem()
        .title('Flash Sale')
        .id('flashSale')
        .child(S.document().schemaType('flashSale').documentId('flashSale')),

      S.listItem()
        .title('Monthly Special')
        .id('monthlySpecial')
        .child(S.documentTypeList('monthlySpecial').title('Monthly Specials')),

      S.listItem()
        .title('Gifts Section')
        .id('giftsSection')
        .child(S.document().schemaType('giftsSection').documentId('giftsSection')),

      S.listItem()
        .title('Reviews')
        .id('reviewsSection')
        .child(S.document().schemaType('reviewsSection').documentId('reviewsSection')),

      S.listItem()
        .title('Loyalty / Promo')
        .id('loyaltySection')
        .child(S.document().schemaType('loyaltySection').documentId('loyaltySection')),

      S.divider(),

      S.listItem()
        .title('Team Section')
        .id('teamSection')
        .child(S.document().schemaType('teamSection').documentId('teamSection')),

      S.listItem()
        .title('Team Members')
        .id('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members')),

      S.divider(),

      S.listItem()
        .title('Contact')
        .id('contactSection')
        .child(S.document().schemaType('contactSection').documentId('contactSection')),

      S.listItem()
        .title('Footer')
        .id('footerContent')
        .child(S.document().schemaType('footerContent').documentId('footerContent')),

      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
    ]);
