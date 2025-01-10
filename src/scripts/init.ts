/* eslint-disable no-console */
// This file is used to add the initial data to the database.

import { hash } from 'bcryptjs';

import prisma from '@/lib/prisma';

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean up existing data
  await prisma.$transaction([
    prisma.viewingHistory.deleteMany(),
    prisma.watchlist.deleteMany(),
    prisma.contentMetadata.deleteMany(),
    prisma.content.deleteMany(),
    prisma.genre.deleteMany(),
    prisma.contentRating.deleteMany(),
    prisma.language.deleteMany(),
    prisma.subtitle.deleteMany(),
    prisma.invoice.deleteMany(),
    prisma.subscription.deleteMany(),
    prisma.subscriptionType.deleteMany(),
    prisma.profile.deleteMany(),
    prisma.previousPasswordHash.deleteMany(),
    prisma.netflixAccount.deleteMany(),
    prisma.user.deleteMany(),
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),
  ]);
}
// Create Genres
const genres = await Promise.all([
  prisma.genre.create({ data: { name: 'Action' } }),
  prisma.genre.create({ data: { name: 'Comedy' } }),
  prisma.genre.create({ data: { name: 'Drama' } }),
  prisma.genre.create({ data: { name: 'Sci-Fi' } }),
]);

// Create Languages
const languages = await Promise.all([
  prisma.language.create({ data: { language: 'English' } }),
  prisma.language.create({ data: { language: 'Spanish' } }),
  prisma.language.create({ data: { language: 'French' } }),
]);

// Create Content Ratings
const contentRatings = await Promise.all([
  prisma.contentRating.create({ data: { ratingType: 'HD' } }),
  prisma.contentRating.create({ data: { ratingType: '4K' } }),
  prisma.contentRating.create({ data: { ratingType: '8K' } }),
]);

// Create Subscription Types
const subscriptionTypes = await Promise.all([
  prisma.subscriptionType.create({
    data: {
      type: 'Basic',
      priceInEuroCents: 799,
    },
  }),
  prisma.subscriptionType.create({
    data: {
      type: 'Premium',
      priceInEuroCents: 1299,
    },
  }),
]);

// Create Demo Netflix Account
const demoAccount = await prisma.netflixAccount.create({
  data: {
    email: 'demo@example.com',
    password: await hash('demo123', 10),
    activated: true,
  },
});

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
