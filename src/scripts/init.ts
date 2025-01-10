/* eslint-disable no-console */
// This file is used to add the initial data to the database.

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

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
