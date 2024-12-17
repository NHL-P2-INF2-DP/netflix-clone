import { Role } from '@prisma/client';

import type { RouteConfigInputType } from '@/lib/classes/route-manager';

/*
  This file contains the route configurations for the application.
  It is used to define the routes and their permissions for each role.
  New routes can be added here in a type safe manner. if the model does not exist in the prisma schema,
  the route cannot be created.
*/

// Define common permission sets
const FULL_ACCESS = {
  read: true,
  create: true,
  update: true,
  delete: true,
} as const;

const NO_ACCESS = {
  read: false,
  create: false,
  update: false,
  delete: false,
} as const;

// Define role permission templates
const ALL_ROLES_FULL_ACCESS = {
  [Role.JUNIOR]: FULL_ACCESS,
  [Role.MEDIOR]: FULL_ACCESS,
  [Role.SENIOR]: FULL_ACCESS,
} as const;

const SENIOR_ONLY = {
  [Role.JUNIOR]: NO_ACCESS,
  [Role.MEDIOR]: NO_ACCESS,
  [Role.SENIOR]: FULL_ACCESS,
} as const;

const MEDIOR_AND_SENIOR = {
  [Role.JUNIOR]: NO_ACCESS,
  [Role.MEDIOR]: FULL_ACCESS,
  [Role.SENIOR]: FULL_ACCESS,
} as const;

export const routeConfigurations: RouteConfigInputType = {
  // Content-related routes - full access for all roles
  Genre: { routeName: 'genre', permissions: ALL_ROLES_FULL_ACCESS },
  ContentRating: {
    routeName: 'content-rating',
    permissions: ALL_ROLES_FULL_ACCESS,
  },
  Content: { routeName: 'content', permissions: ALL_ROLES_FULL_ACCESS },
  Language: { routeName: 'language', permissions: ALL_ROLES_FULL_ACCESS },
  Subtitle: { routeName: 'subtitle', permissions: ALL_ROLES_FULL_ACCESS },
  ContentMetadata: {
    routeName: 'content-metadata',
    permissions: ALL_ROLES_FULL_ACCESS,
  },
  ViewingHistory: {
    routeName: 'viewing-history',
    permissions: ALL_ROLES_FULL_ACCESS,
  },
  Watchlist: { routeName: 'watchlist', permissions: ALL_ROLES_FULL_ACCESS },

  // Account-related routes - Medior and Senior only
  NetflixAccount: {
    routeName: 'netflix-account',
    permissions: MEDIOR_AND_SENIOR,
  },
  PreviousPasswordHash: {
    routeName: 'previous-password-hash',
    permissions: MEDIOR_AND_SENIOR,
  },
  Profile: { routeName: 'profile', permissions: MEDIOR_AND_SENIOR },

  // Subscription and billing - Senior only
  Subscription: { routeName: 'subscription', permissions: SENIOR_ONLY },
  SubscriptionType: {
    routeName: 'subscription-type',
    permissions: SENIOR_ONLY,
  },
  Invoice: { routeName: 'invoice', permissions: SENIOR_ONLY },
} as const;
