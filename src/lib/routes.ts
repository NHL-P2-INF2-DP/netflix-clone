export const Routes = {
  genre: {
    modelName: 'Genre',
    permissions: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  contentRating: {
    modelName: 'ContentRating',
    permissions: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  content: {
    modelName: 'Content',
    permissions: {
      read: true,
      create: true,
      update: true,
      delete: false,
    },
  },
  language: {
    modelName: 'Language',
    permissions: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  subtitle: {
    modelName: 'Subtitle',
    permissions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  contentMetadata: {
    modelName: 'ContentMetadata',
    permissions: {
      read: true,
      create: false,
      update: true,
      delete: false,
    },
  },
  netflixAccount: {
    modelName: 'NetflixAccount',
    permissions: {
      read: false,
      create: false,
      update: false,
      delete: false,
    },
  },
  previousPasswordHash: {
    modelName: 'PreviousPasswordHash',
    permissions: {
      read: false,
      create: false,
      update: false,
      delete: false,
    },
  },
  profile: {
    modelName: 'Profile',
    permissions: {
      read: true,
      create: true,
      update: true,
      delete: true,
    },
  },
  subscriptionType: {
    modelName: 'SubscriptionType',
    permissions: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  subscription: {
    modelName: 'Subscription',
    permissions: {
      read: true,
      create: true,
      update: false,
      delete: false,
    },
  },
  invoice: {
    modelName: 'Invoice',
    permissions: {
      read: true,
      create: false,
      update: false,
      delete: false,
    },
  },
  viewingHistory: {
    modelName: 'ViewingHistory',
    permissions: {
      read: true,
      create: true,
      update: false,
      delete: false,
    },
  },
  watchlist: {
    modelName: 'Watchlist',
    permissions: {
      read: true,
      create: true,
      update: false,
      delete: true,
    },
  },
} as const;

// Define the type for route keys
export type RouteKey = keyof typeof Routes;

// Define the permission types
export interface RoutePermissions {
  read: boolean;
  create: boolean;
  update: boolean;
  delete: boolean;
}

// Utility function to get model name
export function getModelName(route: RouteKey): string {
  return Routes[route].modelName;
}

// Utility function to check permissions
export function checkRoutePermission(
  route: RouteKey,
  operation: keyof RoutePermissions,
): boolean {
  return Routes[route].permissions[operation];
}
