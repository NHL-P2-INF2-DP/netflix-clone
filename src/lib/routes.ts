import { Role } from '@prisma/client';

// Define the permission types first
export interface RoutePermissions {
  [Role.JUNIOR]: boolean;
  [Role.MEDIOR]: boolean;
  [Role.SENIOR]: boolean;
}

export const Routes: Record<
  string,
  { modelName: string; permissions: RoutePermissions }
> = {
  genre: {
    modelName: 'Genre',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  contentRating: {
    modelName: 'ContentRating',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  content: {
    modelName: 'Content',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  language: {
    modelName: 'Language',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  subtitle: {
    modelName: 'Subtitle',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  contentMetadata: {
    modelName: 'ContentMetadata',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  netflixAccount: {
    modelName: 'NetflixAccount',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  previousPasswordHash: {
    modelName: 'PreviousPasswordHash',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  profile: {
    modelName: 'Profile',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  subscriptionType: {
    modelName: 'SubscriptionType',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
  },
  subscription: {
    modelName: 'Subscription',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
  },
  invoice: {
    modelName: 'Invoice',
    permissions: {
      [Role.JUNIOR]: false,
      [Role.MEDIOR]: false,
      [Role.SENIOR]: true,
    },
  },
  viewingHistory: {
    modelName: 'ViewingHistory',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
  },
  watchlist: {
    modelName: 'Watchlist',
    permissions: {
      [Role.JUNIOR]: true,
      [Role.MEDIOR]: true,
      [Role.SENIOR]: true,
    },
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
