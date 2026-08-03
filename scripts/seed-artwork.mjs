import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-06-12',
  useCdn: false,
});

const artworkDocuments = [
  // Featured still life — display only
  {
    _id: 'artwork-still-life',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 0,
    status: 'not_for_sale',
    displayOrder: 0,
    isPartOfSeries: false,
    seriesName: '',
  },
  // Fruit Series — 6 panels
  {
    _id: 'artwork-fruit-series-1',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 1,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
  {
    _id: 'artwork-fruit-series-2',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 2,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
  {
    _id: 'artwork-fruit-series-3',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 3,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
  {
    _id: 'artwork-fruit-series-4',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 4,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
  {
    _id: 'artwork-fruit-series-5',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 5,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
  {
    _id: 'artwork-fruit-series-6',
    _type: 'artwork',
    title: '',
    medium: 'Acrylic on Canvas',
    dimensions: '',
    price: 75,
    status: 'available',
    displayOrder: 6,
    isPartOfSeries: true,
    seriesName: 'Fruit Series',
  },
];

async function seed() {
  console.log(`Seeding ${artworkDocuments.length} artwork documents...\n`);

  for (const doc of artworkDocuments) {
    try {
      await client.createIfNotExists(doc);
      const { _id, _type, ...fields } = doc;
      await client.patch(_id).setIfMissing(fields).commit();
      console.log(`✓ ${doc._type} (${doc._id})`);
    } catch (err) {
      console.error(`✗ ${doc._id}: ${err.message}`);
    }
  }

  console.log('\nDone. Shailyn can now open Sanity Studio → Art Gallery to add titles and upload images.');
}

seed();
