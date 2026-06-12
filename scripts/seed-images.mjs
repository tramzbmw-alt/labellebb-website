import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createReadStream, existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
dotenv.config({ path: join(root, '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-06-12',
  useCdn: false,
});

async function uploadImage(filePath, label) {
  if (!existsSync(filePath)) {
    console.log(`  ⚠ skipped ${label} — file not found: ${filePath}`);
    return null;
  }
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename: label,
  });
  console.log(`  ✓ uploaded ${label} → ${asset._id}`);
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function seed() {
  console.log('Uploading site images to Sanity...\n');

  const [heroImage, aboutImage, giftCardImage, specialsImage] = await Promise.all([
    uploadImage(join(root, 'public/labelle-about-section.png'), 'labelle-about-section.png'),
    uploadImage(join(root, 'public/labelle-home-header.png'), 'labelle-home-header.png'),
    uploadImage(join(root, 'public/Gift_Card_View.png'), 'Gift_Card_View.png'),
    uploadImage(join(root, 'public/Belle-Points.png'), 'Belle-Points.png'),
  ]);

  console.log('\nPatching documents with image references...\n');

  if (heroImage || aboutImage) {
    const existing = await client.getDocument('sectionVisibility');
    await client.createOrReplace({
      ...(existing ?? {}),
      _id: 'sectionVisibility',
      _type: 'sectionVisibility',
      showInstagram: false,
      showProducts: false,
      showFlashSale: false,
      ...(heroImage ? { heroImage } : {}),
      ...(aboutImage ? { aboutImage } : {}),
    });
    console.log('  ✓ sectionVisibility updated');
  }

  if (giftCardImage || specialsImage) {
    const existing = await client.getDocument('giftsSection');
    await client.createOrReplace({
      ...(existing ?? {}),
      _id: 'giftsSection',
      _type: 'giftsSection',
      ...(giftCardImage ? { giftCardImage } : {}),
      ...(specialsImage ? { specialsImage } : {}),
    });
    console.log('  ✓ giftsSection updated');
  }

  console.log('\nDone.');
}

seed().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
