/* eslint-disable no-console */
// This file is used to add the initial data to the database.
// it will create mock data for the database and it will create a demo user with a random avatar using an external API.

import { AgeRating, ContentType, PaymentStatus, Role } from '@prisma/client';
import { hash } from 'bcryptjs';
import { Buffer } from 'node:buffer';

import prisma from '@/lib/prisma';

async function main() {
  console.log('🌱 Starting database seeding...');

  // check if the database is already seeded
  const user = await prisma.user.findFirst();
  if (user) {
    console.log('🌱 Database already seeded!');
    return;
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

  // Create Profile for Demo Account
  const demoProfile = await prisma.profile.create({
    data: {
      accountId: demoAccount.id,
      name: 'Demo User',
      dateOfBirth: new Date('1990-01-01'),
      language: 'en',
      profileImage: 'https://example.com/default-avatar.png',
    },
  });

  // Create Demo Subscription
  const demoSubscription = await prisma.subscription.create({
    data: {
      accountId: demoAccount.id,
      subscriptionTypeId: subscriptionTypes[1].id, // Premium
      beginDate: new Date(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    },
  });

  // Create Demo Invoice
  await prisma.invoice.create({
    data: {
      subscriptionId: demoSubscription.id,
      isPaid: PaymentStatus.PAID,
    },
  });

  // Create Demo Content
  const movies = await Promise.all([
    prisma.content.create({
      data: {
        title: 'The Matrix',
        durationInSeconds: 8949,
        releaseDate: new Date('1999-03-31'),
        ContentMetadata: {
          create: {
            contentType: ContentType.MOVIE,
            ageRating: AgeRating.R,
            genreId: genres[3].id, // Sci-Fi
            languageId: languages[0].id, // English
            contentRatingId: contentRatings[1].id, // 4K
            rating: 9,
          },
        },
      },
    }),
    prisma.content.create({
      data: {
        title: 'Inception',
        durationInSeconds: 18949,
        releaseDate: new Date('2010-07-16'),
        ContentMetadata: {
          create: {
            contentType: ContentType.MOVIE,
            ageRating: AgeRating.PG_13,
            genreId: genres[0].id, // Action
            languageId: languages[0].id, // English
            contentRatingId: contentRatings[1].id, // 4K
            rating: 9,
          },
        },
      },
    }),
  ]);

  // create a random 16 character string
  const randomString = Math.random().toString(36).substring(2, 15);
  const randomString2 = Math.random().toString(36).substring(2, 15);
  const randomString3 = Math.random().toString(36).substring(2, 15);

  const avatar = await fetch(
    `https://api.dicebear.com/9.x/dylan/svg?seed=${randomString}`,
  ).then(res => res.arrayBuffer());

  const avatar2 = await fetch(
    `https://api.dicebear.com/9.x/dylan/svg?seed=${randomString2}`,
  ).then(res => res.arrayBuffer());

  const avatar3 = await fetch(
    `https://api.dicebear.com/9.x/dylan/svg?seed=${randomString3}`,
  ).then(res => res.arrayBuffer());

  const avatarBase64 = Buffer.from(avatar).toString('base64');
  const avatar2Base64 = Buffer.from(avatar2).toString('base64');
  const avatar3Base64 = Buffer.from(avatar3).toString('base64');

  function getRandomID() {
    return Math.random().toString(36).substring(2, 15);
  }

  const newUser = await prisma.user.createMany({
    data: [
      {
        id: 'tOIdEhJiSiCxUCKRkfHHn',
        emailVerified: true,
        email: 'junior@demo.com',
        name: 'Junior User',
        image: `data:image/svg+xml;base64,${avatarBase64}`,
        role: Role.JUNIOR,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'rkKWxWd7pfRgmnBHiKxZI',
        emailVerified: true,
        email: 'medior@demo.com',
        name: 'Medior User',
        image: `data:image/svg+xml;base64,${avatar2Base64}`,
        role: Role.MEDIOR,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'pe07ggzx_CkCi6Or2bph1',
        emailVerified: true,
        email: 'senior@demo.com',
        name: 'Senior User',
        image: `data:image/svg+xml;base64,${avatar3Base64}`,
        role: Role.SENIOR,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  const newAccounts = await prisma.account.createMany({
    data: [
      {
        id: getRandomID(),
        accountId: 'tOIdEhJiSiCxUCKRkfHHn',
        providerId: 'credential',
        userId: 'tOIdEhJiSiCxUCKRkfHHn',
        password:
          'a9e36c7b6f60d4a1a43e742c90b7f841:965379b6df85e8c653d584277813e4216bb56929eeafb73439ebe198a7de315196eb3e67056260fd808944b7098c19a9b7c8f4479b5c4af48657896d05b44a0d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: getRandomID(),
        accountId: 'rkKWxWd7pfRgmnBHiKxZI',
        providerId: 'credential',
        userId: 'rkKWxWd7pfRgmnBHiKxZI',
        password:
          'a9e36c7b6f60d4a1a43e742c90b7f841:965379b6df85e8c653d584277813e4216bb56929eeafb73439ebe198a7de315196eb3e67056260fd808944b7098c19a9b7c8f4479b5c4af48657896d05b44a0d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: getRandomID(),
        accountId: 'pe07ggzx_CkCi6Or2bph1',
        providerId: 'credential',
        userId: 'pe07ggzx_CkCi6Or2bph1',
        password:
          'a9e36c7b6f60d4a1a43e742c90b7f841:965379b6df85e8c653d584277813e4216bb56929eeafb73439ebe198a7de315196eb3e67056260fd808944b7098c19a9b7c8f4479b5c4af48657896d05b44a0d',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  });

  console.log('✅ Database seeding completed!');
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
