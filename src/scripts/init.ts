/* eslint-disable no-console */
// This file is used to add the initial data to the database.
// it will create mock data for the database and it will create a demo user with a random avatar using an external API.

import {
  AgeRating,
  ContentType,
  PaymentStatus,
} from '@prisma/client';
import { hash } from 'bcryptjs';
import { Buffer } from 'node:buffer';

import { authClient } from '@/lib/auth-client';
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
        duration: new Date(1999, 0, 1, 2, 16), // 2h 16min
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
        duration: new Date(2010, 0, 1, 2, 28), // 2h 28min
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

  const avatar = await fetch(
    `https://api.dicebear.com/9.x/dylan/svg?seed=${randomString}`,
  ).then(res => res.arrayBuffer());

  const avatarBase64 = Buffer.from(avatar).toString('base64');

  await authClient.signUp.email(
    {
      email: 'demo@demo.com',
      password: 'password123',
      name: 'Demo User',
      image: `data:image/svg+xml;base64,${avatarBase64}`,
    },
    {
      onError: (error) => {
        console.error('Error signing up:', error);
      },
      onSuccess: (data) => {
        console.log('Successfully signed up:', data);
      },
    },
  );

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
