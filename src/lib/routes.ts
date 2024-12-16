import { Role } from '@prisma/client';

import * as Schemas from '@/lib/schemas';

// permissions for each role
export interface RoutePermissions {
  [Role.JUNIOR]: boolean;
  [Role.MEDIOR]: boolean;
  [Role.SENIOR]: boolean;
}

// Define the route configuration type
export interface RouteConfig {
  modelName: string;
  permissions: RoutePermissions;
  schema: any; // Zod schema
}

// routes and their permissions
export const Routes: Record<string, RouteConfig> = {
  genre: {
    modelName: 'Genre',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.genreSchema,
  },
  contentRating: {
    modelName: 'ContentRating',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.contentRatingSchema,
  },
  content: {
    modelName: 'Content',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.contentSchema,
  },
  language: {
    modelName: 'Language',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.languageSchema,
  },
  subtitle: {
    modelName: 'Subtitle',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.subtitleSchema,
  },
  contentMetadata: {
    modelName: 'ContentMetadata',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.contentMetadataSchema,
  },
  netflixAccount: {
    modelName: 'NetflixAccount',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.netflixAccountSchema,
  },
  previousPasswordHash: {
    modelName: 'PreviousPasswordHash',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.previousPasswordHashSchema,
  },
  profile: {
    modelName: 'Profile',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.profileSchema,
  },
  subscriptionType: {
    modelName: 'SubscriptionType',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
    schema: Schemas.subscriptionTypeSchema,
  },
  subscription: {
    modelName: 'Subscription',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
    schema: Schemas.subscriptionSchema,
  },
  invoice: {
    modelName: 'Invoice',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
    schema: Schemas.invoiceSchema,
  },
  viewingHistory: {
    modelName: 'ViewingHistory',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.viewingHistorySchema,
  },
  watchlist: {
    modelName: 'Watchlist',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
    schema: Schemas.watchlistSchema,
  },
} as const;

// Define the type for route keys
export type RouteKey = keyof typeof Routes;

// Utility function to get model name
export function getModelName(route: RouteKey): string {
  return Routes[route].modelName;
}

// Utility function to check permissions
export function checkRoutePermission(route: RouteKey, role: Role): boolean {
  return Routes[route].permissions[role];
}
