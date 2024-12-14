import type { Prisma } from "@prisma/client";

import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const GenreScalarFieldEnumSchema = z.enum(["id", "name"]);

export const ContentRatingScalarFieldEnumSchema = z.enum(["id", "ratingType"]);

export const ContentScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "duration",
  "releaseDate",
  "season",
  "qualityId",
  "createdAt",
  "updatedAt",
]);

export const LanguageScalarFieldEnumSchema = z.enum(["id", "language"]);

export const SubtitleScalarFieldEnumSchema = z.enum([
  "id",
  "languageId",
  "content",
]);

export const ContentMetadataScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "genreId",
  "rating",
  "contentId",
  "languageId",
  "subtitleId",
  "contentType",
  "contentRatingId",
  "ageRating",
  "createdAt",
  "updatedAt",
]);

export const NetflixAccountScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "password",
  "activated",
  "blockedUntil",
  "createdAt",
  "updatedAt",
]);

export const PreviousPasswordHashScalarFieldEnumSchema = z.enum([
  "id",
  "accountId",
  "passwordHash",
  "createdAt",
]);

export const ProfileScalarFieldEnumSchema = z.enum([
  "id",
  "accountId",
  "name",
  "profileImage",
  "dateOfBirth",
  "language",
  "createdAt",
  "updatedAt",
]);

export const SubscriptionTypeScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "priceInEuroCents",
]);

export const SubscriptionScalarFieldEnumSchema = z.enum([
  "id",
  "beginDate",
  "endDate",
  "accountId",
  "subscriptionTypeId",
  "referralId",
  "createdAt",
  "updatedAt",
]);

export const InvoiceScalarFieldEnumSchema = z.enum([
  "id",
  "subscriptionId",
  "isPaid",
  "createdAt",
  "updatedAt",
]);

export const ViewingHistoryScalarFieldEnumSchema = z.enum([
  "id",
  "profileId",
  "contentId",
  "watchDate",
  "progressPercentage",
]);

export const WatchlistScalarFieldEnumSchema = z.enum([
  "id",
  "profileId",
  "contentId",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "emailVerified",
  "image",
  "createdAt",
  "updatedAt",
]);

export const SessionScalarFieldEnumSchema = z.enum([
  "id",
  "expiresAt",
  "token",
  "createdAt",
  "updatedAt",
  "ipAddress",
  "userAgent",
  "userId",
]);

export const AccountScalarFieldEnumSchema = z.enum([
  "id",
  "accountId",
  "providerId",
  "userId",
  "accessToken",
  "refreshToken",
  "idToken",
  "accessTokenExpiresAt",
  "refreshTokenExpiresAt",
  "scope",
  "password",
  "createdAt",
  "updatedAt",
]);

export const VerificationScalarFieldEnumSchema = z.enum([
  "id",
  "identifier",
  "value",
  "expiresAt",
  "createdAt",
  "updatedAt",
]);

export const JwksScalarFieldEnumSchema = z.enum([
  "id",
  "publicKey",
  "privateKey",
  "createdAt",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);

export const ContentTypeSchema = z.enum(["MOVIE", "SERIES", "DOCUMENTARY"]);

export type ContentTypeType = `${z.infer<typeof ContentTypeSchema>}`;

export const AgeRatingSchema = z.enum(["G", "PG", "PG_13", "R", "NC_17"]);

export type AgeRatingType = `${z.infer<typeof AgeRatingSchema>}`;

export const PaymentStatusSchema = z.enum(["PAID", "UNPAID", "PENDING"]);

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// GENRE SCHEMA
/////////////////////////////////////////

export const GenreSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

export type Genre = z.infer<typeof GenreSchema>;

/////////////////////////////////////////
// CONTENT RATING SCHEMA
/////////////////////////////////////////

export const ContentRatingSchema = z.object({
  id: z.string().uuid(),
  ratingType: z.string(),
});

export type ContentRating = z.infer<typeof ContentRatingSchema>;

/////////////////////////////////////////
// CONTENT SCHEMA
/////////////////////////////////////////

export const ContentSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  duration: z.coerce.date(),
  releaseDate: z.coerce.date(),
  season: z.number().int().nullable(),
  qualityId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Content = z.infer<typeof ContentSchema>;

/////////////////////////////////////////
// LANGUAGE SCHEMA
/////////////////////////////////////////

export const LanguageSchema = z.object({
  id: z.string().uuid(),
  language: z.string(),
});

export type Language = z.infer<typeof LanguageSchema>;

/////////////////////////////////////////
// SUBTITLE SCHEMA
/////////////////////////////////////////

export const SubtitleSchema = z.object({
  id: z.string().uuid(),
  languageId: z.string(),
  content: z.string(),
});

export type Subtitle = z.infer<typeof SubtitleSchema>;

/////////////////////////////////////////
// CONTENT METADATA SCHEMA
/////////////////////////////////////////

export const ContentMetadataSchema = z.object({
  contentType: ContentTypeSchema,
  ageRating: AgeRatingSchema,
  id: z.string().uuid(),
  title: z.string().nullable(),
  genreId: z.string().nullable(),
  rating: z.number().int().nullable(),
  contentId: z.string(),
  languageId: z.string().nullable(),
  subtitleId: z.string().nullable(),
  contentRatingId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type ContentMetadata = z.infer<typeof ContentMetadataSchema>;

/////////////////////////////////////////
// NETFLIX ACCOUNT SCHEMA
/////////////////////////////////////////

export const NetflixAccountSchema = z.object({
  id: z.string().uuid(),
  email: z.string(),
  password: z.string(),
  activated: z.boolean(),
  blockedUntil: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type NetflixAccount = z.infer<typeof NetflixAccountSchema>;

/////////////////////////////////////////
// PREVIOUS PASSWORD HASH SCHEMA
/////////////////////////////////////////

export const PreviousPasswordHashSchema = z.object({
  id: z.string().uuid(),
  accountId: z.string(),
  passwordHash: z.string(),
  createdAt: z.coerce.date(),
});

export type PreviousPasswordHash = z.infer<typeof PreviousPasswordHashSchema>;

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().uuid(),
  accountId: z.string(),
  name: z.string(),
  profileImage: z.string().nullable(),
  dateOfBirth: z.coerce.date(),
  language: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Profile = z.infer<typeof ProfileSchema>;

/////////////////////////////////////////
// SUBSCRIPTION TYPE SCHEMA
/////////////////////////////////////////

export const SubscriptionTypeSchema = z.object({
  id: z.string().uuid(),
  type: z.string(),
  priceInEuroCents: z.number().int(),
});

export type SubscriptionType = z.infer<typeof SubscriptionTypeSchema>;

/////////////////////////////////////////
// SUBSCRIPTION SCHEMA
/////////////////////////////////////////

export const SubscriptionSchema = z.object({
  id: z.string().uuid(),
  beginDate: z.coerce.date(),
  endDate: z.coerce.date(),
  accountId: z.string(),
  subscriptionTypeId: z.string(),
  referralId: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Subscription = z.infer<typeof SubscriptionSchema>;

/////////////////////////////////////////
// INVOICE SCHEMA
/////////////////////////////////////////

export const InvoiceSchema = z.object({
  isPaid: PaymentStatusSchema,
  id: z.string().uuid(),
  subscriptionId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Invoice = z.infer<typeof InvoiceSchema>;

/////////////////////////////////////////
// VIEWING HISTORY SCHEMA
/////////////////////////////////////////

export const ViewingHistorySchema = z.object({
  id: z.string().uuid(),
  profileId: z.string(),
  contentId: z.string(),
  watchDate: z.coerce.date(),
  progressPercentage: z.number(),
});

export type ViewingHistory = z.infer<typeof ViewingHistorySchema>;

/////////////////////////////////////////
// WATCHLIST SCHEMA
/////////////////////////////////////////

export const WatchlistSchema = z.object({
  id: z.string().uuid(),
  profileId: z.string(),
  contentId: z.string(),
});

export type Watchlist = z.infer<typeof WatchlistSchema>;

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  expiresAt: z.coerce.date(),
  token: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ipAddress: z.string().nullable(),
  userAgent: z.string().nullable(),
  userId: z.string(),
});

export type Session = z.infer<typeof SessionSchema>;

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  providerId: z.string(),
  userId: z.string(),
  accessToken: z.string().nullable(),
  refreshToken: z.string().nullable(),
  idToken: z.string().nullable(),
  accessTokenExpiresAt: z.coerce.date().nullable(),
  refreshTokenExpiresAt: z.coerce.date().nullable(),
  scope: z.string().nullable(),
  password: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Account = z.infer<typeof AccountSchema>;

/////////////////////////////////////////
// VERIFICATION SCHEMA
/////////////////////////////////////////

export const VerificationSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  value: z.string(),
  expiresAt: z.coerce.date(),
  createdAt: z.coerce.date().nullable(),
  updatedAt: z.coerce.date().nullable(),
});

export type Verification = z.infer<typeof VerificationSchema>;

/////////////////////////////////////////
// JWKS SCHEMA
/////////////////////////////////////////

export const JwksSchema = z.object({
  id: z.string(),
  publicKey: z.string(),
  privateKey: z.string(),
  createdAt: z.coerce.date(),
});

export type Jwks = z.infer<typeof JwksSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// GENRE
// ------------------------------------------------------

export const GenreIncludeSchema: z.ZodType<Prisma.GenreInclude> = z
  .object({
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => GenreCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const GenreArgsSchema: z.ZodType<Prisma.GenreDefaultArgs> = z
  .object({
    select: z.lazy(() => GenreSelectSchema).optional(),
    include: z.lazy(() => GenreIncludeSchema).optional(),
  })
  .strict();

export const GenreCountOutputTypeArgsSchema: z.ZodType<Prisma.GenreCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => GenreCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const GenreCountOutputTypeSelectSchema: z.ZodType<Prisma.GenreCountOutputTypeSelect> =
  z
    .object({
      ContentMetadata: z.boolean().optional(),
    })
    .strict();

export const GenreSelectSchema: z.ZodType<Prisma.GenreSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => GenreCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// CONTENT RATING
// ------------------------------------------------------

export const ContentRatingIncludeSchema: z.ZodType<Prisma.ContentRatingInclude> =
  z
    .object({
      ContentMetadata: z
        .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ContentRatingCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingArgsSchema: z.ZodType<Prisma.ContentRatingDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ContentRatingSelectSchema).optional(),
      include: z.lazy(() => ContentRatingIncludeSchema).optional(),
    })
    .strict();

export const ContentRatingCountOutputTypeArgsSchema: z.ZodType<Prisma.ContentRatingCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ContentRatingCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ContentRatingCountOutputTypeSelectSchema: z.ZodType<Prisma.ContentRatingCountOutputTypeSelect> =
  z
    .object({
      ContentMetadata: z.boolean().optional(),
    })
    .strict();

export const ContentRatingSelectSchema: z.ZodType<Prisma.ContentRatingSelect> =
  z
    .object({
      id: z.boolean().optional(),
      ratingType: z.boolean().optional(),
      ContentMetadata: z
        .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ContentRatingCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

// CONTENT
// ------------------------------------------------------

export const ContentIncludeSchema: z.ZodType<Prisma.ContentInclude> = z
  .object({
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    ViewingHistory: z
      .union([z.boolean(), z.lazy(() => ViewingHistoryFindManyArgsSchema)])
      .optional(),
    Watchlist: z
      .union([z.boolean(), z.lazy(() => WatchlistFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ContentCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ContentArgsSchema: z.ZodType<Prisma.ContentDefaultArgs> = z
  .object({
    select: z.lazy(() => ContentSelectSchema).optional(),
    include: z.lazy(() => ContentIncludeSchema).optional(),
  })
  .strict();

export const ContentCountOutputTypeArgsSchema: z.ZodType<Prisma.ContentCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ContentCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ContentCountOutputTypeSelectSchema: z.ZodType<Prisma.ContentCountOutputTypeSelect> =
  z
    .object({
      ContentMetadata: z.boolean().optional(),
      ViewingHistory: z.boolean().optional(),
      Watchlist: z.boolean().optional(),
    })
    .strict();

export const ContentSelectSchema: z.ZodType<Prisma.ContentSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    duration: z.boolean().optional(),
    releaseDate: z.boolean().optional(),
    season: z.boolean().optional(),
    qualityId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    ViewingHistory: z
      .union([z.boolean(), z.lazy(() => ViewingHistoryFindManyArgsSchema)])
      .optional(),
    Watchlist: z
      .union([z.boolean(), z.lazy(() => WatchlistFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ContentCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// LANGUAGE
// ------------------------------------------------------

export const LanguageIncludeSchema: z.ZodType<Prisma.LanguageInclude> = z
  .object({
    Subtitle: z
      .union([z.boolean(), z.lazy(() => SubtitleFindManyArgsSchema)])
      .optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const LanguageArgsSchema: z.ZodType<Prisma.LanguageDefaultArgs> = z
  .object({
    select: z.lazy(() => LanguageSelectSchema).optional(),
    include: z.lazy(() => LanguageIncludeSchema).optional(),
  })
  .strict();

export const LanguageCountOutputTypeArgsSchema: z.ZodType<Prisma.LanguageCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => LanguageCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const LanguageCountOutputTypeSelectSchema: z.ZodType<Prisma.LanguageCountOutputTypeSelect> =
  z
    .object({
      Subtitle: z.boolean().optional(),
      ContentMetadata: z.boolean().optional(),
    })
    .strict();

export const LanguageSelectSchema: z.ZodType<Prisma.LanguageSelect> = z
  .object({
    id: z.boolean().optional(),
    language: z.boolean().optional(),
    Subtitle: z
      .union([z.boolean(), z.lazy(() => SubtitleFindManyArgsSchema)])
      .optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LanguageCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// SUBTITLE
// ------------------------------------------------------

export const SubtitleIncludeSchema: z.ZodType<Prisma.SubtitleInclude> = z
  .object({
    language: z
      .union([z.boolean(), z.lazy(() => LanguageArgsSchema)])
      .optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => SubtitleCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const SubtitleArgsSchema: z.ZodType<Prisma.SubtitleDefaultArgs> = z
  .object({
    select: z.lazy(() => SubtitleSelectSchema).optional(),
    include: z.lazy(() => SubtitleIncludeSchema).optional(),
  })
  .strict();

export const SubtitleCountOutputTypeArgsSchema: z.ZodType<Prisma.SubtitleCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => SubtitleCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const SubtitleCountOutputTypeSelectSchema: z.ZodType<Prisma.SubtitleCountOutputTypeSelect> =
  z
    .object({
      ContentMetadata: z.boolean().optional(),
    })
    .strict();

export const SubtitleSelectSchema: z.ZodType<Prisma.SubtitleSelect> = z
  .object({
    id: z.boolean().optional(),
    languageId: z.boolean().optional(),
    content: z.boolean().optional(),
    language: z
      .union([z.boolean(), z.lazy(() => LanguageArgsSchema)])
      .optional(),
    ContentMetadata: z
      .union([z.boolean(), z.lazy(() => ContentMetadataFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => SubtitleCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// CONTENT METADATA
// ------------------------------------------------------

export const ContentMetadataIncludeSchema: z.ZodType<Prisma.ContentMetadataInclude> =
  z
    .object({
      genre: z.union([z.boolean(), z.lazy(() => GenreArgsSchema)]).optional(),
      content: z
        .union([z.boolean(), z.lazy(() => ContentArgsSchema)])
        .optional(),
      language: z
        .union([z.boolean(), z.lazy(() => LanguageArgsSchema)])
        .optional(),
      subtitle: z
        .union([z.boolean(), z.lazy(() => SubtitleArgsSchema)])
        .optional(),
      contentRating: z
        .union([z.boolean(), z.lazy(() => ContentRatingArgsSchema)])
        .optional(),
    })
    .strict();

export const ContentMetadataArgsSchema: z.ZodType<Prisma.ContentMetadataDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ContentMetadataSelectSchema).optional(),
      include: z.lazy(() => ContentMetadataIncludeSchema).optional(),
    })
    .strict();

export const ContentMetadataSelectSchema: z.ZodType<Prisma.ContentMetadataSelect> =
  z
    .object({
      id: z.boolean().optional(),
      title: z.boolean().optional(),
      genreId: z.boolean().optional(),
      rating: z.boolean().optional(),
      contentId: z.boolean().optional(),
      languageId: z.boolean().optional(),
      subtitleId: z.boolean().optional(),
      contentType: z.boolean().optional(),
      contentRatingId: z.boolean().optional(),
      ageRating: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      genre: z.union([z.boolean(), z.lazy(() => GenreArgsSchema)]).optional(),
      content: z
        .union([z.boolean(), z.lazy(() => ContentArgsSchema)])
        .optional(),
      language: z
        .union([z.boolean(), z.lazy(() => LanguageArgsSchema)])
        .optional(),
      subtitle: z
        .union([z.boolean(), z.lazy(() => SubtitleArgsSchema)])
        .optional(),
      contentRating: z
        .union([z.boolean(), z.lazy(() => ContentRatingArgsSchema)])
        .optional(),
    })
    .strict();

// NETFLIX ACCOUNT
// ------------------------------------------------------

export const NetflixAccountIncludeSchema: z.ZodType<Prisma.NetflixAccountInclude> =
  z
    .object({
      Profile: z
        .union([z.boolean(), z.lazy(() => ProfileFindManyArgsSchema)])
        .optional(),
      PreviousPasswordHash: z
        .union([
          z.boolean(),
          z.lazy(() => PreviousPasswordHashFindManyArgsSchema),
        ])
        .optional(),
      Subscription: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      ReferredSubscriptions: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => NetflixAccountCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountArgsSchema: z.ZodType<Prisma.NetflixAccountDefaultArgs> =
  z
    .object({
      select: z.lazy(() => NetflixAccountSelectSchema).optional(),
      include: z.lazy(() => NetflixAccountIncludeSchema).optional(),
    })
    .strict();

export const NetflixAccountCountOutputTypeArgsSchema: z.ZodType<Prisma.NetflixAccountCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => NetflixAccountCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const NetflixAccountCountOutputTypeSelectSchema: z.ZodType<Prisma.NetflixAccountCountOutputTypeSelect> =
  z
    .object({
      Profile: z.boolean().optional(),
      PreviousPasswordHash: z.boolean().optional(),
      Subscription: z.boolean().optional(),
      ReferredSubscriptions: z.boolean().optional(),
    })
    .strict();

export const NetflixAccountSelectSchema: z.ZodType<Prisma.NetflixAccountSelect> =
  z
    .object({
      id: z.boolean().optional(),
      email: z.boolean().optional(),
      password: z.boolean().optional(),
      activated: z.boolean().optional(),
      blockedUntil: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
      Profile: z
        .union([z.boolean(), z.lazy(() => ProfileFindManyArgsSchema)])
        .optional(),
      PreviousPasswordHash: z
        .union([
          z.boolean(),
          z.lazy(() => PreviousPasswordHashFindManyArgsSchema),
        ])
        .optional(),
      Subscription: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      ReferredSubscriptions: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => NetflixAccountCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

// PREVIOUS PASSWORD HASH
// ------------------------------------------------------

export const PreviousPasswordHashIncludeSchema: z.ZodType<Prisma.PreviousPasswordHashInclude> =
  z
    .object({
      account: z
        .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashArgsSchema: z.ZodType<Prisma.PreviousPasswordHashDefaultArgs> =
  z
    .object({
      select: z.lazy(() => PreviousPasswordHashSelectSchema).optional(),
      include: z.lazy(() => PreviousPasswordHashIncludeSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashSelectSchema: z.ZodType<Prisma.PreviousPasswordHashSelect> =
  z
    .object({
      id: z.boolean().optional(),
      accountId: z.boolean().optional(),
      passwordHash: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      account: z
        .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
        .optional(),
    })
    .strict();

// PROFILE
// ------------------------------------------------------

export const ProfileIncludeSchema: z.ZodType<Prisma.ProfileInclude> = z
  .object({
    account: z
      .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
      .optional(),
    ViewingHistory: z
      .union([z.boolean(), z.lazy(() => ViewingHistoryFindManyArgsSchema)])
      .optional(),
    Watchlist: z
      .union([z.boolean(), z.lazy(() => WatchlistFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ProfileArgsSchema: z.ZodType<Prisma.ProfileDefaultArgs> = z
  .object({
    select: z.lazy(() => ProfileSelectSchema).optional(),
    include: z.lazy(() => ProfileIncludeSchema).optional(),
  })
  .strict();

export const ProfileCountOutputTypeArgsSchema: z.ZodType<Prisma.ProfileCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ProfileCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ProfileCountOutputTypeSelectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> =
  z
    .object({
      ViewingHistory: z.boolean().optional(),
      Watchlist: z.boolean().optional(),
    })
    .strict();

export const ProfileSelectSchema: z.ZodType<Prisma.ProfileSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    name: z.boolean().optional(),
    profileImage: z.boolean().optional(),
    dateOfBirth: z.boolean().optional(),
    language: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    account: z
      .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
      .optional(),
    ViewingHistory: z
      .union([z.boolean(), z.lazy(() => ViewingHistoryFindManyArgsSchema)])
      .optional(),
    Watchlist: z
      .union([z.boolean(), z.lazy(() => WatchlistFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProfileCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// SUBSCRIPTION TYPE
// ------------------------------------------------------

export const SubscriptionTypeIncludeSchema: z.ZodType<Prisma.SubscriptionTypeInclude> =
  z
    .object({
      Subscription: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => SubscriptionTypeCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeArgsSchema: z.ZodType<Prisma.SubscriptionTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => SubscriptionTypeSelectSchema).optional(),
      include: z.lazy(() => SubscriptionTypeIncludeSchema).optional(),
    })
    .strict();

export const SubscriptionTypeCountOutputTypeArgsSchema: z.ZodType<Prisma.SubscriptionTypeCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z
        .lazy(() => SubscriptionTypeCountOutputTypeSelectSchema)
        .nullish(),
    })
    .strict();

export const SubscriptionTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.SubscriptionTypeCountOutputTypeSelect> =
  z
    .object({
      Subscription: z.boolean().optional(),
    })
    .strict();

export const SubscriptionTypeSelectSchema: z.ZodType<Prisma.SubscriptionTypeSelect> =
  z
    .object({
      id: z.boolean().optional(),
      type: z.boolean().optional(),
      priceInEuroCents: z.boolean().optional(),
      Subscription: z
        .union([z.boolean(), z.lazy(() => SubscriptionFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => SubscriptionTypeCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

// SUBSCRIPTION
// ------------------------------------------------------

export const SubscriptionIncludeSchema: z.ZodType<Prisma.SubscriptionInclude> =
  z
    .object({
      account: z
        .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
        .optional(),
      subscriptionType: z
        .union([z.boolean(), z.lazy(() => SubscriptionTypeArgsSchema)])
        .optional(),
      referredBy: z
        .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
        .optional(),
      Invoice: z
        .union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => SubscriptionCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionArgsSchema: z.ZodType<Prisma.SubscriptionDefaultArgs> =
  z
    .object({
      select: z.lazy(() => SubscriptionSelectSchema).optional(),
      include: z.lazy(() => SubscriptionIncludeSchema).optional(),
    })
    .strict();

export const SubscriptionCountOutputTypeArgsSchema: z.ZodType<Prisma.SubscriptionCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => SubscriptionCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const SubscriptionCountOutputTypeSelectSchema: z.ZodType<Prisma.SubscriptionCountOutputTypeSelect> =
  z
    .object({
      Invoice: z.boolean().optional(),
    })
    .strict();

export const SubscriptionSelectSchema: z.ZodType<Prisma.SubscriptionSelect> = z
  .object({
    id: z.boolean().optional(),
    beginDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    accountId: z.boolean().optional(),
    subscriptionTypeId: z.boolean().optional(),
    referralId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    account: z
      .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
      .optional(),
    subscriptionType: z
      .union([z.boolean(), z.lazy(() => SubscriptionTypeArgsSchema)])
      .optional(),
    referredBy: z
      .union([z.boolean(), z.lazy(() => NetflixAccountArgsSchema)])
      .optional(),
    Invoice: z
      .union([z.boolean(), z.lazy(() => InvoiceFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => SubscriptionCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// INVOICE
// ------------------------------------------------------

export const InvoiceIncludeSchema: z.ZodType<Prisma.InvoiceInclude> = z
  .object({
    subscription: z
      .union([z.boolean(), z.lazy(() => SubscriptionArgsSchema)])
      .optional(),
  })
  .strict();

export const InvoiceArgsSchema: z.ZodType<Prisma.InvoiceDefaultArgs> = z
  .object({
    select: z.lazy(() => InvoiceSelectSchema).optional(),
    include: z.lazy(() => InvoiceIncludeSchema).optional(),
  })
  .strict();

export const InvoiceSelectSchema: z.ZodType<Prisma.InvoiceSelect> = z
  .object({
    id: z.boolean().optional(),
    subscriptionId: z.boolean().optional(),
    isPaid: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    subscription: z
      .union([z.boolean(), z.lazy(() => SubscriptionArgsSchema)])
      .optional(),
  })
  .strict();

// VIEWING HISTORY
// ------------------------------------------------------

export const ViewingHistoryIncludeSchema: z.ZodType<Prisma.ViewingHistoryInclude> =
  z
    .object({
      profile: z
        .union([z.boolean(), z.lazy(() => ProfileArgsSchema)])
        .optional(),
      content: z
        .union([z.boolean(), z.lazy(() => ContentArgsSchema)])
        .optional(),
    })
    .strict();

export const ViewingHistoryArgsSchema: z.ZodType<Prisma.ViewingHistoryDefaultArgs> =
  z
    .object({
      select: z.lazy(() => ViewingHistorySelectSchema).optional(),
      include: z.lazy(() => ViewingHistoryIncludeSchema).optional(),
    })
    .strict();

export const ViewingHistorySelectSchema: z.ZodType<Prisma.ViewingHistorySelect> =
  z
    .object({
      id: z.boolean().optional(),
      profileId: z.boolean().optional(),
      contentId: z.boolean().optional(),
      watchDate: z.boolean().optional(),
      progressPercentage: z.boolean().optional(),
      profile: z
        .union([z.boolean(), z.lazy(() => ProfileArgsSchema)])
        .optional(),
      content: z
        .union([z.boolean(), z.lazy(() => ContentArgsSchema)])
        .optional(),
    })
    .strict();

// WATCHLIST
// ------------------------------------------------------

export const WatchlistIncludeSchema: z.ZodType<Prisma.WatchlistInclude> = z
  .object({
    profile: z.union([z.boolean(), z.lazy(() => ProfileArgsSchema)]).optional(),
    content: z.union([z.boolean(), z.lazy(() => ContentArgsSchema)]).optional(),
  })
  .strict();

export const WatchlistArgsSchema: z.ZodType<Prisma.WatchlistDefaultArgs> = z
  .object({
    select: z.lazy(() => WatchlistSelectSchema).optional(),
    include: z.lazy(() => WatchlistIncludeSchema).optional(),
  })
  .strict();

export const WatchlistSelectSchema: z.ZodType<Prisma.WatchlistSelect> = z
  .object({
    id: z.boolean().optional(),
    profileId: z.boolean().optional(),
    contentId: z.boolean().optional(),
    profile: z.union([z.boolean(), z.lazy(() => ProfileArgsSchema)]).optional(),
    content: z.union([z.boolean(), z.lazy(() => ContentArgsSchema)]).optional(),
  })
  .strict();

// USER
// ------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      sessions: z.boolean().optional(),
      accounts: z.boolean().optional(),
    })
    .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    sessions: z
      .union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)])
      .optional(),
    accounts: z
      .union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// SESSION
// ------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z
  .object({
    select: z.lazy(() => SessionSelectSchema).optional(),
    include: z.lazy(() => SessionIncludeSchema).optional(),
  })
  .strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    token: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// ACCOUNT
// ------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z
  .object({
    select: z.lazy(() => AccountSelectSchema).optional(),
    include: z.lazy(() => AccountIncludeSchema).optional(),
  })
  .strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z
  .object({
    id: z.boolean().optional(),
    accountId: z.boolean().optional(),
    providerId: z.boolean().optional(),
    userId: z.boolean().optional(),
    accessToken: z.boolean().optional(),
    refreshToken: z.boolean().optional(),
    idToken: z.boolean().optional(),
    accessTokenExpiresAt: z.boolean().optional(),
    refreshTokenExpiresAt: z.boolean().optional(),
    scope: z.boolean().optional(),
    password: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
  })
  .strict();

// VERIFICATION
// ------------------------------------------------------

export const VerificationSelectSchema: z.ZodType<Prisma.VerificationSelect> = z
  .object({
    id: z.boolean().optional(),
    identifier: z.boolean().optional(),
    value: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict();

// JWKS
// ------------------------------------------------------

export const JwksSelectSchema: z.ZodType<Prisma.JwksSelect> = z
  .object({
    id: z.boolean().optional(),
    publicKey: z.boolean().optional(),
    privateKey: z.boolean().optional(),
    createdAt: z.boolean().optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const GenreWhereInputSchema: z.ZodType<Prisma.GenreWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GenreWhereInputSchema),
        z.lazy(() => GenreWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GenreWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GenreWhereInputSchema),
        z.lazy(() => GenreWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const GenreOrderByWithRelationInputSchema: z.ZodType<Prisma.GenreOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const GenreWhereUniqueInputSchema: z.ZodType<Prisma.GenreWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        name: z.string(),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        name: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          name: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => GenreWhereInputSchema),
              z.lazy(() => GenreWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => GenreWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => GenreWhereInputSchema),
              z.lazy(() => GenreWhereInputSchema).array(),
            ])
            .optional(),
          ContentMetadata: z
            .lazy(() => ContentMetadataListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const GenreOrderByWithAggregationInputSchema: z.ZodType<Prisma.GenreOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => GenreCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => GenreMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => GenreMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const GenreScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GenreScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => GenreScalarWhereWithAggregatesInputSchema),
          z.lazy(() => GenreScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => GenreScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => GenreScalarWhereWithAggregatesInputSchema),
          z.lazy(() => GenreScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ContentRatingWhereInputSchema: z.ZodType<Prisma.ContentRatingWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentRatingWhereInputSchema),
          z.lazy(() => ContentRatingWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentRatingWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentRatingWhereInputSchema),
          z.lazy(() => ContentRatingWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      ratingType: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataListRelationFilterSchema)
        .optional(),
    })
    .strict();

export const ContentRatingOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentRatingOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ratingType: z.lazy(() => SortOrderSchema).optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ContentRatingWhereUniqueInputSchema: z.ZodType<Prisma.ContentRatingWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        ratingType: z.string(),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        ratingType: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          ratingType: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => ContentRatingWhereInputSchema),
              z.lazy(() => ContentRatingWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ContentRatingWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ContentRatingWhereInputSchema),
              z.lazy(() => ContentRatingWhereInputSchema).array(),
            ])
            .optional(),
          ContentMetadata: z
            .lazy(() => ContentMetadataListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const ContentRatingOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentRatingOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ratingType: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ContentRatingCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => ContentRatingMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => ContentRatingMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ContentRatingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentRatingScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentRatingScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ContentRatingScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentRatingScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentRatingScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ContentRatingScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      ratingType: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ContentWhereInputSchema: z.ZodType<Prisma.ContentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ContentWhereInputSchema),
        z.lazy(() => ContentWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ContentWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ContentWhereInputSchema),
        z.lazy(() => ContentWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    duration: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    releaseDate: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    season: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    qualityId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataListRelationFilterSchema)
      .optional(),
    ViewingHistory: z
      .lazy(() => ViewingHistoryListRelationFilterSchema)
      .optional(),
    Watchlist: z.lazy(() => WatchlistListRelationFilterSchema).optional(),
  })
  .strict();

export const ContentOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      duration: z.lazy(() => SortOrderSchema).optional(),
      releaseDate: z.lazy(() => SortOrderSchema).optional(),
      season: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      qualityId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataOrderByRelationAggregateInputSchema)
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryOrderByRelationAggregateInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ContentWhereUniqueInputSchema: z.ZodType<Prisma.ContentWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => ContentWhereInputSchema),
              z.lazy(() => ContentWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ContentWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ContentWhereInputSchema),
              z.lazy(() => ContentWhereInputSchema).array(),
            ])
            .optional(),
          title: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          duration: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          releaseDate: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          season: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
            .optional()
            .nullable(),
          qualityId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          ContentMetadata: z
            .lazy(() => ContentMetadataListRelationFilterSchema)
            .optional(),
          ViewingHistory: z
            .lazy(() => ViewingHistoryListRelationFilterSchema)
            .optional(),
          Watchlist: z.lazy(() => WatchlistListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const ContentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      duration: z.lazy(() => SortOrderSchema).optional(),
      releaseDate: z.lazy(() => SortOrderSchema).optional(),
      season: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      qualityId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ContentCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ContentAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ContentMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ContentMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ContentSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ContentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ContentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      title: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      duration: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      season: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const LanguageWhereInputSchema: z.ZodType<Prisma.LanguageWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LanguageWhereInputSchema),
        z.lazy(() => LanguageWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LanguageWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LanguageWhereInputSchema),
        z.lazy(() => LanguageWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    language: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    Subtitle: z.lazy(() => SubtitleListRelationFilterSchema).optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const LanguageOrderByWithRelationInputSchema: z.ZodType<Prisma.LanguageOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      Subtitle: z
        .lazy(() => SubtitleOrderByRelationAggregateInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const LanguageWhereUniqueInputSchema: z.ZodType<Prisma.LanguageWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        language: z.string(),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        language: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          language: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => LanguageWhereInputSchema),
              z.lazy(() => LanguageWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => LanguageWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => LanguageWhereInputSchema),
              z.lazy(() => LanguageWhereInputSchema).array(),
            ])
            .optional(),
          Subtitle: z.lazy(() => SubtitleListRelationFilterSchema).optional(),
          ContentMetadata: z
            .lazy(() => ContentMetadataListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const LanguageOrderByWithAggregationInputSchema: z.ZodType<Prisma.LanguageOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LanguageCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LanguageMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LanguageMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const LanguageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LanguageScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LanguageScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LanguageScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LanguageScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LanguageScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LanguageScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      language: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SubtitleWhereInputSchema: z.ZodType<Prisma.SubtitleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubtitleWhereInputSchema),
        z.lazy(() => SubtitleWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubtitleWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubtitleWhereInputSchema),
        z.lazy(() => SubtitleWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    languageId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    language: z
      .union([
        z.lazy(() => LanguageScalarRelationFilterSchema),
        z.lazy(() => LanguageWhereInputSchema),
      ])
      .optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const SubtitleOrderByWithRelationInputSchema: z.ZodType<Prisma.SubtitleOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => LanguageOrderByWithRelationInputSchema).optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleWhereUniqueInputSchema: z.ZodType<Prisma.SubtitleWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => SubtitleWhereInputSchema),
              z.lazy(() => SubtitleWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => SubtitleWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => SubtitleWhereInputSchema),
              z.lazy(() => SubtitleWhereInputSchema).array(),
            ])
            .optional(),
          languageId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          content: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          language: z
            .union([
              z.lazy(() => LanguageScalarRelationFilterSchema),
              z.lazy(() => LanguageWhereInputSchema),
            ])
            .optional(),
          ContentMetadata: z
            .lazy(() => ContentMetadataListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const SubtitleOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubtitleOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => SubtitleCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => SubtitleMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SubtitleMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const SubtitleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubtitleScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubtitleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SubtitleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubtitleScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubtitleScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SubtitleScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      languageId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ContentMetadataWhereInputSchema: z.ZodType<Prisma.ContentMetadataWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentMetadataWhereInputSchema),
          z.lazy(() => ContentMetadataWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentMetadataWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentMetadataWhereInputSchema),
          z.lazy(() => ContentMetadataWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      title: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      genreId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      rating: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      languageId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      subtitleId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => EnumContentTypeFilterSchema),
          z.lazy(() => ContentTypeSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => EnumAgeRatingFilterSchema),
          z.lazy(() => AgeRatingSchema),
        ])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      genre: z
        .union([
          z.lazy(() => GenreNullableScalarRelationFilterSchema),
          z.lazy(() => GenreWhereInputSchema),
        ])
        .optional()
        .nullable(),
      content: z
        .union([
          z.lazy(() => ContentScalarRelationFilterSchema),
          z.lazy(() => ContentWhereInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.lazy(() => LanguageNullableScalarRelationFilterSchema),
          z.lazy(() => LanguageWhereInputSchema),
        ])
        .optional()
        .nullable(),
      subtitle: z
        .union([
          z.lazy(() => SubtitleNullableScalarRelationFilterSchema),
          z.lazy(() => SubtitleWhereInputSchema),
        ])
        .optional()
        .nullable(),
      contentRating: z
        .union([
          z.lazy(() => ContentRatingNullableScalarRelationFilterSchema),
          z.lazy(() => ContentRatingWhereInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ContentMetadataOrderByWithRelationInputSchema: z.ZodType<Prisma.ContentMetadataOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      genreId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      rating: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      languageId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      subtitleId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      contentType: z.lazy(() => SortOrderSchema).optional(),
      contentRatingId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      ageRating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      genre: z.lazy(() => GenreOrderByWithRelationInputSchema).optional(),
      content: z.lazy(() => ContentOrderByWithRelationInputSchema).optional(),
      language: z.lazy(() => LanguageOrderByWithRelationInputSchema).optional(),
      subtitle: z.lazy(() => SubtitleOrderByWithRelationInputSchema).optional(),
      contentRating: z
        .lazy(() => ContentRatingOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export const ContentMetadataWhereUniqueInputSchema: z.ZodType<Prisma.ContentMetadataWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => ContentMetadataWhereInputSchema),
              z.lazy(() => ContentMetadataWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ContentMetadataWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ContentMetadataWhereInputSchema),
              z.lazy(() => ContentMetadataWhereInputSchema).array(),
            ])
            .optional(),
          title: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          genreId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          rating: z
            .union([z.lazy(() => IntNullableFilterSchema), z.number().int()])
            .optional()
            .nullable(),
          contentId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          languageId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          subtitleId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          contentType: z
            .union([
              z.lazy(() => EnumContentTypeFilterSchema),
              z.lazy(() => ContentTypeSchema),
            ])
            .optional(),
          contentRatingId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          ageRating: z
            .union([
              z.lazy(() => EnumAgeRatingFilterSchema),
              z.lazy(() => AgeRatingSchema),
            ])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          genre: z
            .union([
              z.lazy(() => GenreNullableScalarRelationFilterSchema),
              z.lazy(() => GenreWhereInputSchema),
            ])
            .optional()
            .nullable(),
          content: z
            .union([
              z.lazy(() => ContentScalarRelationFilterSchema),
              z.lazy(() => ContentWhereInputSchema),
            ])
            .optional(),
          language: z
            .union([
              z.lazy(() => LanguageNullableScalarRelationFilterSchema),
              z.lazy(() => LanguageWhereInputSchema),
            ])
            .optional()
            .nullable(),
          subtitle: z
            .union([
              z.lazy(() => SubtitleNullableScalarRelationFilterSchema),
              z.lazy(() => SubtitleWhereInputSchema),
            ])
            .optional()
            .nullable(),
          contentRating: z
            .union([
              z.lazy(() => ContentRatingNullableScalarRelationFilterSchema),
              z.lazy(() => ContentRatingWhereInputSchema),
            ])
            .optional()
            .nullable(),
        })
        .strict(),
    );

export const ContentMetadataOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContentMetadataOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      genreId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      rating: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      languageId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      subtitleId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      contentType: z.lazy(() => SortOrderSchema).optional(),
      contentRatingId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      ageRating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ContentMetadataCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z
        .lazy(() => ContentMetadataAvgOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => ContentMetadataMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => ContentMetadataMinOrderByAggregateInputSchema)
        .optional(),
      _sum: z
        .lazy(() => ContentMetadataSumOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ContentMetadataScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContentMetadataScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ContentMetadataScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentMetadataScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ContentMetadataScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      title: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      languageId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => EnumContentTypeWithAggregatesFilterSchema),
          z.lazy(() => ContentTypeSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => EnumAgeRatingWithAggregatesFilterSchema),
          z.lazy(() => AgeRatingSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountWhereInputSchema: z.ZodType<Prisma.NetflixAccountWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => NetflixAccountWhereInputSchema),
          z.lazy(() => NetflixAccountWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => NetflixAccountWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => NetflixAccountWhereInputSchema),
          z.lazy(() => NetflixAccountWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      password: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      activated: z
        .union([z.lazy(() => BoolFilterSchema), z.boolean()])
        .optional(),
      blockedUntil: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      Profile: z.lazy(() => ProfileListRelationFilterSchema).optional(),
      PreviousPasswordHash: z
        .lazy(() => PreviousPasswordHashListRelationFilterSchema)
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionListRelationFilterSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionListRelationFilterSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountOrderByWithRelationInputSchema: z.ZodType<Prisma.NetflixAccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      activated: z.lazy(() => SortOrderSchema).optional(),
      blockedUntil: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      Profile: z
        .lazy(() => ProfileOrderByRelationAggregateInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(() => PreviousPasswordHashOrderByRelationAggregateInputSchema)
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionOrderByRelationAggregateInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountWhereUniqueInputSchema: z.ZodType<Prisma.NetflixAccountWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        email: z.string(),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        email: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          email: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => NetflixAccountWhereInputSchema),
              z.lazy(() => NetflixAccountWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => NetflixAccountWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => NetflixAccountWhereInputSchema),
              z.lazy(() => NetflixAccountWhereInputSchema).array(),
            ])
            .optional(),
          password: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          activated: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          blockedUntil: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          Profile: z.lazy(() => ProfileListRelationFilterSchema).optional(),
          PreviousPasswordHash: z
            .lazy(() => PreviousPasswordHashListRelationFilterSchema)
            .optional(),
          Subscription: z
            .lazy(() => SubscriptionListRelationFilterSchema)
            .optional(),
          ReferredSubscriptions: z
            .lazy(() => SubscriptionListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const NetflixAccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.NetflixAccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      activated: z.lazy(() => SortOrderSchema).optional(),
      blockedUntil: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => NetflixAccountCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => NetflixAccountMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => NetflixAccountMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NetflixAccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => NetflixAccountScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => NetflixAccountScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => NetflixAccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => NetflixAccountScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => NetflixAccountScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      password: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      activated: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      blockedUntil: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashWhereInputSchema: z.ZodType<Prisma.PreviousPasswordHashWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereInputSchema),
          z.lazy(() => PreviousPasswordHashWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PreviousPasswordHashWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereInputSchema),
          z.lazy(() => PreviousPasswordHashWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      passwordHash: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      account: z
        .union([
          z.lazy(() => NetflixAccountScalarRelationFilterSchema),
          z.lazy(() => NetflixAccountWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashOrderByWithRelationInputSchema: z.ZodType<Prisma.PreviousPasswordHashOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      passwordHash: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      account: z
        .lazy(() => NetflixAccountOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export const PreviousPasswordHashWhereUniqueInputSchema: z.ZodType<Prisma.PreviousPasswordHashWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => PreviousPasswordHashWhereInputSchema),
              z.lazy(() => PreviousPasswordHashWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => PreviousPasswordHashWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => PreviousPasswordHashWhereInputSchema),
              z.lazy(() => PreviousPasswordHashWhereInputSchema).array(),
            ])
            .optional(),
          accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          passwordHash: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          account: z
            .union([
              z.lazy(() => NetflixAccountScalarRelationFilterSchema),
              z.lazy(() => NetflixAccountWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const PreviousPasswordHashOrderByWithAggregationInputSchema: z.ZodType<Prisma.PreviousPasswordHashOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      passwordHash: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PreviousPasswordHashCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => PreviousPasswordHashMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => PreviousPasswordHashMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const PreviousPasswordHashScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PreviousPasswordHashScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => PreviousPasswordHashScalarWhereWithAggregatesInputSchema,
          ),
          z
            .lazy(
              () => PreviousPasswordHashScalarWhereWithAggregatesInputSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PreviousPasswordHashScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => PreviousPasswordHashScalarWhereWithAggregatesInputSchema,
          ),
          z
            .lazy(
              () => PreviousPasswordHashScalarWhereWithAggregatesInputSchema,
            )
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      passwordHash: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const ProfileWhereInputSchema: z.ZodType<Prisma.ProfileWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProfileWhereInputSchema),
        z.lazy(() => ProfileWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProfileWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProfileWhereInputSchema),
        z.lazy(() => ProfileWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accountId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    profileImage: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    dateOfBirth: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    language: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    account: z
      .union([
        z.lazy(() => NetflixAccountScalarRelationFilterSchema),
        z.lazy(() => NetflixAccountWhereInputSchema),
      ])
      .optional(),
    ViewingHistory: z
      .lazy(() => ViewingHistoryListRelationFilterSchema)
      .optional(),
    Watchlist: z.lazy(() => WatchlistListRelationFilterSchema).optional(),
  })
  .strict();

export const ProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      account: z
        .lazy(() => NetflixAccountOrderByWithRelationInputSchema)
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryOrderByRelationAggregateInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ProfileWhereUniqueInputSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => ProfileWhereInputSchema),
              z.lazy(() => ProfileWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ProfileWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ProfileWhereInputSchema),
              z.lazy(() => ProfileWhereInputSchema).array(),
            ])
            .optional(),
          accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          profileImage: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          dateOfBirth: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          language: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          account: z
            .union([
              z.lazy(() => NetflixAccountScalarRelationFilterSchema),
              z.lazy(() => NetflixAccountWhereInputSchema),
            ])
            .optional(),
          ViewingHistory: z
            .lazy(() => ViewingHistoryListRelationFilterSchema)
            .optional(),
          Watchlist: z.lazy(() => WatchlistListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const ProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ProfileCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ProfileMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ProfileMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProfileScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      profileImage: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      language: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeWhereInputSchema: z.ZodType<Prisma.SubscriptionTypeWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubscriptionTypeWhereInputSchema),
          z.lazy(() => SubscriptionTypeWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriptionTypeWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubscriptionTypeWhereInputSchema),
          z.lazy(() => SubscriptionTypeWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      priceInEuroCents: z
        .union([z.lazy(() => IntFilterSchema), z.number()])
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionListRelationFilterSchema)
        .optional(),
    })
    .strict();

export const SubscriptionTypeOrderByWithRelationInputSchema: z.ZodType<Prisma.SubscriptionTypeOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
      Subscription: z
        .lazy(() => SubscriptionOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionTypeWhereUniqueInputSchema: z.ZodType<Prisma.SubscriptionTypeWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        type: z.string(),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        type: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          type: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => SubscriptionTypeWhereInputSchema),
              z.lazy(() => SubscriptionTypeWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => SubscriptionTypeWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => SubscriptionTypeWhereInputSchema),
              z.lazy(() => SubscriptionTypeWhereInputSchema).array(),
            ])
            .optional(),
          priceInEuroCents: z
            .union([z.lazy(() => IntFilterSchema), z.number().int()])
            .optional(),
          Subscription: z
            .lazy(() => SubscriptionListRelationFilterSchema)
            .optional(),
        })
        .strict(),
    );

export const SubscriptionTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubscriptionTypeOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => SubscriptionTypeCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z
        .lazy(() => SubscriptionTypeAvgOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => SubscriptionTypeMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => SubscriptionTypeMinOrderByAggregateInputSchema)
        .optional(),
      _sum: z
        .lazy(() => SubscriptionTypeSumOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionTypeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubscriptionTypeScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubscriptionTypeScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SubscriptionTypeScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriptionTypeScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubscriptionTypeScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SubscriptionTypeScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      priceInEuroCents: z
        .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
        .optional(),
    })
    .strict();

export const SubscriptionWhereInputSchema: z.ZodType<Prisma.SubscriptionWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubscriptionWhereInputSchema),
          z.lazy(() => SubscriptionWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriptionWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubscriptionWhereInputSchema),
          z.lazy(() => SubscriptionWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      beginDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      endDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      subscriptionTypeId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      referralId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      account: z
        .union([
          z.lazy(() => NetflixAccountScalarRelationFilterSchema),
          z.lazy(() => NetflixAccountWhereInputSchema),
        ])
        .optional(),
      subscriptionType: z
        .union([
          z.lazy(() => SubscriptionTypeScalarRelationFilterSchema),
          z.lazy(() => SubscriptionTypeWhereInputSchema),
        ])
        .optional(),
      referredBy: z
        .union([
          z.lazy(() => NetflixAccountNullableScalarRelationFilterSchema),
          z.lazy(() => NetflixAccountWhereInputSchema),
        ])
        .optional()
        .nullable(),
      Invoice: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
    })
    .strict();

export const SubscriptionOrderByWithRelationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      beginDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      subscriptionTypeId: z.lazy(() => SortOrderSchema).optional(),
      referralId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      account: z
        .lazy(() => NetflixAccountOrderByWithRelationInputSchema)
        .optional(),
      subscriptionType: z
        .lazy(() => SubscriptionTypeOrderByWithRelationInputSchema)
        .optional(),
      referredBy: z
        .lazy(() => NetflixAccountOrderByWithRelationInputSchema)
        .optional(),
      Invoice: z
        .lazy(() => InvoiceOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionWhereUniqueInputSchema: z.ZodType<Prisma.SubscriptionWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => SubscriptionWhereInputSchema),
              z.lazy(() => SubscriptionWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => SubscriptionWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => SubscriptionWhereInputSchema),
              z.lazy(() => SubscriptionWhereInputSchema).array(),
            ])
            .optional(),
          beginDate: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          endDate: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          subscriptionTypeId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          referralId: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          account: z
            .union([
              z.lazy(() => NetflixAccountScalarRelationFilterSchema),
              z.lazy(() => NetflixAccountWhereInputSchema),
            ])
            .optional(),
          subscriptionType: z
            .union([
              z.lazy(() => SubscriptionTypeScalarRelationFilterSchema),
              z.lazy(() => SubscriptionTypeWhereInputSchema),
            ])
            .optional(),
          referredBy: z
            .union([
              z.lazy(() => NetflixAccountNullableScalarRelationFilterSchema),
              z.lazy(() => NetflixAccountWhereInputSchema),
            ])
            .optional()
            .nullable(),
          Invoice: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const SubscriptionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      beginDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      subscriptionTypeId: z.lazy(() => SortOrderSchema).optional(),
      referralId: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => SubscriptionCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => SubscriptionMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SubscriptionMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const SubscriptionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SubscriptionScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      beginDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      endDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      subscriptionTypeId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      referralId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceWhereInputSchema: z.ZodType<Prisma.InvoiceWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => InvoiceWhereInputSchema),
        z.lazy(() => InvoiceWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => InvoiceWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => InvoiceWhereInputSchema),
        z.lazy(() => InvoiceWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    subscriptionId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    isPaid: z
      .union([
        z.lazy(() => EnumPaymentStatusFilterSchema),
        z.lazy(() => PaymentStatusSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    subscription: z
      .union([
        z.lazy(() => SubscriptionScalarRelationFilterSchema),
        z.lazy(() => SubscriptionWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const InvoiceOrderByWithRelationInputSchema: z.ZodType<Prisma.InvoiceOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      subscriptionId: z.lazy(() => SortOrderSchema).optional(),
      isPaid: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      subscription: z
        .lazy(() => SubscriptionOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export const InvoiceWhereUniqueInputSchema: z.ZodType<Prisma.InvoiceWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => InvoiceWhereInputSchema),
              z.lazy(() => InvoiceWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => InvoiceWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => InvoiceWhereInputSchema),
              z.lazy(() => InvoiceWhereInputSchema).array(),
            ])
            .optional(),
          subscriptionId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          isPaid: z
            .union([
              z.lazy(() => EnumPaymentStatusFilterSchema),
              z.lazy(() => PaymentStatusSchema),
            ])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          subscription: z
            .union([
              z.lazy(() => SubscriptionScalarRelationFilterSchema),
              z.lazy(() => SubscriptionWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const InvoiceOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvoiceOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      subscriptionId: z.lazy(() => SortOrderSchema).optional(),
      isPaid: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => InvoiceCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => InvoiceMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => InvoiceMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const InvoiceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InvoiceScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => InvoiceScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema),
          z.lazy(() => InvoiceScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      subscriptionId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => EnumPaymentStatusWithAggregatesFilterSchema),
          z.lazy(() => PaymentStatusSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryWhereInputSchema: z.ZodType<Prisma.ViewingHistoryWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ViewingHistoryWhereInputSchema),
          z.lazy(() => ViewingHistoryWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ViewingHistoryWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ViewingHistoryWhereInputSchema),
          z.lazy(() => ViewingHistoryWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      profileId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      watchDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      progressPercentage: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
      profile: z
        .union([
          z.lazy(() => ProfileScalarRelationFilterSchema),
          z.lazy(() => ProfileWhereInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.lazy(() => ContentScalarRelationFilterSchema),
          z.lazy(() => ContentWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.ViewingHistoryOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      watchDate: z.lazy(() => SortOrderSchema).optional(),
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
      profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
      content: z.lazy(() => ContentOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const ViewingHistoryWhereUniqueInputSchema: z.ZodType<Prisma.ViewingHistoryWhereUniqueInput> =
  z
    .object({
      id: z.string().uuid(),
    })
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          AND: z
            .union([
              z.lazy(() => ViewingHistoryWhereInputSchema),
              z.lazy(() => ViewingHistoryWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => ViewingHistoryWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => ViewingHistoryWhereInputSchema),
              z.lazy(() => ViewingHistoryWhereInputSchema).array(),
            ])
            .optional(),
          profileId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          contentId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          watchDate: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          progressPercentage: z
            .union([z.lazy(() => FloatFilterSchema), z.number()])
            .optional(),
          profile: z
            .union([
              z.lazy(() => ProfileScalarRelationFilterSchema),
              z.lazy(() => ProfileWhereInputSchema),
            ])
            .optional(),
          content: z
            .union([
              z.lazy(() => ContentScalarRelationFilterSchema),
              z.lazy(() => ContentWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const ViewingHistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ViewingHistoryOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      watchDate: z.lazy(() => SortOrderSchema).optional(),
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ViewingHistoryCountOrderByAggregateInputSchema)
        .optional(),
      _avg: z
        .lazy(() => ViewingHistoryAvgOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => ViewingHistoryMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => ViewingHistoryMinOrderByAggregateInputSchema)
        .optional(),
      _sum: z
        .lazy(() => ViewingHistorySumOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ViewingHistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ViewingHistoryScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ViewingHistoryScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ViewingHistoryScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ViewingHistoryScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      profileId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      watchDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      progressPercentage: z
        .union([z.lazy(() => FloatWithAggregatesFilterSchema), z.number()])
        .optional(),
    })
    .strict();

export const WatchlistWhereInputSchema: z.ZodType<Prisma.WatchlistWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => WatchlistWhereInputSchema),
          z.lazy(() => WatchlistWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => WatchlistWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => WatchlistWhereInputSchema),
          z.lazy(() => WatchlistWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      profileId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      profile: z
        .union([
          z.lazy(() => ProfileScalarRelationFilterSchema),
          z.lazy(() => ProfileWhereInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.lazy(() => ContentScalarRelationFilterSchema),
          z.lazy(() => ContentWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistOrderByWithRelationInputSchema: z.ZodType<Prisma.WatchlistOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
      content: z.lazy(() => ContentOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const WatchlistWhereUniqueInputSchema: z.ZodType<Prisma.WatchlistWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string().uuid(),
        profileId_contentId: z.lazy(
          () => WatchlistProfileIdContentIdCompoundUniqueInputSchema,
        ),
      }),
      z.object({
        id: z.string().uuid(),
      }),
      z.object({
        profileId_contentId: z.lazy(
          () => WatchlistProfileIdContentIdCompoundUniqueInputSchema,
        ),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().uuid().optional(),
          profileId_contentId: z
            .lazy(() => WatchlistProfileIdContentIdCompoundUniqueInputSchema)
            .optional(),
          AND: z
            .union([
              z.lazy(() => WatchlistWhereInputSchema),
              z.lazy(() => WatchlistWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => WatchlistWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => WatchlistWhereInputSchema),
              z.lazy(() => WatchlistWhereInputSchema).array(),
            ])
            .optional(),
          profileId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          contentId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          profile: z
            .union([
              z.lazy(() => ProfileScalarRelationFilterSchema),
              z.lazy(() => ProfileWhereInputSchema),
            ])
            .optional(),
          content: z
            .union([
              z.lazy(() => ContentScalarRelationFilterSchema),
              z.lazy(() => ContentWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const WatchlistOrderByWithAggregationInputSchema: z.ZodType<Prisma.WatchlistOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => WatchlistCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => WatchlistMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => WatchlistMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const WatchlistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.WatchlistScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => WatchlistScalarWhereWithAggregatesInputSchema),
          z.lazy(() => WatchlistScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => WatchlistScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => WatchlistScalarWhereWithAggregatesInputSchema),
          z.lazy(() => WatchlistScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      profileId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    emailVerified: z
      .union([z.lazy(() => BoolFilterSchema), z.boolean()])
      .optional(),
    image: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      sessions: z
        .lazy(() => SessionOrderByRelationAggregateInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        email: z.string(),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        email: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          email: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => UserWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          emailVerified: z
            .union([z.lazy(() => BoolFilterSchema), z.boolean()])
            .optional(),
          image: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
          accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      emailVerified: z
        .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
        .optional(),
      image: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SessionWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SessionWhereInputSchema),
        z.lazy(() => SessionWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expiresAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    ipAddress: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userAgent: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userAgent: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> =
  z
    .union([
      z.object({
        id: z.string(),
        token: z.string(),
      }),
      z.object({
        id: z.string(),
      }),
      z.object({
        token: z.string(),
      }),
    ])
    .and(
      z
        .object({
          id: z.string().optional(),
          token: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => SessionWhereInputSchema),
              z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => SessionWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => SessionWhereInputSchema),
              z.lazy(() => SessionWhereInputSchema).array(),
            ])
            .optional(),
          expiresAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          ipAddress: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          userAgent: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userAgent: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SessionScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      expiresAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      token: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AccountWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AccountWhereInputSchema),
        z.lazy(() => AccountWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accountId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    providerId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    accessToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    refreshToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    idToken: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    scope: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    password: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserScalarRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      refreshToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      idToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      accessTokenExpiresAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      refreshTokenExpiresAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      scope: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => AccountWhereInputSchema),
              z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => AccountWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => AccountWhereInputSchema),
              z.lazy(() => AccountWhereInputSchema).array(),
            ])
            .optional(),
          accountId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          providerId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          userId: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          accessToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          refreshToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          idToken: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          accessTokenExpiresAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          refreshTokenExpiresAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          scope: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          password: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          updatedAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserScalarRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      refreshToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      idToken: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      accessTokenExpiresAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      refreshTokenExpiresAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      scope: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      providerId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      accessToken: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const VerificationWhereInputSchema: z.ZodType<Prisma.VerificationWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => VerificationWhereInputSchema),
          z.lazy(() => VerificationWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => VerificationWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => VerificationWhereInputSchema),
          z.lazy(() => VerificationWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      identifier: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      expiresAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      updatedAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
    })
    .strict();

export const VerificationOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationWhereUniqueInputSchema: z.ZodType<Prisma.VerificationWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => VerificationWhereInputSchema),
              z.lazy(() => VerificationWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => VerificationWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => VerificationWhereInputSchema),
              z.lazy(() => VerificationWhereInputSchema).array(),
            ])
            .optional(),
          identifier: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          value: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          expiresAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          createdAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
          updatedAt: z
            .union([
              z.lazy(() => DateTimeNullableFilterSchema),
              z.coerce.date(),
            ])
            .optional()
            .nullable(),
        })
        .strict(),
    );

export const VerificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      _count: z
        .lazy(() => VerificationCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => VerificationMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => VerificationMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const VerificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => VerificationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => VerificationScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => VerificationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => VerificationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      identifier: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      value: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      expiresAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const JwksWhereInputSchema: z.ZodType<Prisma.JwksWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => JwksWhereInputSchema),
        z.lazy(() => JwksWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => JwksWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => JwksWhereInputSchema),
        z.lazy(() => JwksWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    publicKey: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    privateKey: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const JwksOrderByWithRelationInputSchema: z.ZodType<Prisma.JwksOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicKey: z.lazy(() => SortOrderSchema).optional(),
      privateKey: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const JwksWhereUniqueInputSchema: z.ZodType<Prisma.JwksWhereUniqueInput> =
  z
    .object({
      id: z.string(),
    })
    .and(
      z
        .object({
          id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => JwksWhereInputSchema),
              z.lazy(() => JwksWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => JwksWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => JwksWhereInputSchema),
              z.lazy(() => JwksWhereInputSchema).array(),
            ])
            .optional(),
          publicKey: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          privateKey: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          createdAt: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
        })
        .strict(),
    );

export const JwksOrderByWithAggregationInputSchema: z.ZodType<Prisma.JwksOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicKey: z.lazy(() => SortOrderSchema).optional(),
      privateKey: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => JwksCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => JwksMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => JwksMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const JwksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JwksScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => JwksScalarWhereWithAggregatesInputSchema),
          z.lazy(() => JwksScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => JwksScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => JwksScalarWhereWithAggregatesInputSchema),
          z.lazy(() => JwksScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      publicKey: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      privateKey: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const GenreCreateInputSchema: z.ZodType<Prisma.GenreCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    ContentMetadata: z
      .lazy(() => ContentMetadataCreateNestedManyWithoutGenreInputSchema)
      .optional(),
  })
  .strict();

export const GenreUncheckedCreateInputSchema: z.ZodType<Prisma.GenreUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      ContentMetadata: z
        .lazy(
          () => ContentMetadataUncheckedCreateNestedManyWithoutGenreInputSchema,
        )
        .optional(),
    })
    .strict();

export const GenreUpdateInputSchema: z.ZodType<Prisma.GenreUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataUpdateManyWithoutGenreNestedInputSchema)
      .optional(),
  })
  .strict();

export const GenreUncheckedUpdateInputSchema: z.ZodType<Prisma.GenreUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () => ContentMetadataUncheckedUpdateManyWithoutGenreNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const GenreCreateManyInputSchema: z.ZodType<Prisma.GenreCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
    })
    .strict();

export const GenreUpdateManyMutationInputSchema: z.ZodType<Prisma.GenreUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const GenreUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GenreUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingCreateInputSchema: z.ZodType<Prisma.ContentRatingCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      ratingType: z.string(),
      ContentMetadata: z
        .lazy(
          () => ContentMetadataCreateNestedManyWithoutContentRatingInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentRatingUncheckedCreateInputSchema: z.ZodType<Prisma.ContentRatingUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      ratingType: z.string(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutContentRatingInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentRatingUpdateInputSchema: z.ZodType<Prisma.ContentRatingUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () => ContentMetadataUpdateManyWithoutContentRatingNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentRatingUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentRatingUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutContentRatingNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentRatingCreateManyInputSchema: z.ZodType<Prisma.ContentRatingCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      ratingType: z.string(),
    })
    .strict();

export const ContentRatingUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentRatingUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentRatingUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentCreateInputSchema: z.ZodType<Prisma.ContentCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    title: z.string(),
    duration: z.coerce.date(),
    releaseDate: z.coerce.date(),
    season: z.number().int().optional().nullable(),
    qualityId: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataCreateNestedManyWithoutContentInputSchema)
      .optional(),
    ViewingHistory: z
      .lazy(() => ViewingHistoryCreateNestedManyWithoutContentInputSchema)
      .optional(),
    Watchlist: z
      .lazy(() => WatchlistCreateNestedManyWithoutContentInputSchema)
      .optional(),
  })
  .strict();

export const ContentUncheckedCreateInputSchema: z.ZodType<Prisma.ContentUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentUpdateInputSchema: z.ZodType<Prisma.ContentUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    title: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    duration: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    releaseDate: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    season: z
      .union([
        z.number().int(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    qualityId: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ContentMetadata: z
      .lazy(() => ContentMetadataUpdateManyWithoutContentNestedInputSchema)
      .optional(),
    ViewingHistory: z
      .lazy(() => ViewingHistoryUpdateManyWithoutContentNestedInputSchema)
      .optional(),
    Watchlist: z
      .lazy(() => WatchlistUpdateManyWithoutContentNestedInputSchema)
      .optional(),
  })
  .strict();

export const ContentUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentCreateManyInputSchema: z.ZodType<Prisma.ContentCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LanguageCreateInputSchema: z.ZodType<Prisma.LanguageCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      Subtitle: z
        .lazy(() => SubtitleCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedCreateInputSchema: z.ZodType<Prisma.LanguageUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      Subtitle: z
        .lazy(() => SubtitleUncheckedCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutLanguageInputSchema,
        )
        .optional(),
    })
    .strict();

export const LanguageUpdateInputSchema: z.ZodType<Prisma.LanguageUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subtitle: z
        .lazy(() => SubtitleUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedUpdateInputSchema: z.ZodType<Prisma.LanguageUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subtitle: z
        .lazy(() => SubtitleUncheckedUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutLanguageNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const LanguageCreateManyInputSchema: z.ZodType<Prisma.LanguageCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
    })
    .strict();

export const LanguageUpdateManyMutationInputSchema: z.ZodType<Prisma.LanguageUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LanguageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LanguageUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubtitleCreateInputSchema: z.ZodType<Prisma.SubtitleCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.string(),
      language: z.lazy(() => LanguageCreateNestedOneWithoutSubtitleInputSchema),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutSubtitleInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUncheckedCreateInputSchema: z.ZodType<Prisma.SubtitleUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      languageId: z.string(),
      content: z.string(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutSubtitleInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubtitleUpdateInputSchema: z.ZodType<Prisma.SubtitleUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneRequiredWithoutSubtitleNestedInputSchema)
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutSubtitleNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutSubtitleNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubtitleCreateManyInputSchema: z.ZodType<Prisma.SubtitleCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      languageId: z.string(),
      content: z.string(),
    })
    .strict();

export const SubtitleUpdateManyMutationInputSchema: z.ZodType<Prisma.SubtitleUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateInputSchema: z.ZodType<Prisma.ContentMetadataCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      genre: z
        .lazy(() => GenreCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutContentMetadataInputSchema,
      ),
      language: z
        .lazy(() => LanguageCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingCreateNestedOneWithoutContentMetadataInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataUpdateInputSchema: z.ZodType<Prisma.ContentMetadataUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      genre: z
        .lazy(() => GenreUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateManyInputSchema: z.ZodType<Prisma.ContentMetadataCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataUpdateManyMutationInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountCreateInputSchema: z.ZodType<Prisma.NetflixAccountCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionCreateNestedManyWithoutReferredByInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedCreateInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedCreateNestedManyWithoutReferredByInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountUpdateInputSchema: z.ZodType<Prisma.NetflixAccountUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionUpdateManyWithoutReferredByNestedInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUncheckedUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutReferredByNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateManyInputSchema: z.ZodType<Prisma.NetflixAccountCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const NetflixAccountUpdateManyMutationInputSchema: z.ZodType<Prisma.NetflixAccountUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashCreateInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
      account: z.lazy(
        () =>
          NetflixAccountCreateNestedOneWithoutPreviousPasswordHashInputSchema,
      ),
    })
    .strict();

export const PreviousPasswordHashUncheckedCreateInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PreviousPasswordHashUpdateInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () =>
            NetflixAccountUpdateOneRequiredWithoutPreviousPasswordHashNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedUpdateInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashCreateManyInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PreviousPasswordHashUpdateManyMutationInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    name: z.string(),
    profileImage: z.string().optional().nullable(),
    dateOfBirth: z.coerce.date(),
    language: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    account: z.lazy(
      () => NetflixAccountCreateNestedOneWithoutProfileInputSchema,
    ),
    ViewingHistory: z
      .lazy(() => ViewingHistoryCreateNestedManyWithoutProfileInputSchema)
      .optional(),
    Watchlist: z
      .lazy(() => WatchlistCreateNestedManyWithoutProfileInputSchema)
      .optional(),
  })
  .strict();

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutProfileInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUpdateInputSchema: z.ZodType<Prisma.ProfileUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    profileImage: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    dateOfBirth: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    language: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    account: z
      .lazy(
        () => NetflixAccountUpdateOneRequiredWithoutProfileNestedInputSchema,
      )
      .optional(),
    ViewingHistory: z
      .lazy(() => ViewingHistoryUpdateManyWithoutProfileNestedInputSchema)
      .optional(),
    Watchlist: z
      .lazy(() => WatchlistUpdateManyWithoutProfileNestedInputSchema)
      .optional(),
  })
  .strict();

export const ProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutProfileNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileCreateManyInputSchema: z.ZodType<Prisma.ProfileCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfileUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeCreateInputSchema: z.ZodType<Prisma.SubscriptionTypeCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.string(),
      priceInEuroCents: z.number().int(),
      Subscription: z
        .lazy(
          () => SubscriptionCreateNestedManyWithoutSubscriptionTypeInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionTypeUncheckedCreateInputSchema: z.ZodType<Prisma.SubscriptionTypeUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.string(),
      priceInEuroCents: z.number().int(),
      Subscription: z
        .lazy(
          () =>
            SubscriptionUncheckedCreateNestedManyWithoutSubscriptionTypeInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionTypeUpdateInputSchema: z.ZodType<Prisma.SubscriptionTypeUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUpdateManyWithoutSubscriptionTypeNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionTypeUncheckedUpdateInputSchema: z.ZodType<Prisma.SubscriptionTypeUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subscription: z
        .lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionTypeCreateManyInputSchema: z.ZodType<Prisma.SubscriptionTypeCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.string(),
      priceInEuroCents: z.number().int(),
    })
    .strict();

export const SubscriptionTypeUpdateManyMutationInputSchema: z.ZodType<Prisma.SubscriptionTypeUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubscriptionTypeUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateInputSchema: z.ZodType<Prisma.SubscriptionCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      subscriptionType: z.lazy(
        () => SubscriptionTypeCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceCreateNestedManyWithoutSubscriptionInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      subscriptionTypeId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedCreateNestedManyWithoutSubscriptionInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUpdateInputSchema: z.ZodType<Prisma.SubscriptionUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () =>
            NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      subscriptionType: z
        .lazy(
          () =>
            SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceUpdateManyWithoutSubscriptionNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionCreateManyInputSchema: z.ZodType<Prisma.SubscriptionCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      subscriptionTypeId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SubscriptionUpdateManyMutationInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceCreateInputSchema: z.ZodType<Prisma.InvoiceCreateInput> = z
  .object({
    id: z.string().uuid().optional(),
    isPaid: z.lazy(() => PaymentStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(
      () => SubscriptionCreateNestedOneWithoutInvoiceInputSchema,
    ),
  })
  .strict();

export const InvoiceUncheckedCreateInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      subscriptionId: z.string(),
      isPaid: z.lazy(() => PaymentStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const InvoiceUpdateInputSchema: z.ZodType<Prisma.InvoiceUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().uuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    isPaid: z
      .union([
        z.lazy(() => PaymentStatusSchema),
        z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    subscription: z
      .lazy(() => SubscriptionUpdateOneRequiredWithoutInvoiceNestedInputSchema)
      .optional(),
  })
  .strict();

export const InvoiceUncheckedUpdateInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceCreateManyInputSchema: z.ZodType<Prisma.InvoiceCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      subscriptionId: z.string(),
      isPaid: z.lazy(() => PaymentStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const InvoiceUpdateManyMutationInputSchema: z.ZodType<Prisma.InvoiceUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryCreateInputSchema: z.ZodType<Prisma.ViewingHistoryCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
      profile: z.lazy(
        () => ProfileCreateNestedOneWithoutViewingHistoryInputSchema,
      ),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutViewingHistoryInputSchema,
      ),
    })
    .strict();

export const ViewingHistoryUncheckedCreateInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      contentId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const ViewingHistoryUpdateInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile: z
        .lazy(
          () => ProfileUpdateOneRequiredWithoutViewingHistoryNestedInputSchema,
        )
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutViewingHistoryNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryCreateManyInputSchema: z.ZodType<Prisma.ViewingHistoryCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      contentId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const ViewingHistoryUpdateManyMutationInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistCreateInputSchema: z.ZodType<Prisma.WatchlistCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profile: z.lazy(() => ProfileCreateNestedOneWithoutWatchlistInputSchema),
      content: z.lazy(() => ContentCreateNestedOneWithoutWatchlistInputSchema),
    })
    .strict();

export const WatchlistUncheckedCreateInputSchema: z.ZodType<Prisma.WatchlistUncheckedCreateInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      contentId: z.string(),
    })
    .strict();

export const WatchlistUpdateInputSchema: z.ZodType<Prisma.WatchlistUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile: z
        .lazy(() => ProfileUpdateOneRequiredWithoutWatchlistNestedInputSchema)
        .optional(),
      content: z
        .lazy(() => ContentUpdateOneRequiredWithoutWatchlistNestedInputSchema)
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistCreateManyInputSchema: z.ZodType<Prisma.WatchlistCreateManyInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      contentId: z.string(),
    })
    .strict();

export const WatchlistUpdateManyMutationInputSchema: z.ZodType<Prisma.WatchlistUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sessions: z
      .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    emailVerified: z
      .union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)])
      .optional(),
    image: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    sessions: z
      .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    accounts: z
      .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      accounts: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string(),
    expiresAt: z.coerce.date(),
    token: z.string(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    ipAddress: z.string().optional().nullable(),
    userAgent: z.string().optional().nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
  })
  .strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
      userId: z.string(),
    })
    .strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    expiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    token: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    ipAddress: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    userAgent: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema)
      .optional(),
  })
  .strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
      userId: z.string(),
    })
    .strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    id: z.string(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
  })
  .strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string(),
      providerId: z.string(),
      userId: z.string(),
      accessToken: z.string().optional().nullable(),
      refreshToken: z.string().optional().nullable(),
      idToken: z.string().optional().nullable(),
      accessTokenExpiresAt: z.coerce.date().optional().nullable(),
      refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
      scope: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accountId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    providerId: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    accessToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    idToken: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    accessTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    refreshTokenExpiresAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    scope: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    password: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema)
      .optional(),
  })
  .strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string(),
      providerId: z.string(),
      userId: z.string(),
      accessToken: z.string().optional().nullable(),
      refreshToken: z.string().optional().nullable(),
      idToken: z.string().optional().nullable(),
      accessTokenExpiresAt: z.coerce.date().optional().nullable(),
      refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
      scope: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const VerificationCreateInputSchema: z.ZodType<Prisma.VerificationCreateInput> =
  z
    .object({
      id: z.string(),
      identifier: z.string(),
      value: z.string(),
      expiresAt: z.coerce.date(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
    })
    .strict();

export const VerificationUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      identifier: z.string(),
      value: z.string(),
      expiresAt: z.coerce.date(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
    })
    .strict();

export const VerificationUpdateInputSchema: z.ZodType<Prisma.VerificationUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      value: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const VerificationUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      value: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const VerificationCreateManyInputSchema: z.ZodType<Prisma.VerificationCreateManyInput> =
  z
    .object({
      id: z.string(),
      identifier: z.string(),
      value: z.string(),
      expiresAt: z.coerce.date(),
      createdAt: z.coerce.date().optional().nullable(),
      updatedAt: z.coerce.date().optional().nullable(),
    })
    .strict();

export const VerificationUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      value: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const VerificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      identifier: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      value: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const JwksCreateInputSchema: z.ZodType<Prisma.JwksCreateInput> = z
  .object({
    id: z.string(),
    publicKey: z.string(),
    privateKey: z.string(),
    createdAt: z.coerce.date(),
  })
  .strict();

export const JwksUncheckedCreateInputSchema: z.ZodType<Prisma.JwksUncheckedCreateInput> =
  z
    .object({
      id: z.string(),
      publicKey: z.string(),
      privateKey: z.string(),
      createdAt: z.coerce.date(),
    })
    .strict();

export const JwksUpdateInputSchema: z.ZodType<Prisma.JwksUpdateInput> = z
  .object({
    id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    publicKey: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    privateKey: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
  })
  .strict();

export const JwksUncheckedUpdateInputSchema: z.ZodType<Prisma.JwksUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      publicKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      privateKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const JwksCreateManyInputSchema: z.ZodType<Prisma.JwksCreateManyInput> =
  z
    .object({
      id: z.string(),
      publicKey: z.string(),
      privateKey: z.string(),
      createdAt: z.coerce.date(),
    })
    .strict();

export const JwksUpdateManyMutationInputSchema: z.ZodType<Prisma.JwksUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      publicKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      privateKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const JwksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JwksUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      publicKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      privateKey: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const ContentMetadataListRelationFilterSchema: z.ZodType<Prisma.ContentMetadataListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ContentMetadataWhereInputSchema).optional(),
      some: z.lazy(() => ContentMetadataWhereInputSchema).optional(),
      none: z.lazy(() => ContentMetadataWhereInputSchema).optional(),
    })
    .strict();

export const ContentMetadataOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ContentMetadataOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const GenreCountOrderByAggregateInputSchema: z.ZodType<Prisma.GenreCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const GenreMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GenreMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const GenreMinOrderByAggregateInputSchema: z.ZodType<Prisma.GenreMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const ContentRatingCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentRatingCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ratingType: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentRatingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentRatingMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ratingType: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentRatingMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentRatingMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      ratingType: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.number().array().optional().nullable(),
    notIn: z.number().array().optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const ViewingHistoryListRelationFilterSchema: z.ZodType<Prisma.ViewingHistoryListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ViewingHistoryWhereInputSchema).optional(),
      some: z.lazy(() => ViewingHistoryWhereInputSchema).optional(),
      none: z.lazy(() => ViewingHistoryWhereInputSchema).optional(),
    })
    .strict();

export const WatchlistListRelationFilterSchema: z.ZodType<Prisma.WatchlistListRelationFilter> =
  z
    .object({
      every: z.lazy(() => WatchlistWhereInputSchema).optional(),
      some: z.lazy(() => WatchlistWhereInputSchema).optional(),
      none: z.lazy(() => WatchlistWhereInputSchema).optional(),
    })
    .strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z
  .object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  })
  .strict();

export const ViewingHistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ViewingHistoryOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const WatchlistOrderByRelationAggregateInputSchema: z.ZodType<Prisma.WatchlistOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      duration: z.lazy(() => SortOrderSchema).optional(),
      releaseDate: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      qualityId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContentAvgOrderByAggregateInput> =
  z
    .object({
      season: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      duration: z.lazy(() => SortOrderSchema).optional(),
      releaseDate: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      qualityId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      duration: z.lazy(() => SortOrderSchema).optional(),
      releaseDate: z.lazy(() => SortOrderSchema).optional(),
      season: z.lazy(() => SortOrderSchema).optional(),
      qualityId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContentSumOrderByAggregateInput> =
  z
    .object({
      season: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    })
    .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const SubtitleListRelationFilterSchema: z.ZodType<Prisma.SubtitleListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SubtitleWhereInputSchema).optional(),
      some: z.lazy(() => SubtitleWhereInputSchema).optional(),
      none: z.lazy(() => SubtitleWhereInputSchema).optional(),
    })
    .strict();

export const SubtitleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubtitleOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LanguageCountOrderByAggregateInputSchema: z.ZodType<Prisma.LanguageCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LanguageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LanguageMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LanguageMinOrderByAggregateInputSchema: z.ZodType<Prisma.LanguageMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LanguageScalarRelationFilterSchema: z.ZodType<Prisma.LanguageScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => LanguageWhereInputSchema).optional(),
      isNot: z.lazy(() => LanguageWhereInputSchema).optional(),
    })
    .strict();

export const SubtitleCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubtitleCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubtitleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubtitleMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubtitleMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubtitleMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const EnumContentTypeFilterSchema: z.ZodType<Prisma.EnumContentTypeFilter> =
  z
    .object({
      equals: z.lazy(() => ContentTypeSchema).optional(),
      in: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => NestedEnumContentTypeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const EnumAgeRatingFilterSchema: z.ZodType<Prisma.EnumAgeRatingFilter> =
  z
    .object({
      equals: z.lazy(() => AgeRatingSchema).optional(),
      in: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => NestedEnumAgeRatingFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const GenreNullableScalarRelationFilterSchema: z.ZodType<Prisma.GenreNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => GenreWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => GenreWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const ContentScalarRelationFilterSchema: z.ZodType<Prisma.ContentScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => ContentWhereInputSchema).optional(),
      isNot: z.lazy(() => ContentWhereInputSchema).optional(),
    })
    .strict();

export const LanguageNullableScalarRelationFilterSchema: z.ZodType<Prisma.LanguageNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => LanguageWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => LanguageWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const SubtitleNullableScalarRelationFilterSchema: z.ZodType<Prisma.SubtitleNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => SubtitleWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => SubtitleWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const ContentRatingNullableScalarRelationFilterSchema: z.ZodType<Prisma.ContentRatingNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => ContentRatingWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => ContentRatingWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const ContentMetadataCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMetadataCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      genreId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      subtitleId: z.lazy(() => SortOrderSchema).optional(),
      contentType: z.lazy(() => SortOrderSchema).optional(),
      contentRatingId: z.lazy(() => SortOrderSchema).optional(),
      ageRating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMetadataAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMetadataAvgOrderByAggregateInput> =
  z
    .object({
      rating: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMetadataMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMetadataMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      genreId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      subtitleId: z.lazy(() => SortOrderSchema).optional(),
      contentType: z.lazy(() => SortOrderSchema).optional(),
      contentRatingId: z.lazy(() => SortOrderSchema).optional(),
      ageRating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMetadataMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMetadataMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      title: z.lazy(() => SortOrderSchema).optional(),
      genreId: z.lazy(() => SortOrderSchema).optional(),
      rating: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      languageId: z.lazy(() => SortOrderSchema).optional(),
      subtitleId: z.lazy(() => SortOrderSchema).optional(),
      contentType: z.lazy(() => SortOrderSchema).optional(),
      contentRatingId: z.lazy(() => SortOrderSchema).optional(),
      ageRating: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMetadataSumOrderByAggregateInputSchema: z.ZodType<Prisma.ContentMetadataSumOrderByAggregateInput> =
  z
    .object({
      rating: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const EnumContentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumContentTypeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => ContentTypeSchema).optional(),
      in: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => NestedEnumContentTypeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
    })
    .strict();

export const EnumAgeRatingWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAgeRatingWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => AgeRatingSchema).optional(),
      in: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => NestedEnumAgeRatingWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumAgeRatingFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumAgeRatingFilterSchema).optional(),
    })
    .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ProfileListRelationFilterSchema: z.ZodType<Prisma.ProfileListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ProfileWhereInputSchema).optional(),
      some: z.lazy(() => ProfileWhereInputSchema).optional(),
      none: z.lazy(() => ProfileWhereInputSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashListRelationFilterSchema: z.ZodType<Prisma.PreviousPasswordHashListRelationFilter> =
  z
    .object({
      every: z.lazy(() => PreviousPasswordHashWhereInputSchema).optional(),
      some: z.lazy(() => PreviousPasswordHashWhereInputSchema).optional(),
      none: z.lazy(() => PreviousPasswordHashWhereInputSchema).optional(),
    })
    .strict();

export const SubscriptionListRelationFilterSchema: z.ZodType<Prisma.SubscriptionListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SubscriptionWhereInputSchema).optional(),
      some: z.lazy(() => SubscriptionWhereInputSchema).optional(),
      none: z.lazy(() => SubscriptionWhereInputSchema).optional(),
    })
    .strict();

export const ProfileOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProfileOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PreviousPasswordHashOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SubscriptionOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NetflixAccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.NetflixAccountCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      activated: z.lazy(() => SortOrderSchema).optional(),
      blockedUntil: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NetflixAccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NetflixAccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      activated: z.lazy(() => SortOrderSchema).optional(),
      blockedUntil: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const NetflixAccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.NetflixAccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      activated: z.lazy(() => SortOrderSchema).optional(),
      blockedUntil: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    })
    .strict();

export const NetflixAccountScalarRelationFilterSchema: z.ZodType<Prisma.NetflixAccountScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
      isNot: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashCountOrderByAggregateInputSchema: z.ZodType<Prisma.PreviousPasswordHashCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      passwordHash: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PreviousPasswordHashMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      passwordHash: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PreviousPasswordHashMinOrderByAggregateInputSchema: z.ZodType<Prisma.PreviousPasswordHashMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      passwordHash: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      profileImage: z.lazy(() => SortOrderSchema).optional(),
      dateOfBirth: z.lazy(() => SortOrderSchema).optional(),
      language: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const SubscriptionTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionTypeCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionTypeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionTypeAvgOrderByAggregateInput> =
  z
    .object({
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionTypeMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionTypeMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionTypeSumOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionTypeSumOrderByAggregateInput> =
  z
    .object({
      priceInEuroCents: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const SubscriptionTypeScalarRelationFilterSchema: z.ZodType<Prisma.SubscriptionTypeScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => SubscriptionTypeWhereInputSchema).optional(),
      isNot: z.lazy(() => SubscriptionTypeWhereInputSchema).optional(),
    })
    .strict();

export const NetflixAccountNullableScalarRelationFilterSchema: z.ZodType<Prisma.NetflixAccountNullableScalarRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => NetflixAccountWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => NetflixAccountWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const InvoiceListRelationFilterSchema: z.ZodType<Prisma.InvoiceListRelationFilter> =
  z
    .object({
      every: z.lazy(() => InvoiceWhereInputSchema).optional(),
      some: z.lazy(() => InvoiceWhereInputSchema).optional(),
      none: z.lazy(() => InvoiceWhereInputSchema).optional(),
    })
    .strict();

export const InvoiceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvoiceOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      beginDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      subscriptionTypeId: z.lazy(() => SortOrderSchema).optional(),
      referralId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      beginDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      subscriptionTypeId: z.lazy(() => SortOrderSchema).optional(),
      referralId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SubscriptionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SubscriptionMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      beginDate: z.lazy(() => SortOrderSchema).optional(),
      endDate: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      subscriptionTypeId: z.lazy(() => SortOrderSchema).optional(),
      referralId: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const EnumPaymentStatusFilterSchema: z.ZodType<Prisma.EnumPaymentStatusFilter> =
  z
    .object({
      equals: z.lazy(() => PaymentStatusSchema).optional(),
      in: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => NestedEnumPaymentStatusFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionScalarRelationFilterSchema: z.ZodType<Prisma.SubscriptionScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => SubscriptionWhereInputSchema).optional(),
      isNot: z.lazy(() => SubscriptionWhereInputSchema).optional(),
    })
    .strict();

export const InvoiceCountOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      subscriptionId: z.lazy(() => SortOrderSchema).optional(),
      isPaid: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const InvoiceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      subscriptionId: z.lazy(() => SortOrderSchema).optional(),
      isPaid: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const InvoiceMinOrderByAggregateInputSchema: z.ZodType<Prisma.InvoiceMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      subscriptionId: z.lazy(() => SortOrderSchema).optional(),
      isPaid: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const EnumPaymentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.EnumPaymentStatusWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => PaymentStatusSchema).optional(),
      in: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
    })
    .strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const ProfileScalarRelationFilterSchema: z.ZodType<Prisma.ProfileScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => ProfileWhereInputSchema).optional(),
      isNot: z.lazy(() => ProfileWhereInputSchema).optional(),
    })
    .strict();

export const ViewingHistoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.ViewingHistoryCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      watchDate: z.lazy(() => SortOrderSchema).optional(),
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ViewingHistoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ViewingHistoryAvgOrderByAggregateInput> =
  z
    .object({
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ViewingHistoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ViewingHistoryMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      watchDate: z.lazy(() => SortOrderSchema).optional(),
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ViewingHistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.ViewingHistoryMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
      watchDate: z.lazy(() => SortOrderSchema).optional(),
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ViewingHistorySumOrderByAggregateInputSchema: z.ZodType<Prisma.ViewingHistorySumOrderByAggregateInput> =
  z
    .object({
      progressPercentage: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedFloatWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
      _min: z.lazy(() => NestedFloatFilterSchema).optional(),
      _max: z.lazy(() => NestedFloatFilterSchema).optional(),
    })
    .strict();

export const WatchlistProfileIdContentIdCompoundUniqueInputSchema: z.ZodType<Prisma.WatchlistProfileIdContentIdCompoundUniqueInput> =
  z
    .object({
      profileId: z.string(),
      contentId: z.string(),
    })
    .strict();

export const WatchlistCountOrderByAggregateInputSchema: z.ZodType<Prisma.WatchlistCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const WatchlistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.WatchlistMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const WatchlistMinOrderByAggregateInputSchema: z.ZodType<Prisma.WatchlistMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      profileId: z.lazy(() => SortOrderSchema).optional(),
      contentId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SessionWhereInputSchema).optional(),
      some: z.lazy(() => SessionWhereInputSchema).optional(),
      none: z.lazy(() => SessionWhereInputSchema).optional(),
    })
    .strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> =
  z
    .object({
      every: z.lazy(() => AccountWhereInputSchema).optional(),
      some: z.lazy(() => AccountWhereInputSchema).optional(),
      none: z.lazy(() => AccountWhereInputSchema).optional(),
    })
    .strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      emailVerified: z.lazy(() => SortOrderSchema).optional(),
      image: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> =
  z
    .object({
      is: z.lazy(() => UserWhereInputSchema).optional(),
      isNot: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      userAgent: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      userAgent: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      ipAddress: z.lazy(() => SortOrderSchema).optional(),
      userAgent: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z.lazy(() => SortOrderSchema).optional(),
      refreshToken: z.lazy(() => SortOrderSchema).optional(),
      idToken: z.lazy(() => SortOrderSchema).optional(),
      accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z.lazy(() => SortOrderSchema).optional(),
      refreshToken: z.lazy(() => SortOrderSchema).optional(),
      idToken: z.lazy(() => SortOrderSchema).optional(),
      accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      accountId: z.lazy(() => SortOrderSchema).optional(),
      providerId: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      accessToken: z.lazy(() => SortOrderSchema).optional(),
      refreshToken: z.lazy(() => SortOrderSchema).optional(),
      idToken: z.lazy(() => SortOrderSchema).optional(),
      accessTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      refreshTokenExpiresAt: z.lazy(() => SortOrderSchema).optional(),
      scope: z.lazy(() => SortOrderSchema).optional(),
      password: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const VerificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      identifier: z.lazy(() => SortOrderSchema).optional(),
      value: z.lazy(() => SortOrderSchema).optional(),
      expiresAt: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const JwksCountOrderByAggregateInputSchema: z.ZodType<Prisma.JwksCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicKey: z.lazy(() => SortOrderSchema).optional(),
      privateKey: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const JwksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JwksMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicKey: z.lazy(() => SortOrderSchema).optional(),
      privateKey: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const JwksMinOrderByAggregateInputSchema: z.ZodType<Prisma.JwksMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      publicKey: z.lazy(() => SortOrderSchema).optional(),
      privateKey: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ContentMetadataCreateNestedManyWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataCreateNestedManyWithoutGenreInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyGenreInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateNestedManyWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateNestedManyWithoutGenreInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyGenreInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const ContentMetadataUpdateManyWithoutGenreNestedInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithoutGenreNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ContentMetadataUpsertWithWhereUniqueWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpsertWithWhereUniqueWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyGenreInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateWithWhereUniqueWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateWithWhereUniqueWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateManyWithWhereWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutGenreNestedInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutGenreNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutGenreInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ContentMetadataUpsertWithWhereUniqueWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpsertWithWhereUniqueWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyGenreInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateWithWhereUniqueWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateWithWhereUniqueWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutGenreInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateManyWithWhereWithoutGenreInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateNestedManyWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataCreateNestedManyWithoutContentRatingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
          z
            .lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema)
            .array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentRatingInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateNestedManyWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateNestedManyWithoutContentRatingInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
          z
            .lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema)
            .array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentRatingInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUpdateManyWithoutContentRatingNestedInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithoutContentRatingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
          z
            .lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema)
            .array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentRatingInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateManyWithWhereWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutContentRatingNestedInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutContentRatingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
          z
            .lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema)
            .array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataCreateOrConnectWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentRatingInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateManyWithWhereWithoutContentRatingInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutContentRatingInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.WatchlistCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutContentInputSchema),
          z.lazy(() => WatchlistCreateWithoutContentInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedCreateNestedManyWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUncheckedCreateNestedManyWithoutContentInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutContentInputSchema),
          z.lazy(() => WatchlistCreateWithoutContentInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyContentInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional().nullable(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
    })
    .strict();

export const ContentMetadataUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ContentMetadataUpsertWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutContentInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateManyWithWhereWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ViewingHistoryUpsertWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpsertWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpdateWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateManyWithWhereWithoutContentInputSchema,
          ),
          z
            .lazy(
              () => ViewingHistoryUpdateManyWithWhereWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.WatchlistUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutContentInputSchema),
          z.lazy(() => WatchlistCreateWithoutContentInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => WatchlistUpsertWithWhereUniqueWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpsertWithWhereUniqueWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => WatchlistUpdateWithWhereUniqueWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpdateWithWhereUniqueWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WatchlistUpdateManyWithWhereWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpdateManyWithWhereWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutContentInputSchema).array(),
          z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ContentMetadataCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ContentMetadataUpsertWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutContentInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUpdateManyWithWhereWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ViewingHistoryUpsertWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpsertWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateWithWhereUniqueWithoutContentInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpdateWithWhereUniqueWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateManyWithWhereWithoutContentInputSchema,
          ),
          z
            .lazy(
              () => ViewingHistoryUpdateManyWithWhereWithoutContentInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateManyWithoutContentNestedInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateManyWithoutContentNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutContentInputSchema),
          z.lazy(() => WatchlistCreateWithoutContentInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => WatchlistUpsertWithWhereUniqueWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpsertWithWhereUniqueWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyContentInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => WatchlistUpdateWithWhereUniqueWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpdateWithWhereUniqueWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WatchlistUpdateManyWithWhereWithoutContentInputSchema),
          z
            .lazy(() => WatchlistUpdateManyWithWhereWithoutContentInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleCreateNestedManyWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleCreateNestedManyWithoutLanguageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema).array(),
          z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubtitleCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateNestedManyWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataCreateNestedManyWithoutLanguageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleUncheckedCreateNestedManyWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUncheckedCreateNestedManyWithoutLanguageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema).array(),
          z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubtitleCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateNestedManyWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateNestedManyWithoutLanguageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleUpdateManyWithoutLanguageNestedInputSchema: z.ZodType<Prisma.SubtitleUpdateManyWithoutLanguageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema).array(),
          z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SubtitleUpsertWithWhereUniqueWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpsertWithWhereUniqueWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubtitleCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SubtitleUpdateWithWhereUniqueWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpdateWithWhereUniqueWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SubtitleUpdateManyWithWhereWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpdateManyWithWhereWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubtitleScalarWhereInputSchema),
          z.lazy(() => SubtitleScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUpdateManyWithoutLanguageNestedInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithoutLanguageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateManyWithoutLanguageNestedInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateManyWithoutLanguageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
          z.lazy(() => SubtitleCreateWithoutLanguageInputSchema).array(),
          z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleCreateOrConnectWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SubtitleUpsertWithWhereUniqueWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpsertWithWhereUniqueWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubtitleCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubtitleWhereUniqueInputSchema),
          z.lazy(() => SubtitleWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SubtitleUpdateWithWhereUniqueWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpdateWithWhereUniqueWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SubtitleUpdateManyWithWhereWithoutLanguageInputSchema),
          z
            .lazy(() => SubtitleUpdateManyWithWhereWithoutLanguageInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubtitleScalarWhereInputSchema),
          z.lazy(() => SubtitleScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutLanguageNestedInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutLanguageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManyLanguageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutLanguageInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutLanguageInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageCreateNestedOneWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageCreateNestedOneWithoutSubtitleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutSubtitleInputSchema),
          z.lazy(() => LanguageUncheckedCreateWithoutSubtitleInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LanguageCreateOrConnectWithoutSubtitleInputSchema)
        .optional(),
      connect: z.lazy(() => LanguageWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ContentMetadataCreateNestedManyWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataCreateNestedManyWithoutSubtitleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManySubtitleInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateNestedManyWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateNestedManyWithoutSubtitleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManySubtitleInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageUpdateOneRequiredWithoutSubtitleNestedInputSchema: z.ZodType<Prisma.LanguageUpdateOneRequiredWithoutSubtitleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutSubtitleInputSchema),
          z.lazy(() => LanguageUncheckedCreateWithoutSubtitleInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LanguageCreateOrConnectWithoutSubtitleInputSchema)
        .optional(),
      upsert: z.lazy(() => LanguageUpsertWithoutSubtitleInputSchema).optional(),
      connect: z.lazy(() => LanguageWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => LanguageUpdateToOneWithWhereWithoutSubtitleInputSchema),
          z.lazy(() => LanguageUpdateWithoutSubtitleInputSchema),
          z.lazy(() => LanguageUncheckedUpdateWithoutSubtitleInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUpdateManyWithoutSubtitleNestedInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithoutSubtitleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManySubtitleInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutSubtitleNestedInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutSubtitleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
          z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema).array(),
          z.lazy(
            () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () => ContentMetadataCreateOrConnectWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ContentMetadataCreateManySubtitleInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ContentMetadataWhereUniqueInputSchema),
          z.lazy(() => ContentMetadataWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ContentMetadataUpdateManyWithWhereWithoutSubtitleInputSchema,
          ),
          z
            .lazy(
              () =>
                ContentMetadataUpdateManyWithWhereWithoutSubtitleInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GenreCreateNestedOneWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreCreateNestedOneWithoutContentMetadataInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenreCreateWithoutContentMetadataInputSchema),
          z.lazy(() => GenreUncheckedCreateWithoutContentMetadataInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GenreCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      connect: z.lazy(() => GenreWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ContentCreateNestedOneWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentCreateNestedOneWithoutContentMetadataInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutContentMetadataInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutContentMetadataInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
    })
    .strict();

export const LanguageCreateNestedOneWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageCreateNestedOneWithoutContentMetadataInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => LanguageUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LanguageCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      connect: z.lazy(() => LanguageWhereUniqueInputSchema).optional(),
    })
    .strict();

export const SubtitleCreateNestedOneWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleCreateNestedOneWithoutContentMetadataInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => SubtitleUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubtitleCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      connect: z.lazy(() => SubtitleWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ContentRatingCreateNestedOneWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingCreateNestedOneWithoutContentMetadataInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentRatingCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => ContentRatingUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ContentRatingCreateOrConnectWithoutContentMetadataInputSchema,
        )
        .optional(),
      connect: z.lazy(() => ContentRatingWhereUniqueInputSchema).optional(),
    })
    .strict();

export const EnumContentTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumContentTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => ContentTypeSchema).optional(),
    })
    .strict();

export const EnumAgeRatingFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumAgeRatingFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => AgeRatingSchema).optional(),
    })
    .strict();

export const GenreUpdateOneWithoutContentMetadataNestedInputSchema: z.ZodType<Prisma.GenreUpdateOneWithoutContentMetadataNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => GenreCreateWithoutContentMetadataInputSchema),
          z.lazy(() => GenreUncheckedCreateWithoutContentMetadataInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GenreCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      upsert: z
        .lazy(() => GenreUpsertWithoutContentMetadataInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => GenreWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => GenreWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => GenreWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => GenreUpdateToOneWithWhereWithoutContentMetadataInputSchema,
          ),
          z.lazy(() => GenreUpdateWithoutContentMetadataInputSchema),
          z.lazy(() => GenreUncheckedUpdateWithoutContentMetadataInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema: z.ZodType<Prisma.ContentUpdateOneRequiredWithoutContentMetadataNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutContentMetadataInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutContentMetadataInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ContentUpsertWithoutContentMetadataInputSchema)
        .optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ContentUpdateToOneWithWhereWithoutContentMetadataInputSchema,
          ),
          z.lazy(() => ContentUpdateWithoutContentMetadataInputSchema),
          z.lazy(() => ContentUncheckedUpdateWithoutContentMetadataInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LanguageUpdateOneWithoutContentMetadataNestedInputSchema: z.ZodType<Prisma.LanguageUpdateOneWithoutContentMetadataNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LanguageCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => LanguageUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LanguageCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      upsert: z
        .lazy(() => LanguageUpsertWithoutContentMetadataInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => LanguageWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => LanguageWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => LanguageWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => LanguageUpdateToOneWithWhereWithoutContentMetadataInputSchema,
          ),
          z.lazy(() => LanguageUpdateWithoutContentMetadataInputSchema),
          z.lazy(
            () => LanguageUncheckedUpdateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubtitleUpdateOneWithoutContentMetadataNestedInputSchema: z.ZodType<Prisma.SubtitleUpdateOneWithoutContentMetadataNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubtitleCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => SubtitleUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubtitleCreateOrConnectWithoutContentMetadataInputSchema)
        .optional(),
      upsert: z
        .lazy(() => SubtitleUpsertWithoutContentMetadataInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => SubtitleWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => SubtitleWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => SubtitleWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => SubtitleUpdateToOneWithWhereWithoutContentMetadataInputSchema,
          ),
          z.lazy(() => SubtitleUpdateWithoutContentMetadataInputSchema),
          z.lazy(
            () => SubtitleUncheckedUpdateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema: z.ZodType<Prisma.ContentRatingUpdateOneWithoutContentMetadataNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentRatingCreateWithoutContentMetadataInputSchema),
          z.lazy(
            () => ContentRatingUncheckedCreateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ContentRatingCreateOrConnectWithoutContentMetadataInputSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => ContentRatingUpsertWithoutContentMetadataInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => ContentRatingWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => ContentRatingWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => ContentRatingWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ContentRatingUpdateToOneWithWhereWithoutContentMetadataInputSchema,
          ),
          z.lazy(() => ContentRatingUpdateWithoutContentMetadataInputSchema),
          z.lazy(
            () => ContentRatingUncheckedUpdateWithoutContentMetadataInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.ProfileCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProfileCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
          z
            .lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema)
            .array(),
          z.lazy(
            () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PreviousPasswordHashCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateNestedManyWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutReferredByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyReferredByInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProfileUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProfileCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
          z
            .lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema)
            .array(),
          z.lazy(
            () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PreviousPasswordHashCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateNestedManyWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutAccountInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyAccountInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateNestedManyWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutReferredByInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyReferredByInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
  z
    .object({
      set: z.boolean().optional(),
    })
    .strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional().nullable(),
    })
    .strict();

export const ProfileUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.ProfileUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ProfileUpsertWithWhereUniqueWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpsertWithWhereUniqueWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProfileCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ProfileUpdateWithWhereUniqueWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpdateWithWhereUniqueWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ProfileUpdateManyWithWhereWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpdateManyWithWhereWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProfileScalarWhereInputSchema),
          z.lazy(() => ProfileScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
          z
            .lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema)
            .array(),
          z.lazy(
            () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PreviousPasswordHashCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpdateManyWithWhereWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpdateManyWithWhereWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema),
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SubscriptionUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriptionUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SubscriptionUpdateManyWithWhereWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateManyWithWhereWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUpdateManyWithoutReferredByNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutReferredByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SubscriptionUpsertWithWhereUniqueWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpsertWithWhereUniqueWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyReferredByInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriptionUpdateWithWhereUniqueWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateWithWhereUniqueWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SubscriptionUpdateManyWithWhereWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateManyWithWhereWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateWithoutAccountInputSchema).array(),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema),
          z.lazy(() => ProfileCreateOrConnectWithoutAccountInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ProfileUpsertWithWhereUniqueWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpsertWithWhereUniqueWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProfileCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProfileWhereUniqueInputSchema),
          z.lazy(() => ProfileWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ProfileUpdateWithWhereUniqueWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpdateWithWhereUniqueWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ProfileUpdateManyWithWhereWithoutAccountInputSchema),
          z
            .lazy(() => ProfileUpdateManyWithWhereWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProfileScalarWhereInputSchema),
          z.lazy(() => ProfileScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
          z
            .lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema)
            .array(),
          z.lazy(
            () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PreviousPasswordHashCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
          z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PreviousPasswordHashUpdateManyWithWhereWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () =>
                PreviousPasswordHashUpdateManyWithWhereWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema),
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutAccountNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutAccountNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
          z.lazy(() => SubscriptionCreateWithoutAccountInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutAccountInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SubscriptionUpsertWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpsertWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyAccountInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriptionUpdateWithWhereUniqueWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateWithWhereUniqueWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SubscriptionUpdateManyWithWhereWithoutAccountInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateManyWithWhereWithoutAccountInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutReferredByNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutReferredByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
          z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema).array(),
          z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema),
          z
            .lazy(() => SubscriptionCreateOrConnectWithoutReferredByInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => SubscriptionUpsertWithWhereUniqueWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpsertWithWhereUniqueWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManyReferredByInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriptionUpdateWithWhereUniqueWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateWithWhereUniqueWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SubscriptionUpdateManyWithWhereWithoutReferredByInputSchema,
          ),
          z
            .lazy(
              () => SubscriptionUpdateManyWithWhereWithoutReferredByInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountCreateNestedOneWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountCreateNestedOneWithoutPreviousPasswordHashInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => NetflixAccountCreateWithoutPreviousPasswordHashInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            NetflixAccountCreateOrConnectWithoutPreviousPasswordHashInputSchema,
        )
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export const NetflixAccountUpdateOneRequiredWithoutPreviousPasswordHashNestedInputSchema: z.ZodType<Prisma.NetflixAccountUpdateOneRequiredWithoutPreviousPasswordHashNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => NetflixAccountCreateWithoutPreviousPasswordHashInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            NetflixAccountCreateOrConnectWithoutPreviousPasswordHashInputSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => NetflixAccountUpsertWithoutPreviousPasswordHashInputSchema)
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              NetflixAccountUpdateToOneWithWhereWithoutPreviousPasswordHashInputSchema,
          ),
          z.lazy(
            () => NetflixAccountUpdateWithoutPreviousPasswordHashInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedUpdateWithoutPreviousPasswordHashInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountCreateNestedOneWithoutProfileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NetflixAccountCreateWithoutProfileInputSchema),
          z.lazy(() => NetflixAccountUncheckedCreateWithoutProfileInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => NetflixAccountCreateOrConnectWithoutProfileInputSchema)
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ViewingHistoryCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryCreateNestedManyWithoutProfileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyProfileInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistCreateNestedManyWithoutProfileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyProfileInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedCreateNestedManyWithoutProfileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyProfileInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUncheckedCreateNestedManyWithoutProfileInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyProfileInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountUpdateOneRequiredWithoutProfileNestedInputSchema: z.ZodType<Prisma.NetflixAccountUpdateOneRequiredWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NetflixAccountCreateWithoutProfileInputSchema),
          z.lazy(() => NetflixAccountUncheckedCreateWithoutProfileInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => NetflixAccountCreateOrConnectWithoutProfileInputSchema)
        .optional(),
      upsert: z
        .lazy(() => NetflixAccountUpsertWithoutProfileInputSchema)
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => NetflixAccountUpdateToOneWithWhereWithoutProfileInputSchema,
          ),
          z.lazy(() => NetflixAccountUpdateWithoutProfileInputSchema),
          z.lazy(() => NetflixAccountUncheckedUpdateWithoutProfileInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ViewingHistoryUpsertWithWhereUniqueWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpsertWithWhereUniqueWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyProfileInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateWithWhereUniqueWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpdateWithWhereUniqueWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateManyWithWhereWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () => ViewingHistoryUpdateManyWithWhereWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.WatchlistUpdateManyWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => WatchlistUpsertWithWhereUniqueWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpsertWithWhereUniqueWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyProfileInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => WatchlistUpdateWithWhereUniqueWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpdateWithWhereUniqueWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WatchlistUpdateManyWithWhereWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpdateManyWithWhereWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateManyWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
          z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema).array(),
          z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => ViewingHistoryCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ViewingHistoryUpsertWithWhereUniqueWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpsertWithWhereUniqueWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ViewingHistoryCreateManyProfileInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
          z.lazy(() => ViewingHistoryWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateWithWhereUniqueWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () =>
                ViewingHistoryUpdateWithWhereUniqueWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ViewingHistoryUpdateManyWithWhereWithoutProfileInputSchema,
          ),
          z
            .lazy(
              () => ViewingHistoryUpdateManyWithWhereWithoutProfileInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateManyWithoutProfileNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
          z.lazy(() => WatchlistCreateWithoutProfileInputSchema).array(),
          z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistCreateOrConnectWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => WatchlistUpsertWithWhereUniqueWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpsertWithWhereUniqueWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => WatchlistCreateManyProfileInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => WatchlistWhereUniqueInputSchema),
          z.lazy(() => WatchlistWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => WatchlistUpdateWithWhereUniqueWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpdateWithWhereUniqueWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => WatchlistUpdateManyWithWhereWithoutProfileInputSchema),
          z
            .lazy(() => WatchlistUpdateManyWithWhereWithoutProfileInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateNestedManyWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedManyWithoutSubscriptionTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
          z
            .lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema)
            .array(),
          z.lazy(
            () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManySubscriptionTypeInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateNestedManyWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateNestedManyWithoutSubscriptionTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
          z
            .lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema)
            .array(),
          z.lazy(
            () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManySubscriptionTypeInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const SubscriptionUpdateManyWithoutSubscriptionTypeNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithoutSubscriptionTypeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
          z
            .lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema)
            .array(),
          z.lazy(
            () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManySubscriptionTypeInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeNestedInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
          z
            .lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema)
            .array(),
          z.lazy(
            () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriptionCreateManySubscriptionTypeInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriptionWhereUniqueInputSchema),
          z.lazy(() => SubscriptionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInputSchema,
          ),
          z
            .lazy(
              () =>
                SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountCreateNestedOneWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountCreateNestedOneWithoutSubscriptionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NetflixAccountCreateWithoutSubscriptionInputSchema),
          z.lazy(
            () => NetflixAccountUncheckedCreateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => NetflixAccountCreateOrConnectWithoutSubscriptionInputSchema)
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export const SubscriptionTypeCreateNestedOneWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeCreateNestedOneWithoutSubscriptionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionTypeCreateWithoutSubscriptionInputSchema),
          z.lazy(
            () => SubscriptionTypeUncheckedCreateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriptionTypeCreateOrConnectWithoutSubscriptionInputSchema,
        )
        .optional(),
      connect: z.lazy(() => SubscriptionTypeWhereUniqueInputSchema).optional(),
    })
    .strict();

export const NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => NetflixAccountCreateWithoutReferredSubscriptionsInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            NetflixAccountCreateOrConnectWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
    })
    .strict();

export const InvoiceCreateNestedManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceCreateNestedManyWithoutSubscriptionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManySubscriptionInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedCreateNestedManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutSubscriptionInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManySubscriptionInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => NetflixAccountCreateWithoutSubscriptionInputSchema),
          z.lazy(
            () => NetflixAccountUncheckedCreateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => NetflixAccountCreateOrConnectWithoutSubscriptionInputSchema)
        .optional(),
      upsert: z
        .lazy(() => NetflixAccountUpsertWithoutSubscriptionInputSchema)
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              NetflixAccountUpdateToOneWithWhereWithoutSubscriptionInputSchema,
          ),
          z.lazy(() => NetflixAccountUpdateWithoutSubscriptionInputSchema),
          z.lazy(
            () => NetflixAccountUncheckedUpdateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionTypeCreateWithoutSubscriptionInputSchema),
          z.lazy(
            () => SubscriptionTypeUncheckedCreateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => SubscriptionTypeCreateOrConnectWithoutSubscriptionInputSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SubscriptionTypeUpsertWithoutSubscriptionInputSchema)
        .optional(),
      connect: z.lazy(() => SubscriptionTypeWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriptionTypeUpdateToOneWithWhereWithoutSubscriptionInputSchema,
          ),
          z.lazy(() => SubscriptionTypeUpdateWithoutSubscriptionInputSchema),
          z.lazy(
            () => SubscriptionTypeUncheckedUpdateWithoutSubscriptionInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInputSchema: z.ZodType<Prisma.NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => NetflixAccountCreateWithoutReferredSubscriptionsInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInputSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            NetflixAccountCreateOrConnectWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => NetflixAccountUpsertWithoutReferredSubscriptionsInputSchema)
        .optional(),
      disconnect: z
        .union([z.boolean(), z.lazy(() => NetflixAccountWhereInputSchema)])
        .optional(),
      delete: z
        .union([z.boolean(), z.lazy(() => NetflixAccountWhereInputSchema)])
        .optional(),
      connect: z.lazy(() => NetflixAccountWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              NetflixAccountUpdateToOneWithWhereWithoutReferredSubscriptionsInputSchema,
          ),
          z.lazy(
            () => NetflixAccountUpdateWithoutReferredSubscriptionsInputSchema,
          ),
          z.lazy(
            () =>
              NetflixAccountUncheckedUpdateWithoutReferredSubscriptionsInputSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUpdateManyWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithoutSubscriptionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => InvoiceUpsertWithWhereUniqueWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpsertWithWhereUniqueWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManySubscriptionInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InvoiceUpdateWithWhereUniqueWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateWithWhereUniqueWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceUpdateManyWithWhereWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateManyWithWhereWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputSchema),
          z.lazy(() => InvoiceScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
          z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema).array(),
          z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema),
          z
            .lazy(() => InvoiceCreateOrConnectWithoutSubscriptionInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => InvoiceUpsertWithWhereUniqueWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpsertWithWhereUniqueWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => InvoiceCreateManySubscriptionInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => InvoiceWhereUniqueInputSchema),
          z.lazy(() => InvoiceWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InvoiceUpdateWithWhereUniqueWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateWithWhereUniqueWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => InvoiceUpdateManyWithWhereWithoutSubscriptionInputSchema,
          ),
          z
            .lazy(
              () => InvoiceUpdateManyWithWhereWithoutSubscriptionInputSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputSchema),
          z.lazy(() => InvoiceScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateNestedOneWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutInvoiceInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutInvoiceInputSchema),
          z.lazy(() => SubscriptionUncheckedCreateWithoutInvoiceInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubscriptionCreateOrConnectWithoutInvoiceInputSchema)
        .optional(),
      connect: z.lazy(() => SubscriptionWhereUniqueInputSchema).optional(),
    })
    .strict();

export const EnumPaymentStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumPaymentStatusFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => PaymentStatusSchema).optional(),
    })
    .strict();

export const SubscriptionUpdateOneRequiredWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.SubscriptionUpdateOneRequiredWithoutInvoiceNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriptionCreateWithoutInvoiceInputSchema),
          z.lazy(() => SubscriptionUncheckedCreateWithoutInvoiceInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SubscriptionCreateOrConnectWithoutInvoiceInputSchema)
        .optional(),
      upsert: z
        .lazy(() => SubscriptionUpsertWithoutInvoiceInputSchema)
        .optional(),
      connect: z.lazy(() => SubscriptionWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriptionUpdateToOneWithWhereWithoutInvoiceInputSchema,
          ),
          z.lazy(() => SubscriptionUpdateWithoutInvoiceInputSchema),
          z.lazy(() => SubscriptionUncheckedUpdateWithoutInvoiceInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateNestedOneWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutViewingHistoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutViewingHistoryInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProfileCreateOrConnectWithoutViewingHistoryInputSchema)
        .optional(),
      connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ContentCreateNestedOneWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentCreateNestedOneWithoutViewingHistoryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutViewingHistoryInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutViewingHistoryInputSchema)
        .optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
    })
    .strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const ProfileUpdateOneRequiredWithoutViewingHistoryNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutViewingHistoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutViewingHistoryInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProfileCreateOrConnectWithoutViewingHistoryInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ProfileUpsertWithoutViewingHistoryInputSchema)
        .optional(),
      connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ProfileUpdateToOneWithWhereWithoutViewingHistoryInputSchema,
          ),
          z.lazy(() => ProfileUpdateWithoutViewingHistoryInputSchema),
          z.lazy(() => ProfileUncheckedUpdateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentUpdateOneRequiredWithoutViewingHistoryNestedInputSchema: z.ZodType<Prisma.ContentUpdateOneRequiredWithoutViewingHistoryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutViewingHistoryInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutViewingHistoryInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ContentUpsertWithoutViewingHistoryInputSchema)
        .optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => ContentUpdateToOneWithWhereWithoutViewingHistoryInputSchema,
          ),
          z.lazy(() => ContentUpdateWithoutViewingHistoryInputSchema),
          z.lazy(() => ContentUncheckedUpdateWithoutViewingHistoryInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateNestedOneWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutWatchlistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutWatchlistInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutWatchlistInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProfileCreateOrConnectWithoutWatchlistInputSchema)
        .optional(),
      connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ContentCreateNestedOneWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentCreateNestedOneWithoutWatchlistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutWatchlistInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutWatchlistInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutWatchlistInputSchema)
        .optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ProfileUpdateOneRequiredWithoutWatchlistNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutWatchlistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProfileCreateWithoutWatchlistInputSchema),
          z.lazy(() => ProfileUncheckedCreateWithoutWatchlistInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProfileCreateOrConnectWithoutWatchlistInputSchema)
        .optional(),
      upsert: z.lazy(() => ProfileUpsertWithoutWatchlistInputSchema).optional(),
      connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProfileUpdateToOneWithWhereWithoutWatchlistInputSchema),
          z.lazy(() => ProfileUpdateWithoutWatchlistInputSchema),
          z.lazy(() => ProfileUncheckedUpdateWithoutWatchlistInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentUpdateOneRequiredWithoutWatchlistNestedInputSchema: z.ZodType<Prisma.ContentUpdateOneRequiredWithoutWatchlistNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ContentCreateWithoutWatchlistInputSchema),
          z.lazy(() => ContentUncheckedCreateWithoutWatchlistInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ContentCreateOrConnectWithoutWatchlistInputSchema)
        .optional(),
      upsert: z.lazy(() => ContentUpsertWithoutWatchlistInputSchema).optional(),
      connect: z.lazy(() => ContentWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ContentUpdateToOneWithWhereWithoutWatchlistInputSchema),
          z.lazy(() => ContentUpdateWithoutWatchlistInputSchema),
          z.lazy(() => ContentUncheckedUpdateWithoutWatchlistInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SessionCreateWithoutUserInputSchema),
          z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SessionCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SessionWhereUniqueInputSchema),
          z.lazy(() => SessionWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AccountCreateWithoutUserInputSchema),
          z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AccountCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AccountWhereUniqueInputSchema),
          z.lazy(() => AccountWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutSessionsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),
          z.lazy(() => UserUpdateWithoutSessionsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutAccountsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),
          z.lazy(() => UserUpdateWithoutAccountsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    })
    .strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const NestedEnumContentTypeFilterSchema: z.ZodType<Prisma.NestedEnumContentTypeFilter> =
  z
    .object({
      equals: z.lazy(() => ContentTypeSchema).optional(),
      in: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => NestedEnumContentTypeFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumAgeRatingFilterSchema: z.ZodType<Prisma.NestedEnumAgeRatingFilter> =
  z
    .object({
      equals: z.lazy(() => AgeRatingSchema).optional(),
      in: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => NestedEnumAgeRatingFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumContentTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumContentTypeWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => ContentTypeSchema).optional(),
      in: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => ContentTypeSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => NestedEnumContentTypeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumContentTypeFilterSchema).optional(),
    })
    .strict();

export const NestedEnumAgeRatingWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumAgeRatingWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => AgeRatingSchema).optional(),
      in: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => AgeRatingSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => NestedEnumAgeRatingWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumAgeRatingFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumAgeRatingFilterSchema).optional(),
    })
    .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
  .object({
    equals: z.boolean().optional(),
    not: z
      .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
  z
    .object({
      equals: z.boolean().optional(),
      not: z
        .union([
          z.boolean(),
          z.lazy(() => NestedBoolWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedBoolFilterSchema).optional(),
      _max: z.lazy(() => NestedBoolFilterSchema).optional(),
    })
    .strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z.coerce.date().array().optional().nullable(),
      notIn: z.coerce.date().array().optional().nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    })
    .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedIntFilterSchema).optional(),
      _max: z.lazy(() => NestedIntFilterSchema).optional(),
    })
    .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedEnumPaymentStatusFilterSchema: z.ZodType<Prisma.NestedEnumPaymentStatusFilter> =
  z
    .object({
      equals: z.lazy(() => PaymentStatusSchema).optional(),
      in: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => NestedEnumPaymentStatusFilterSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedEnumPaymentStatusWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumPaymentStatusWithAggregatesFilter> =
  z
    .object({
      equals: z.lazy(() => PaymentStatusSchema).optional(),
      in: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      notIn: z
        .lazy(() => PaymentStatusSchema)
        .array()
        .optional(),
      not: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
      _max: z.lazy(() => NestedEnumPaymentStatusFilterSchema).optional(),
    })
    .strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedFloatWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
      _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
      _min: z.lazy(() => NestedFloatFilterSchema).optional(),
      _max: z.lazy(() => NestedFloatFilterSchema).optional(),
    })
    .strict();

export const ContentMetadataCreateWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataCreateWithoutGenreInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutContentMetadataInputSchema,
      ),
      language: z
        .lazy(() => LanguageCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingCreateNestedOneWithoutContentMetadataInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateWithoutGenreInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataCreateOrConnectWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataCreateOrConnectWithoutGenreInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataCreateManyGenreInputEnvelopeSchema: z.ZodType<Prisma.ContentMetadataCreateManyGenreInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContentMetadataCreateManyGenreInputSchema),
        z.lazy(() => ContentMetadataCreateManyGenreInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataUpsertWithWhereUniqueWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUpsertWithWhereUniqueWithoutGenreInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutGenreInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutGenreInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutGenreInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutGenreInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateWithWhereUniqueWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithWhereUniqueWithoutGenreInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutGenreInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutGenreInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateManyWithWhereWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithWhereWithoutGenreInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateManyMutationInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateManyWithoutGenreInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataScalarWhereInputSchema: z.ZodType<Prisma.ContentMetadataScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ContentMetadataScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ContentMetadataScalarWhereInputSchema),
          z.lazy(() => ContentMetadataScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      title: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      genreId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      rating: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      languageId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      subtitleId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => EnumContentTypeFilterSchema),
          z.lazy(() => ContentTypeSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => EnumAgeRatingFilterSchema),
          z.lazy(() => AgeRatingSchema),
        ])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataCreateWithoutContentRatingInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      genre: z
        .lazy(() => GenreCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutContentMetadataInputSchema,
      ),
      language: z
        .lazy(() => LanguageCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateWithoutContentRatingInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataCreateOrConnectWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataCreateOrConnectWithoutContentRatingInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
        ),
      ]),
    })
    .strict();

export const ContentMetadataCreateManyContentRatingInputEnvelopeSchema: z.ZodType<Prisma.ContentMetadataCreateManyContentRatingInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContentMetadataCreateManyContentRatingInputSchema),
        z.lazy(() => ContentMetadataCreateManyContentRatingInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUpsertWithWhereUniqueWithoutContentRatingInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutContentRatingInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedUpdateWithoutContentRatingInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutContentRatingInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedCreateWithoutContentRatingInputSchema,
        ),
      ]),
    })
    .strict();

export const ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithWhereUniqueWithoutContentRatingInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutContentRatingInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedUpdateWithoutContentRatingInputSchema,
        ),
      ]),
    })
    .strict();

export const ContentMetadataUpdateManyWithWhereWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithWhereWithoutContentRatingInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutContentRatingInputSchema,
        ),
      ]),
    })
    .strict();

export const ContentMetadataCreateWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      genre: z
        .lazy(() => GenreCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      language: z
        .lazy(() => LanguageCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingCreateNestedOneWithoutContentMetadataInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataCreateOrConnectWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataCreateManyContentInputEnvelopeSchema: z.ZodType<Prisma.ContentMetadataCreateManyContentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContentMetadataCreateManyContentInputSchema),
        z.lazy(() => ContentMetadataCreateManyContentInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ViewingHistoryCreateWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
      profile: z.lazy(
        () => ProfileCreateNestedOneWithoutViewingHistoryInputSchema,
      ),
    })
    .strict();

export const ViewingHistoryUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const ViewingHistoryCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryCreateOrConnectWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
        z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryCreateManyContentInputEnvelopeSchema: z.ZodType<Prisma.ViewingHistoryCreateManyContentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ViewingHistoryCreateManyContentInputSchema),
        z.lazy(() => ViewingHistoryCreateManyContentInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const WatchlistCreateWithoutContentInputSchema: z.ZodType<Prisma.WatchlistCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profile: z.lazy(() => ProfileCreateNestedOneWithoutWatchlistInputSchema),
    })
    .strict();

export const WatchlistUncheckedCreateWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUncheckedCreateWithoutContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
    })
    .strict();

export const WatchlistCreateOrConnectWithoutContentInputSchema: z.ZodType<Prisma.WatchlistCreateOrConnectWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => WatchlistCreateWithoutContentInputSchema),
        z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const WatchlistCreateManyContentInputEnvelopeSchema: z.ZodType<Prisma.WatchlistCreateManyContentInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => WatchlistCreateManyContentInputSchema),
        z.lazy(() => WatchlistCreateManyContentInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataUpsertWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUpsertWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutContentInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutContentInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutContentInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutContentInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateManyWithWhereWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithWhereWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateManyMutationInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedUpdateManyWithoutContentInputSchema,
        ),
      ]),
    })
    .strict();

export const ViewingHistoryUpsertWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUpsertWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ViewingHistoryUpdateWithoutContentInputSchema),
        z.lazy(() => ViewingHistoryUncheckedUpdateWithoutContentInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ViewingHistoryCreateWithoutContentInputSchema),
        z.lazy(() => ViewingHistoryUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryUpdateWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ViewingHistoryUpdateWithoutContentInputSchema),
        z.lazy(() => ViewingHistoryUncheckedUpdateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryUpdateManyWithWhereWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyWithWhereWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ViewingHistoryUpdateManyMutationInputSchema),
        z.lazy(
          () => ViewingHistoryUncheckedUpdateManyWithoutContentInputSchema,
        ),
      ]),
    })
    .strict();

export const ViewingHistoryScalarWhereInputSchema: z.ZodType<Prisma.ViewingHistoryScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ViewingHistoryScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ViewingHistoryScalarWhereInputSchema),
          z.lazy(() => ViewingHistoryScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      profileId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      watchDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      progressPercentage: z
        .union([z.lazy(() => FloatFilterSchema), z.number()])
        .optional(),
    })
    .strict();

export const WatchlistUpsertWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUpsertWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => WatchlistUpdateWithoutContentInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateWithoutContentInputSchema),
      ]),
      create: z.union([
        z.lazy(() => WatchlistCreateWithoutContentInputSchema),
        z.lazy(() => WatchlistUncheckedCreateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const WatchlistUpdateWithWhereUniqueWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUpdateWithWhereUniqueWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => WatchlistUpdateWithoutContentInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateWithoutContentInputSchema),
      ]),
    })
    .strict();

export const WatchlistUpdateManyWithWhereWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUpdateManyWithWhereWithoutContentInput> =
  z
    .object({
      where: z.lazy(() => WatchlistScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => WatchlistUpdateManyMutationInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateManyWithoutContentInputSchema),
      ]),
    })
    .strict();

export const WatchlistScalarWhereInputSchema: z.ZodType<Prisma.WatchlistScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => WatchlistScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => WatchlistScalarWhereInputSchema),
          z.lazy(() => WatchlistScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      profileId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      contentId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SubtitleCreateWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleCreateWithoutLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.string(),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutSubtitleInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUncheckedCreateWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUncheckedCreateWithoutLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.string(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutSubtitleInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubtitleCreateOrConnectWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleCreateOrConnectWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => SubtitleWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
        z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const SubtitleCreateManyLanguageInputEnvelopeSchema: z.ZodType<Prisma.SubtitleCreateManyLanguageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubtitleCreateManyLanguageInputSchema),
        z.lazy(() => SubtitleCreateManyLanguageInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataCreateWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataCreateWithoutLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      genre: z
        .lazy(() => GenreCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutContentMetadataInputSchema,
      ),
      subtitle: z
        .lazy(() => SubtitleCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingCreateNestedOneWithoutContentMetadataInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateWithoutLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataCreateOrConnectWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataCreateOrConnectWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataCreateManyLanguageInputEnvelopeSchema: z.ZodType<Prisma.ContentMetadataCreateManyLanguageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContentMetadataCreateManyLanguageInputSchema),
        z.lazy(() => ContentMetadataCreateManyLanguageInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubtitleUpsertWithWhereUniqueWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUpsertWithWhereUniqueWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => SubtitleWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SubtitleUpdateWithoutLanguageInputSchema),
        z.lazy(() => SubtitleUncheckedUpdateWithoutLanguageInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SubtitleCreateWithoutLanguageInputSchema),
        z.lazy(() => SubtitleUncheckedCreateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const SubtitleUpdateWithWhereUniqueWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUpdateWithWhereUniqueWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => SubtitleWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SubtitleUpdateWithoutLanguageInputSchema),
        z.lazy(() => SubtitleUncheckedUpdateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const SubtitleUpdateManyWithWhereWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUpdateManyWithWhereWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => SubtitleScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SubtitleUpdateManyMutationInputSchema),
        z.lazy(() => SubtitleUncheckedUpdateManyWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const SubtitleScalarWhereInputSchema: z.ZodType<Prisma.SubtitleScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubtitleScalarWhereInputSchema),
          z.lazy(() => SubtitleScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubtitleScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubtitleScalarWhereInputSchema),
          z.lazy(() => SubtitleScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      languageId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      content: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ContentMetadataUpsertWithWhereUniqueWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUpsertWithWhereUniqueWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutLanguageInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutLanguageInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutLanguageInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateWithWhereUniqueWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithWhereUniqueWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutLanguageInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutLanguageInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateManyWithWhereWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithWhereWithoutLanguageInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateManyMutationInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedUpdateManyWithoutLanguageInputSchema,
        ),
      ]),
    })
    .strict();

export const LanguageCreateWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageCreateWithoutSubtitleInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedCreateWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutSubtitleInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutLanguageInputSchema,
        )
        .optional(),
    })
    .strict();

export const LanguageCreateOrConnectWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LanguageCreateWithoutSubtitleInputSchema),
        z.lazy(() => LanguageUncheckedCreateWithoutSubtitleInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataCreateWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataCreateWithoutSubtitleInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      genre: z
        .lazy(() => GenreCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutContentMetadataInputSchema,
      ),
      language: z
        .lazy(() => LanguageCreateNestedOneWithoutContentMetadataInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingCreateNestedOneWithoutContentMetadataInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedCreateWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedCreateWithoutSubtitleInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataCreateOrConnectWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataCreateOrConnectWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataCreateManySubtitleInputEnvelopeSchema: z.ZodType<Prisma.ContentMetadataCreateManySubtitleInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ContentMetadataCreateManySubtitleInputSchema),
        z.lazy(() => ContentMetadataCreateManySubtitleInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LanguageUpsertWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageUpsertWithoutSubtitleInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => LanguageUpdateWithoutSubtitleInputSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutSubtitleInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LanguageCreateWithoutSubtitleInputSchema),
        z.lazy(() => LanguageUncheckedCreateWithoutSubtitleInputSchema),
      ]),
      where: z.lazy(() => LanguageWhereInputSchema).optional(),
    })
    .strict();

export const LanguageUpdateToOneWithWhereWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => LanguageUpdateWithoutSubtitleInputSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutSubtitleInputSchema),
      ]),
    })
    .strict();

export const LanguageUpdateWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageUpdateWithoutSubtitleInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedUpdateWithoutSubtitleInputSchema: z.ZodType<Prisma.LanguageUncheckedUpdateWithoutSubtitleInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutLanguageNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUpsertWithWhereUniqueWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutSubtitleInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutSubtitleInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentMetadataCreateWithoutSubtitleInputSchema),
        z.lazy(() => ContentMetadataUncheckedCreateWithoutSubtitleInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithWhereUniqueWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateWithoutSubtitleInputSchema),
        z.lazy(() => ContentMetadataUncheckedUpdateWithoutSubtitleInputSchema),
      ]),
    })
    .strict();

export const ContentMetadataUpdateManyWithWhereWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUpdateManyWithWhereWithoutSubtitleInput> =
  z
    .object({
      where: z.lazy(() => ContentMetadataScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ContentMetadataUpdateManyMutationInputSchema),
        z.lazy(
          () => ContentMetadataUncheckedUpdateManyWithoutSubtitleInputSchema,
        ),
      ]),
    })
    .strict();

export const GenreCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
    })
    .strict();

export const GenreUncheckedCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreUncheckedCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
    })
    .strict();

export const GenreCreateOrConnectWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreCreateOrConnectWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => GenreWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => GenreCreateWithoutContentMetadataInputSchema),
        z.lazy(() => GenreUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const ContentCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryCreateNestedManyWithoutContentInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentUncheckedCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentCreateOrConnectWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentCreateOrConnectWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentCreateWithoutContentMetadataInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const LanguageCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      Subtitle: z
        .lazy(() => SubtitleCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageUncheckedCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      language: z.string(),
      Subtitle: z
        .lazy(() => SubtitleUncheckedCreateNestedManyWithoutLanguageInputSchema)
        .optional(),
    })
    .strict();

export const LanguageCreateOrConnectWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageCreateOrConnectWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LanguageCreateWithoutContentMetadataInputSchema),
        z.lazy(() => LanguageUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const SubtitleCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.string(),
      language: z.lazy(() => LanguageCreateNestedOneWithoutSubtitleInputSchema),
    })
    .strict();

export const SubtitleUncheckedCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleUncheckedCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      languageId: z.string(),
      content: z.string(),
    })
    .strict();

export const SubtitleCreateOrConnectWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleCreateOrConnectWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => SubtitleWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubtitleCreateWithoutContentMetadataInputSchema),
        z.lazy(() => SubtitleUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const ContentRatingCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      ratingType: z.string(),
    })
    .strict();

export const ContentRatingUncheckedCreateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingUncheckedCreateWithoutContentMetadataInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      ratingType: z.string(),
    })
    .strict();

export const ContentRatingCreateOrConnectWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingCreateOrConnectWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => ContentRatingWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentRatingCreateWithoutContentMetadataInputSchema),
        z.lazy(
          () => ContentRatingUncheckedCreateWithoutContentMetadataInputSchema,
        ),
      ]),
    })
    .strict();

export const GenreUpsertWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreUpsertWithoutContentMetadataInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => GenreUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => GenreUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
      create: z.union([
        z.lazy(() => GenreCreateWithoutContentMetadataInputSchema),
        z.lazy(() => GenreUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
      where: z.lazy(() => GenreWhereInputSchema).optional(),
    })
    .strict();

export const GenreUpdateToOneWithWhereWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreUpdateToOneWithWhereWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => GenreWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => GenreUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => GenreUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const GenreUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const GenreUncheckedUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.GenreUncheckedUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentUpsertWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentUpsertWithoutContentMetadataInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ContentUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentCreateWithoutContentMetadataInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
      where: z.lazy(() => ContentWhereInputSchema).optional(),
    })
    .strict();

export const ContentUpdateToOneWithWhereWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentUpdateToOneWithWhereWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ContentUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const ContentUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryUpdateManyWithoutContentNestedInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUpsertWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageUpsertWithoutContentMetadataInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => LanguageUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LanguageCreateWithoutContentMetadataInputSchema),
        z.lazy(() => LanguageUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
      where: z.lazy(() => LanguageWhereInputSchema).optional(),
    })
    .strict();

export const LanguageUpdateToOneWithWhereWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageUpdateToOneWithWhereWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => LanguageWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => LanguageUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => LanguageUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const LanguageUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subtitle: z
        .lazy(() => SubtitleUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
    })
    .strict();

export const LanguageUncheckedUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.LanguageUncheckedUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Subtitle: z
        .lazy(() => SubtitleUncheckedUpdateManyWithoutLanguageNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUpsertWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleUpsertWithoutContentMetadataInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => SubtitleUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => SubtitleUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SubtitleCreateWithoutContentMetadataInputSchema),
        z.lazy(() => SubtitleUncheckedCreateWithoutContentMetadataInputSchema),
      ]),
      where: z.lazy(() => SubtitleWhereInputSchema).optional(),
    })
    .strict();

export const SubtitleUpdateToOneWithWhereWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleUpdateToOneWithWhereWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => SubtitleWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => SubtitleUpdateWithoutContentMetadataInputSchema),
        z.lazy(() => SubtitleUncheckedUpdateWithoutContentMetadataInputSchema),
      ]),
    })
    .strict();

export const SubtitleUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneRequiredWithoutSubtitleNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingUpsertWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingUpsertWithoutContentMetadataInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ContentRatingUpdateWithoutContentMetadataInputSchema),
        z.lazy(
          () => ContentRatingUncheckedUpdateWithoutContentMetadataInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ContentRatingCreateWithoutContentMetadataInputSchema),
        z.lazy(
          () => ContentRatingUncheckedCreateWithoutContentMetadataInputSchema,
        ),
      ]),
      where: z.lazy(() => ContentRatingWhereInputSchema).optional(),
    })
    .strict();

export const ContentRatingUpdateToOneWithWhereWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingUpdateToOneWithWhereWithoutContentMetadataInput> =
  z
    .object({
      where: z.lazy(() => ContentRatingWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ContentRatingUpdateWithoutContentMetadataInputSchema),
        z.lazy(
          () => ContentRatingUncheckedUpdateWithoutContentMetadataInputSchema,
        ),
      ]),
    })
    .strict();

export const ContentRatingUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingUncheckedUpdateWithoutContentMetadataInputSchema: z.ZodType<Prisma.ContentRatingUncheckedUpdateWithoutContentMetadataInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ratingType: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateWithoutAccountInputSchema: z.ZodType<Prisma.ProfileCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryCreateNestedManyWithoutProfileInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutProfileInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutAccountInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const ProfileCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.ProfileCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProfileCreateManyAccountInputSchema),
        z.lazy(() => ProfileCreateManyAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PreviousPasswordHashCreateWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const PreviousPasswordHashCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
        z.lazy(
          () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
        ),
      ]),
    })
    .strict();

export const PreviousPasswordHashCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.PreviousPasswordHashCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PreviousPasswordHashCreateManyAccountInputSchema),
        z.lazy(() => PreviousPasswordHashCreateManyAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionCreateWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      subscriptionType: z.lazy(
        () => SubscriptionTypeCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceCreateNestedManyWithoutSubscriptionInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      subscriptionTypeId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedCreateNestedManyWithoutSubscriptionInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionCreateOrConnectWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const SubscriptionCreateManyAccountInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyAccountInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriptionCreateManyAccountInputSchema),
        z.lazy(() => SubscriptionCreateManyAccountInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionCreateWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutReferredByInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      subscriptionType: z.lazy(
        () => SubscriptionTypeCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      Invoice: z
        .lazy(() => InvoiceCreateNestedManyWithoutSubscriptionInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutReferredByInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      subscriptionTypeId: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedCreateNestedManyWithoutSubscriptionInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionCreateOrConnectWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutReferredByInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
      ]),
    })
    .strict();

export const SubscriptionCreateManyReferredByInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManyReferredByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriptionCreateManyReferredByInputSchema),
        z.lazy(() => SubscriptionCreateManyReferredByInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProfileUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ProfileUpdateWithoutAccountInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutAccountInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const ProfileUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ProfileUpdateWithoutAccountInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const ProfileUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => ProfileScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ProfileUpdateManyMutationInputSchema),
        z.lazy(() => ProfileUncheckedUpdateManyWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const ProfileScalarWhereInputSchema: z.ZodType<Prisma.ProfileScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ProfileScalarWhereInputSchema),
          z.lazy(() => ProfileScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProfileScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ProfileScalarWhereInputSchema),
          z.lazy(() => ProfileScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      profileImage: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      language: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PreviousPasswordHashUpdateWithoutAccountInputSchema),
        z.lazy(
          () => PreviousPasswordHashUncheckedUpdateWithoutAccountInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => PreviousPasswordHashCreateWithoutAccountInputSchema),
        z.lazy(
          () => PreviousPasswordHashUncheckedCreateWithoutAccountInputSchema,
        ),
      ]),
    })
    .strict();

export const PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => PreviousPasswordHashWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PreviousPasswordHashUpdateWithoutAccountInputSchema),
        z.lazy(
          () => PreviousPasswordHashUncheckedUpdateWithoutAccountInputSchema,
        ),
      ]),
    })
    .strict();

export const PreviousPasswordHashUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => PreviousPasswordHashScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PreviousPasswordHashUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            PreviousPasswordHashUncheckedUpdateManyWithoutAccountInputSchema,
        ),
      ]),
    })
    .strict();

export const PreviousPasswordHashScalarWhereInputSchema: z.ZodType<Prisma.PreviousPasswordHashScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema),
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PreviousPasswordHashScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema),
          z.lazy(() => PreviousPasswordHashScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      passwordHash: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const SubscriptionUpsertWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SubscriptionUpdateWithoutAccountInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutAccountInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutAccountInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpdateWithWhereUniqueWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateWithoutAccountInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpdateManyWithWhereWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutAccountInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateManyMutationInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateManyWithoutAccountInputSchema),
      ]),
    })
    .strict();

export const SubscriptionScalarWhereInputSchema: z.ZodType<Prisma.SubscriptionScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SubscriptionScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SubscriptionScalarWhereInputSchema),
          z.lazy(() => SubscriptionScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      beginDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      endDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      subscriptionTypeId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      referralId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const SubscriptionUpsertWithWhereUniqueWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutReferredByInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SubscriptionUpdateWithoutReferredByInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutReferredByInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutReferredByInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutReferredByInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpdateWithWhereUniqueWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutReferredByInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateWithoutReferredByInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutReferredByInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpdateManyWithWhereWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutReferredByInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateManyMutationInputSchema),
        z.lazy(
          () => SubscriptionUncheckedUpdateManyWithoutReferredByInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountCreateWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountCreateWithoutPreviousPasswordHashInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionCreateNestedManyWithoutReferredByInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedCreateNestedManyWithoutReferredByInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateOrConnectWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountCreateOrConnectWithoutPreviousPasswordHashInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(
          () => NetflixAccountCreateWithoutPreviousPasswordHashInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountUpsertWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountUpsertWithoutPreviousPasswordHashInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => NetflixAccountUpdateWithoutPreviousPasswordHashInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedUpdateWithoutPreviousPasswordHashInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => NetflixAccountCreateWithoutPreviousPasswordHashInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedCreateWithoutPreviousPasswordHashInputSchema,
        ),
      ]),
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
    })
    .strict();

export const NetflixAccountUpdateToOneWithWhereWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountUpdateToOneWithWhereWithoutPreviousPasswordHashInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(
          () => NetflixAccountUpdateWithoutPreviousPasswordHashInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedUpdateWithoutPreviousPasswordHashInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountUpdateWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountUpdateWithoutPreviousPasswordHashInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionUpdateManyWithoutReferredByNestedInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateWithoutPreviousPasswordHashInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateWithoutPreviousPasswordHashInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUncheckedUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutReferredByNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionCreateNestedManyWithoutReferredByInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedCreateNestedManyWithoutReferredByInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountCreateOrConnectWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => NetflixAccountCreateWithoutProfileInputSchema),
        z.lazy(() => NetflixAccountUncheckedCreateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryCreateWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
      content: z.lazy(
        () => ContentCreateNestedOneWithoutViewingHistoryInputSchema,
      ),
    })
    .strict();

export const ViewingHistoryUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      contentId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const ViewingHistoryCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryCreateOrConnectWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
        z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryCreateManyProfileInputEnvelopeSchema: z.ZodType<Prisma.ViewingHistoryCreateManyProfileInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ViewingHistoryCreateManyProfileInputSchema),
        z.lazy(() => ViewingHistoryCreateManyProfileInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const WatchlistCreateWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.lazy(() => ContentCreateNestedOneWithoutWatchlistInputSchema),
    })
    .strict();

export const WatchlistUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUncheckedCreateWithoutProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      contentId: z.string(),
    })
    .strict();

export const WatchlistCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistCreateOrConnectWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
        z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const WatchlistCreateManyProfileInputEnvelopeSchema: z.ZodType<Prisma.WatchlistCreateManyProfileInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => WatchlistCreateManyProfileInputSchema),
        z.lazy(() => WatchlistCreateManyProfileInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const NetflixAccountUpsertWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountUpsertWithoutProfileInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => NetflixAccountUpdateWithoutProfileInputSchema),
        z.lazy(() => NetflixAccountUncheckedUpdateWithoutProfileInputSchema),
      ]),
      create: z.union([
        z.lazy(() => NetflixAccountCreateWithoutProfileInputSchema),
        z.lazy(() => NetflixAccountUncheckedCreateWithoutProfileInputSchema),
      ]),
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
    })
    .strict();

export const NetflixAccountUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountUpdateToOneWithWhereWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => NetflixAccountUpdateWithoutProfileInputSchema),
        z.lazy(() => NetflixAccountUncheckedUpdateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const NetflixAccountUpdateWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionUpdateManyWithoutReferredByNestedInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutReferredByNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ViewingHistoryUpsertWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUpsertWithWhereUniqueWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ViewingHistoryUpdateWithoutProfileInputSchema),
        z.lazy(() => ViewingHistoryUncheckedUpdateWithoutProfileInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ViewingHistoryCreateWithoutProfileInputSchema),
        z.lazy(() => ViewingHistoryUncheckedCreateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryUpdateWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateWithWhereUniqueWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ViewingHistoryUpdateWithoutProfileInputSchema),
        z.lazy(() => ViewingHistoryUncheckedUpdateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const ViewingHistoryUpdateManyWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyWithWhereWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => ViewingHistoryScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ViewingHistoryUpdateManyMutationInputSchema),
        z.lazy(
          () => ViewingHistoryUncheckedUpdateManyWithoutProfileInputSchema,
        ),
      ]),
    })
    .strict();

export const WatchlistUpsertWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUpsertWithWhereUniqueWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => WatchlistUpdateWithoutProfileInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateWithoutProfileInputSchema),
      ]),
      create: z.union([
        z.lazy(() => WatchlistCreateWithoutProfileInputSchema),
        z.lazy(() => WatchlistUncheckedCreateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const WatchlistUpdateWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUpdateWithWhereUniqueWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => WatchlistWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => WatchlistUpdateWithoutProfileInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const WatchlistUpdateManyWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUpdateManyWithWhereWithoutProfileInput> =
  z
    .object({
      where: z.lazy(() => WatchlistScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => WatchlistUpdateManyMutationInputSchema),
        z.lazy(() => WatchlistUncheckedUpdateManyWithoutProfileInputSchema),
      ]),
    })
    .strict();

export const SubscriptionCreateWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutSubscriptionTypeInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceCreateNestedManyWithoutSubscriptionInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutSubscriptionTypeInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedCreateNestedManyWithoutSubscriptionInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionCreateOrConnectWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutSubscriptionTypeInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
        z.lazy(
          () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
        ),
      ]),
    })
    .strict();

export const SubscriptionCreateManySubscriptionTypeInputEnvelopeSchema: z.ZodType<Prisma.SubscriptionCreateManySubscriptionTypeInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SubscriptionCreateManySubscriptionTypeInputSchema),
        z.lazy(() => SubscriptionCreateManySubscriptionTypeInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithWhereUniqueWithoutSubscriptionTypeInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SubscriptionUpdateWithoutSubscriptionTypeInputSchema),
        z.lazy(
          () => SubscriptionUncheckedUpdateWithoutSubscriptionTypeInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutSubscriptionTypeInputSchema),
        z.lazy(
          () => SubscriptionUncheckedCreateWithoutSubscriptionTypeInputSchema,
        ),
      ]),
    })
    .strict();

export const SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithWhereUniqueWithoutSubscriptionTypeInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateWithoutSubscriptionTypeInputSchema),
        z.lazy(
          () => SubscriptionUncheckedUpdateWithoutSubscriptionTypeInputSchema,
        ),
      ]),
    })
    .strict();

export const SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUpdateManyWithWhereWithoutSubscriptionTypeInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SubscriptionUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionCreateNestedManyWithoutReferredByInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedCreateNestedManyWithoutReferredByInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateOrConnectWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountCreateOrConnectWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => NetflixAccountCreateWithoutSubscriptionInputSchema),
        z.lazy(
          () => NetflixAccountUncheckedCreateWithoutSubscriptionInputSchema,
        ),
      ]),
    })
    .strict();

export const SubscriptionTypeCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.string(),
      priceInEuroCents: z.number().int(),
    })
    .strict();

export const SubscriptionTypeUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeUncheckedCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      type: z.string(),
      priceInEuroCents: z.number().int(),
    })
    .strict();

export const SubscriptionTypeCreateOrConnectWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeCreateOrConnectWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionTypeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubscriptionTypeCreateWithoutSubscriptionInputSchema),
        z.lazy(
          () => SubscriptionTypeUncheckedCreateWithoutSubscriptionInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountCreateWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountCreateWithoutReferredSubscriptionsInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionCreateNestedManyWithoutAccountInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      email: z.string(),
      password: z.string(),
      activated: z.boolean().optional(),
      blockedUntil: z.coerce.date().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Profile: z
        .lazy(() => ProfileUncheckedCreateNestedManyWithoutAccountInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedCreateNestedManyWithoutAccountInputSchema,
        )
        .optional(),
    })
    .strict();

export const NetflixAccountCreateOrConnectWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountCreateOrConnectWithoutReferredSubscriptionsInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(
          () => NetflixAccountCreateWithoutReferredSubscriptionsInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInputSchema,
        ),
      ]),
    })
    .strict();

export const InvoiceCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      isPaid: z.lazy(() => PaymentStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const InvoiceUncheckedCreateWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateWithoutSubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      isPaid: z.lazy(() => PaymentStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const InvoiceCreateOrConnectWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
      ]),
    })
    .strict();

export const InvoiceCreateManySubscriptionInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManySubscriptionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => InvoiceCreateManySubscriptionInputSchema),
        z.lazy(() => InvoiceCreateManySubscriptionInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const NetflixAccountUpsertWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountUpsertWithoutSubscriptionInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => NetflixAccountUpdateWithoutSubscriptionInputSchema),
        z.lazy(
          () => NetflixAccountUncheckedUpdateWithoutSubscriptionInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => NetflixAccountCreateWithoutSubscriptionInputSchema),
        z.lazy(
          () => NetflixAccountUncheckedCreateWithoutSubscriptionInputSchema,
        ),
      ]),
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
    })
    .strict();

export const NetflixAccountUpdateToOneWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountUpdateToOneWithWhereWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => NetflixAccountUpdateWithoutSubscriptionInputSchema),
        z.lazy(
          () => NetflixAccountUncheckedUpdateWithoutSubscriptionInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(() => SubscriptionUpdateManyWithoutReferredByNestedInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUncheckedUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      ReferredSubscriptions: z
        .lazy(
          () =>
            SubscriptionUncheckedUpdateManyWithoutReferredByNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionTypeUpsertWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeUpsertWithoutSubscriptionInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => SubscriptionTypeUpdateWithoutSubscriptionInputSchema),
        z.lazy(
          () => SubscriptionTypeUncheckedUpdateWithoutSubscriptionInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriptionTypeCreateWithoutSubscriptionInputSchema),
        z.lazy(
          () => SubscriptionTypeUncheckedCreateWithoutSubscriptionInputSchema,
        ),
      ]),
      where: z.lazy(() => SubscriptionTypeWhereInputSchema).optional(),
    })
    .strict();

export const SubscriptionTypeUpdateToOneWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeUpdateToOneWithWhereWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionTypeWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => SubscriptionTypeUpdateWithoutSubscriptionInputSchema),
        z.lazy(
          () => SubscriptionTypeUncheckedUpdateWithoutSubscriptionInputSchema,
        ),
      ]),
    })
    .strict();

export const SubscriptionTypeUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.SubscriptionTypeUncheckedUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      priceInEuroCents: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountUpsertWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountUpsertWithoutReferredSubscriptionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => NetflixAccountUpdateWithoutReferredSubscriptionsInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedUpdateWithoutReferredSubscriptionsInputSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => NetflixAccountCreateWithoutReferredSubscriptionsInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedCreateWithoutReferredSubscriptionsInputSchema,
        ),
      ]),
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
    })
    .strict();

export const NetflixAccountUpdateToOneWithWhereWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountUpdateToOneWithWhereWithoutReferredSubscriptionsInput> =
  z
    .object({
      where: z.lazy(() => NetflixAccountWhereInputSchema).optional(),
      data: z.union([
        z.lazy(
          () => NetflixAccountUpdateWithoutReferredSubscriptionsInputSchema,
        ),
        z.lazy(
          () =>
            NetflixAccountUncheckedUpdateWithoutReferredSubscriptionsInputSchema,
        ),
      ]),
    })
    .strict();

export const NetflixAccountUpdateWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountUpdateWithoutReferredSubscriptionsInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () => PreviousPasswordHashUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(() => SubscriptionUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
    })
    .strict();

export const NetflixAccountUncheckedUpdateWithoutReferredSubscriptionsInputSchema: z.ZodType<Prisma.NetflixAccountUncheckedUpdateWithoutReferredSubscriptionsInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      activated: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      blockedUntil: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Profile: z
        .lazy(() => ProfileUncheckedUpdateManyWithoutAccountNestedInputSchema)
        .optional(),
      PreviousPasswordHash: z
        .lazy(
          () =>
            PreviousPasswordHashUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
      Subscription: z
        .lazy(
          () => SubscriptionUncheckedUpdateManyWithoutAccountNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const InvoiceUpsertWithWhereUniqueWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => InvoiceUpdateWithoutSubscriptionInputSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutSubscriptionInputSchema),
      ]),
      create: z.union([
        z.lazy(() => InvoiceCreateWithoutSubscriptionInputSchema),
        z.lazy(() => InvoiceUncheckedCreateWithoutSubscriptionInputSchema),
      ]),
    })
    .strict();

export const InvoiceUpdateWithWhereUniqueWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => InvoiceWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateWithoutSubscriptionInputSchema),
        z.lazy(() => InvoiceUncheckedUpdateWithoutSubscriptionInputSchema),
      ]),
    })
    .strict();

export const InvoiceUpdateManyWithWhereWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutSubscriptionInput> =
  z
    .object({
      where: z.lazy(() => InvoiceScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => InvoiceUpdateManyMutationInputSchema),
        z.lazy(() => InvoiceUncheckedUpdateManyWithoutSubscriptionInputSchema),
      ]),
    })
    .strict();

export const InvoiceScalarWhereInputSchema: z.ZodType<Prisma.InvoiceScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputSchema),
          z.lazy(() => InvoiceScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => InvoiceScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => InvoiceScalarWhereInputSchema),
          z.lazy(() => InvoiceScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      subscriptionId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => EnumPaymentStatusFilterSchema),
          z.lazy(() => PaymentStatusSchema),
        ])
        .optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const SubscriptionCreateWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionCreateWithoutInvoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      subscriptionType: z.lazy(
        () => SubscriptionTypeCreateNestedOneWithoutSubscriptionInputSchema,
      ),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountCreateNestedOneWithoutReferredSubscriptionsInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedCreateWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionUncheckedCreateWithoutInvoiceInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      subscriptionTypeId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SubscriptionCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutInvoiceInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutInvoiceInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpsertWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionUpsertWithoutInvoiceInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => SubscriptionUpdateWithoutInvoiceInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutInvoiceInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SubscriptionCreateWithoutInvoiceInputSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutInvoiceInputSchema),
      ]),
      where: z.lazy(() => SubscriptionWhereInputSchema).optional(),
    })
    .strict();

export const SubscriptionUpdateToOneWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionUpdateToOneWithWhereWithoutInvoiceInput> =
  z
    .object({
      where: z.lazy(() => SubscriptionWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => SubscriptionUpdateWithoutInvoiceInputSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutInvoiceInputSchema),
      ]),
    })
    .strict();

export const SubscriptionUpdateWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutInvoiceInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () =>
            NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      subscriptionType: z
        .lazy(
          () =>
            SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateWithoutInvoiceInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutInvoiceInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileCreateWithoutViewingHistoryInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutProfileInputSchema,
      ),
      Watchlist: z
        .lazy(() => WatchlistCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedCreateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutViewingHistoryInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileCreateOrConnectWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutViewingHistoryInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutViewingHistoryInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutViewingHistoryInputSchema),
      ]),
    })
    .strict();

export const ContentCreateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentCreateWithoutViewingHistoryInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutContentInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedCreateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentUncheckedCreateWithoutViewingHistoryInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentCreateOrConnectWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentCreateOrConnectWithoutViewingHistoryInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentCreateWithoutViewingHistoryInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutViewingHistoryInputSchema),
      ]),
    })
    .strict();

export const ProfileUpsertWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutViewingHistoryInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ProfileUpdateWithoutViewingHistoryInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutViewingHistoryInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutViewingHistoryInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutViewingHistoryInputSchema),
      ]),
      where: z.lazy(() => ProfileWhereInputSchema).optional(),
    })
    .strict();

export const ProfileUpdateToOneWithWhereWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutViewingHistoryInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ProfileUpdateWithoutViewingHistoryInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutViewingHistoryInputSchema),
      ]),
    })
    .strict();

export const ProfileUpdateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutViewingHistoryInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () => NetflixAccountUpdateOneRequiredWithoutProfileNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutViewingHistoryInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentUpsertWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentUpsertWithoutViewingHistoryInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ContentUpdateWithoutViewingHistoryInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutViewingHistoryInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentCreateWithoutViewingHistoryInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutViewingHistoryInputSchema),
      ]),
      where: z.lazy(() => ContentWhereInputSchema).optional(),
    })
    .strict();

export const ContentUpdateToOneWithWhereWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentUpdateToOneWithWhereWithoutViewingHistoryInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ContentUpdateWithoutViewingHistoryInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutViewingHistoryInputSchema),
      ]),
    })
    .strict();

export const ContentUpdateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentUpdateWithoutViewingHistoryInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutContentNestedInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedUpdateWithoutViewingHistoryInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateWithoutViewingHistoryInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileCreateWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileCreateWithoutWatchlistInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      account: z.lazy(
        () => NetflixAccountCreateNestedOneWithoutProfileInputSchema,
      ),
      ViewingHistory: z
        .lazy(() => ViewingHistoryCreateNestedManyWithoutProfileInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedCreateWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutWatchlistInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      accountId: z.string(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutProfileInputSchema,
        )
        .optional(),
    })
    .strict();

export const ProfileCreateOrConnectWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutWatchlistInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutWatchlistInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutWatchlistInputSchema),
      ]),
    })
    .strict();

export const ContentCreateWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentCreateWithoutWatchlistInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataCreateNestedManyWithoutContentInputSchema)
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryCreateNestedManyWithoutContentInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedCreateWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentUncheckedCreateWithoutWatchlistInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string(),
      duration: z.coerce.date(),
      releaseDate: z.coerce.date(),
      season: z.number().int().optional().nullable(),
      qualityId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedCreateNestedManyWithoutContentInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentCreateOrConnectWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentCreateOrConnectWithoutWatchlistInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ContentCreateWithoutWatchlistInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutWatchlistInputSchema),
      ]),
    })
    .strict();

export const ProfileUpsertWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutWatchlistInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ProfileUpdateWithoutWatchlistInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutWatchlistInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ProfileCreateWithoutWatchlistInputSchema),
        z.lazy(() => ProfileUncheckedCreateWithoutWatchlistInputSchema),
      ]),
      where: z.lazy(() => ProfileWhereInputSchema).optional(),
    })
    .strict();

export const ProfileUpdateToOneWithWhereWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutWatchlistInput> =
  z
    .object({
      where: z.lazy(() => ProfileWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ProfileUpdateWithoutWatchlistInputSchema),
        z.lazy(() => ProfileUncheckedUpdateWithoutWatchlistInputSchema),
      ]),
    })
    .strict();

export const ProfileUpdateWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutWatchlistInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () => NetflixAccountUpdateOneRequiredWithoutProfileNestedInputSchema,
        )
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateWithoutWatchlistInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutWatchlistInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutProfileNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentUpsertWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentUpsertWithoutWatchlistInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ContentUpdateWithoutWatchlistInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutWatchlistInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ContentCreateWithoutWatchlistInputSchema),
        z.lazy(() => ContentUncheckedCreateWithoutWatchlistInputSchema),
      ]),
      where: z.lazy(() => ContentWhereInputSchema).optional(),
    })
    .strict();

export const ContentUpdateToOneWithWhereWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentUpdateToOneWithWhereWithoutWatchlistInput> =
  z
    .object({
      where: z.lazy(() => ContentWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => ContentUpdateWithoutWatchlistInputSchema),
        z.lazy(() => ContentUncheckedUpdateWithoutWatchlistInputSchema),
      ]),
    })
    .strict();

export const ContentUpdateWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentUpdateWithoutWatchlistInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutContentNestedInputSchema)
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryUpdateManyWithoutContentNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentUncheckedUpdateWithoutWatchlistInputSchema: z.ZodType<Prisma.ContentUncheckedUpdateWithoutWatchlistInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      duration: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      releaseDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      season: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      qualityId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutContentNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
    })
    .strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
    })
    .strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SessionCreateManyUserInputSchema),
        z.lazy(() => SessionCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string(),
      providerId: z.string(),
      accessToken: z.string().optional().nullable(),
      refreshToken: z.string().optional().nullable(),
      idToken: z.string().optional().nullable(),
      accessTokenExpiresAt: z.coerce.date().optional().nullable(),
      refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
      scope: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string(),
      providerId: z.string(),
      accessToken: z.string().optional().nullable(),
      refreshToken: z.string().optional().nullable(),
      idToken: z.string().optional().nullable(),
      accessTokenExpiresAt: z.coerce.date().optional().nullable(),
      refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
      scope: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => AccountCreateManyUserInputSchema),
        z.lazy(() => AccountCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SessionCreateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateWithoutUserInputSchema),
        z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => SessionScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SessionUpdateManyMutationInputSchema),
        z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SessionScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SessionScalarWhereInputSchema),
          z.lazy(() => SessionScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      expiresAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      ipAddress: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      userAgent: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => AccountUpdateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AccountCreateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateWithoutUserInputSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AccountScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => AccountUpdateManyMutationInputSchema),
        z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AccountScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AccountScalarWhereInputSchema),
          z.lazy(() => AccountScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      accountId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      providerId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      accessToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      refreshToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      idToken: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      scope: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      password: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      createdAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      updatedAt: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      accounts: z
        .lazy(() => AccountCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      accounts: z
        .lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutSessionsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accounts: z
        .lazy(() => AccountUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accounts: z
        .lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      sessions: z
        .lazy(() => SessionCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> =
  z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      emailVerified: z.boolean(),
      image: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      sessions: z
        .lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutAccountsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessions: z
        .lazy(() => SessionUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      emailVerified: z
        .union([
          z.boolean(),
          z.lazy(() => BoolFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      sessions: z
        .lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentMetadataCreateManyGenreInputSchema: z.ZodType<Prisma.ContentMetadataCreateManyGenreInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataUpdateWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithoutGenreInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateWithoutGenreInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutGenreInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutGenreInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateManyContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataCreateManyContentRatingInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataUpdateWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithoutContentRatingInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      genre: z
        .lazy(() => GenreUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateWithoutContentRatingInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutContentRatingInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutContentRatingInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateManyContentInputSchema: z.ZodType<Prisma.ContentMetadataCreateManyContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      languageId: z.string().optional().nullable(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ViewingHistoryCreateManyContentInputSchema: z.ZodType<Prisma.ViewingHistoryCreateManyContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const WatchlistCreateManyContentInputSchema: z.ZodType<Prisma.WatchlistCreateManyContentInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      profileId: z.string(),
    })
    .strict();

export const ContentMetadataUpdateWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      genre: z
        .lazy(() => GenreUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      subtitle: z
        .lazy(() => SubtitleUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutContentInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUpdateWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile: z
        .lazy(
          () => ProfileUpdateOneRequiredWithoutViewingHistoryNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateManyWithoutContentInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateManyWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUpdateWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile: z
        .lazy(() => ProfileUpdateOneRequiredWithoutWatchlistNestedInputSchema)
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateManyWithoutContentInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateManyWithoutContentInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubtitleCreateManyLanguageInputSchema: z.ZodType<Prisma.SubtitleCreateManyLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      content: z.string(),
    })
    .strict();

export const ContentMetadataCreateManyLanguageInputSchema: z.ZodType<Prisma.ContentMetadataCreateManyLanguageInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      subtitleId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SubtitleUpdateWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUpdateWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(() => ContentMetadataUpdateManyWithoutSubtitleNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ContentMetadata: z
        .lazy(
          () =>
            ContentMetadataUncheckedUpdateManyWithoutSubtitleNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubtitleUncheckedUpdateManyWithoutLanguageInputSchema: z.ZodType<Prisma.SubtitleUncheckedUpdateManyWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUpdateWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      genre: z
        .lazy(() => GenreUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
      subtitle: z
        .lazy(() => SubtitleUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutLanguageInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutLanguageInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subtitleId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataCreateManySubtitleInputSchema: z.ZodType<Prisma.ContentMetadataCreateManySubtitleInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      title: z.string().optional().nullable(),
      genreId: z.string().optional().nullable(),
      rating: z.number().int().optional().nullable(),
      contentId: z.string(),
      languageId: z.string().optional().nullable(),
      contentType: z.lazy(() => ContentTypeSchema),
      contentRatingId: z.string().optional().nullable(),
      ageRating: z.lazy(() => AgeRatingSchema),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ContentMetadataUpdateWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUpdateWithoutSubtitleInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      genre: z
        .lazy(() => GenreUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
      language: z
        .lazy(() => LanguageUpdateOneWithoutContentMetadataNestedInputSchema)
        .optional(),
      contentRating: z
        .lazy(
          () => ContentRatingUpdateOneWithoutContentMetadataNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateWithoutSubtitleInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataUncheckedUpdateManyWithoutSubtitleInputSchema: z.ZodType<Prisma.ContentMetadataUncheckedUpdateManyWithoutSubtitleInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      genreId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      rating: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      languageId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      contentType: z
        .union([
          z.lazy(() => ContentTypeSchema),
          z.lazy(() => EnumContentTypeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentRatingId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      ageRating: z
        .union([
          z.lazy(() => AgeRatingSchema),
          z.lazy(() => EnumAgeRatingFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProfileCreateManyAccountInputSchema: z.ZodType<Prisma.ProfileCreateManyAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      name: z.string(),
      profileImage: z.string().optional().nullable(),
      dateOfBirth: z.coerce.date(),
      language: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const PreviousPasswordHashCreateManyAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashCreateManyAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      passwordHash: z.string(),
      createdAt: z.coerce.date().optional(),
    })
    .strict();

export const SubscriptionCreateManyAccountInputSchema: z.ZodType<Prisma.SubscriptionCreateManyAccountInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      subscriptionTypeId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SubscriptionCreateManyReferredByInputSchema: z.ZodType<Prisma.SubscriptionCreateManyReferredByInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      subscriptionTypeId: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const ProfileUpdateWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(() => ViewingHistoryUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ViewingHistory: z
        .lazy(
          () =>
            ViewingHistoryUncheckedUpdateManyWithoutProfileNestedInputSchema,
        )
        .optional(),
      Watchlist: z
        .lazy(() => WatchlistUncheckedUpdateManyWithoutProfileNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProfileUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profileImage: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      dateOfBirth: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      language: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUpdateWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.PreviousPasswordHashUncheckedUpdateManyWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      passwordHash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUpdateWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionType: z
        .lazy(
          () =>
            SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceUpdateManyWithoutSubscriptionNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutAccountInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutAccountInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionUpdateWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutReferredByInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () =>
            NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      subscriptionType: z
        .lazy(
          () =>
            SubscriptionTypeUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceUpdateManyWithoutSubscriptionNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutReferredByInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutReferredByInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutReferredByInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      subscriptionTypeId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryCreateManyProfileInputSchema: z.ZodType<Prisma.ViewingHistoryCreateManyProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      contentId: z.string(),
      watchDate: z.coerce.date().optional(),
      progressPercentage: z.number(),
    })
    .strict();

export const WatchlistCreateManyProfileInputSchema: z.ZodType<Prisma.WatchlistCreateManyProfileInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      contentId: z.string(),
    })
    .strict();

export const ViewingHistoryUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .lazy(
          () => ContentUpdateOneRequiredWithoutViewingHistoryNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryUncheckedUpdateManyWithoutProfileInputSchema: z.ZodType<Prisma.ViewingHistoryUncheckedUpdateManyWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      watchDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      progressPercentage: z
        .union([
          z.number(),
          z.lazy(() => FloatFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUpdateWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .lazy(() => ContentUpdateOneRequiredWithoutWatchlistNestedInputSchema)
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const WatchlistUncheckedUpdateManyWithoutProfileInputSchema: z.ZodType<Prisma.WatchlistUncheckedUpdateManyWithoutProfileInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      contentId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionCreateManySubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionCreateManySubscriptionTypeInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      beginDate: z.coerce.date(),
      endDate: z.coerce.date(),
      accountId: z.string(),
      referralId: z.string().optional().nullable(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const SubscriptionUpdateWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUpdateWithoutSubscriptionTypeInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      account: z
        .lazy(
          () =>
            NetflixAccountUpdateOneRequiredWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
      referredBy: z
        .lazy(
          () =>
            NetflixAccountUpdateOneWithoutReferredSubscriptionsNestedInputSchema,
        )
        .optional(),
      Invoice: z
        .lazy(() => InvoiceUpdateManyWithoutSubscriptionNestedInputSchema)
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateWithoutSubscriptionTypeInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      Invoice: z
        .lazy(
          () => InvoiceUncheckedUpdateManyWithoutSubscriptionNestedInputSchema,
        )
        .optional(),
    })
    .strict();

export const SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeInputSchema: z.ZodType<Prisma.SubscriptionUncheckedUpdateManyWithoutSubscriptionTypeInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      beginDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      endDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      referralId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceCreateManySubscriptionInputSchema: z.ZodType<Prisma.InvoiceCreateManySubscriptionInput> =
  z
    .object({
      id: z.string().uuid().optional(),
      isPaid: z.lazy(() => PaymentStatusSchema).optional(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
    })
    .strict();

export const InvoiceUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const InvoiceUncheckedUpdateManyWithoutSubscriptionInputSchema: z.ZodType<Prisma.InvoiceUncheckedUpdateManyWithoutSubscriptionInput> =
  z
    .object({
      id: z
        .union([
          z.string().uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      isPaid: z
        .union([
          z.lazy(() => PaymentStatusSchema),
          z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> =
  z
    .object({
      id: z.string(),
      expiresAt: z.coerce.date(),
      token: z.string(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
      ipAddress: z.string().optional().nullable(),
      userAgent: z.string().optional().nullable(),
    })
    .strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> =
  z
    .object({
      id: z.string(),
      accountId: z.string(),
      providerId: z.string(),
      accessToken: z.string().optional().nullable(),
      refreshToken: z.string().optional().nullable(),
      idToken: z.string().optional().nullable(),
      accessTokenExpiresAt: z.coerce.date().optional().nullable(),
      refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
      scope: z.string().optional().nullable(),
      password: z.string().optional().nullable(),
      createdAt: z.coerce.date(),
      updatedAt: z.coerce.date(),
    })
    .strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      token: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ipAddress: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      userAgent: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accountId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      providerId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      accessToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      idToken: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      accessTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      refreshTokenExpiresAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      scope: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      password: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      createdAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const GenreFindFirstArgsSchema: z.ZodType<Prisma.GenreFindFirstArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    where: GenreWhereInputSchema.optional(),
    orderBy: z
      .union([
        GenreOrderByWithRelationInputSchema.array(),
        GenreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: GenreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([GenreScalarFieldEnumSchema, GenreScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const GenreFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GenreFindFirstOrThrowArgs> =
  z
    .object({
      select: GenreSelectSchema.optional(),
      include: GenreIncludeSchema.optional(),
      where: GenreWhereInputSchema.optional(),
      orderBy: z
        .union([
          GenreOrderByWithRelationInputSchema.array(),
          GenreOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: GenreWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([GenreScalarFieldEnumSchema, GenreScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const GenreFindManyArgsSchema: z.ZodType<Prisma.GenreFindManyArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    where: GenreWhereInputSchema.optional(),
    orderBy: z
      .union([
        GenreOrderByWithRelationInputSchema.array(),
        GenreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: GenreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([GenreScalarFieldEnumSchema, GenreScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const GenreAggregateArgsSchema: z.ZodType<Prisma.GenreAggregateArgs> = z
  .object({
    where: GenreWhereInputSchema.optional(),
    orderBy: z
      .union([
        GenreOrderByWithRelationInputSchema.array(),
        GenreOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: GenreWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const GenreGroupByArgsSchema: z.ZodType<Prisma.GenreGroupByArgs> = z
  .object({
    where: GenreWhereInputSchema.optional(),
    orderBy: z
      .union([
        GenreOrderByWithAggregationInputSchema.array(),
        GenreOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: GenreScalarFieldEnumSchema.array(),
    having: GenreScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const GenreFindUniqueArgsSchema: z.ZodType<Prisma.GenreFindUniqueArgs> =
  z
    .object({
      select: GenreSelectSchema.optional(),
      include: GenreIncludeSchema.optional(),
      where: GenreWhereUniqueInputSchema,
    })
    .strict();

export const GenreFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GenreFindUniqueOrThrowArgs> =
  z
    .object({
      select: GenreSelectSchema.optional(),
      include: GenreIncludeSchema.optional(),
      where: GenreWhereUniqueInputSchema,
    })
    .strict();

export const ContentRatingFindFirstArgsSchema: z.ZodType<Prisma.ContentRatingFindFirstArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentRatingOrderByWithRelationInputSchema.array(),
          ContentRatingOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentRatingWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentRatingScalarFieldEnumSchema,
          ContentRatingScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentRatingFindFirstOrThrowArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentRatingOrderByWithRelationInputSchema.array(),
          ContentRatingOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentRatingWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentRatingScalarFieldEnumSchema,
          ContentRatingScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingFindManyArgsSchema: z.ZodType<Prisma.ContentRatingFindManyArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentRatingOrderByWithRelationInputSchema.array(),
          ContentRatingOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentRatingWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentRatingScalarFieldEnumSchema,
          ContentRatingScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentRatingAggregateArgsSchema: z.ZodType<Prisma.ContentRatingAggregateArgs> =
  z
    .object({
      where: ContentRatingWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentRatingOrderByWithRelationInputSchema.array(),
          ContentRatingOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentRatingWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ContentRatingGroupByArgsSchema: z.ZodType<Prisma.ContentRatingGroupByArgs> =
  z
    .object({
      where: ContentRatingWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentRatingOrderByWithAggregationInputSchema.array(),
          ContentRatingOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ContentRatingScalarFieldEnumSchema.array(),
      having: ContentRatingScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ContentRatingFindUniqueArgsSchema: z.ZodType<Prisma.ContentRatingFindUniqueArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereUniqueInputSchema,
    })
    .strict();

export const ContentRatingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentRatingFindUniqueOrThrowArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereUniqueInputSchema,
    })
    .strict();

export const ContentFindFirstArgsSchema: z.ZodType<Prisma.ContentFindFirstArgs> =
  z
    .object({
      select: ContentSelectSchema.optional(),
      include: ContentIncludeSchema.optional(),
      where: ContentWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentOrderByWithRelationInputSchema.array(),
          ContentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentScalarFieldEnumSchema,
          ContentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentFindFirstOrThrowArgs> =
  z
    .object({
      select: ContentSelectSchema.optional(),
      include: ContentIncludeSchema.optional(),
      where: ContentWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentOrderByWithRelationInputSchema.array(),
          ContentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentScalarFieldEnumSchema,
          ContentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentFindManyArgsSchema: z.ZodType<Prisma.ContentFindManyArgs> =
  z
    .object({
      select: ContentSelectSchema.optional(),
      include: ContentIncludeSchema.optional(),
      where: ContentWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentOrderByWithRelationInputSchema.array(),
          ContentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentScalarFieldEnumSchema,
          ContentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentAggregateArgsSchema: z.ZodType<Prisma.ContentAggregateArgs> =
  z
    .object({
      where: ContentWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentOrderByWithRelationInputSchema.array(),
          ContentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ContentGroupByArgsSchema: z.ZodType<Prisma.ContentGroupByArgs> = z
  .object({
    where: ContentWhereInputSchema.optional(),
    orderBy: z
      .union([
        ContentOrderByWithAggregationInputSchema.array(),
        ContentOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ContentScalarFieldEnumSchema.array(),
    having: ContentScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ContentFindUniqueArgsSchema: z.ZodType<Prisma.ContentFindUniqueArgs> =
  z
    .object({
      select: ContentSelectSchema.optional(),
      include: ContentIncludeSchema.optional(),
      where: ContentWhereUniqueInputSchema,
    })
    .strict();

export const ContentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentFindUniqueOrThrowArgs> =
  z
    .object({
      select: ContentSelectSchema.optional(),
      include: ContentIncludeSchema.optional(),
      where: ContentWhereUniqueInputSchema,
    })
    .strict();

export const LanguageFindFirstArgsSchema: z.ZodType<Prisma.LanguageFindFirstArgs> =
  z
    .object({
      select: LanguageSelectSchema.optional(),
      include: LanguageIncludeSchema.optional(),
      where: LanguageWhereInputSchema.optional(),
      orderBy: z
        .union([
          LanguageOrderByWithRelationInputSchema.array(),
          LanguageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LanguageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          LanguageScalarFieldEnumSchema,
          LanguageScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LanguageFindFirstOrThrowArgs> =
  z
    .object({
      select: LanguageSelectSchema.optional(),
      include: LanguageIncludeSchema.optional(),
      where: LanguageWhereInputSchema.optional(),
      orderBy: z
        .union([
          LanguageOrderByWithRelationInputSchema.array(),
          LanguageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LanguageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          LanguageScalarFieldEnumSchema,
          LanguageScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageFindManyArgsSchema: z.ZodType<Prisma.LanguageFindManyArgs> =
  z
    .object({
      select: LanguageSelectSchema.optional(),
      include: LanguageIncludeSchema.optional(),
      where: LanguageWhereInputSchema.optional(),
      orderBy: z
        .union([
          LanguageOrderByWithRelationInputSchema.array(),
          LanguageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LanguageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          LanguageScalarFieldEnumSchema,
          LanguageScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const LanguageAggregateArgsSchema: z.ZodType<Prisma.LanguageAggregateArgs> =
  z
    .object({
      where: LanguageWhereInputSchema.optional(),
      orderBy: z
        .union([
          LanguageOrderByWithRelationInputSchema.array(),
          LanguageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LanguageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const LanguageGroupByArgsSchema: z.ZodType<Prisma.LanguageGroupByArgs> =
  z
    .object({
      where: LanguageWhereInputSchema.optional(),
      orderBy: z
        .union([
          LanguageOrderByWithAggregationInputSchema.array(),
          LanguageOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: LanguageScalarFieldEnumSchema.array(),
      having: LanguageScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const LanguageFindUniqueArgsSchema: z.ZodType<Prisma.LanguageFindUniqueArgs> =
  z
    .object({
      select: LanguageSelectSchema.optional(),
      include: LanguageIncludeSchema.optional(),
      where: LanguageWhereUniqueInputSchema,
    })
    .strict();

export const LanguageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LanguageFindUniqueOrThrowArgs> =
  z
    .object({
      select: LanguageSelectSchema.optional(),
      include: LanguageIncludeSchema.optional(),
      where: LanguageWhereUniqueInputSchema,
    })
    .strict();

export const SubtitleFindFirstArgsSchema: z.ZodType<Prisma.SubtitleFindFirstArgs> =
  z
    .object({
      select: SubtitleSelectSchema.optional(),
      include: SubtitleIncludeSchema.optional(),
      where: SubtitleWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubtitleOrderByWithRelationInputSchema.array(),
          SubtitleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubtitleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubtitleScalarFieldEnumSchema,
          SubtitleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubtitleFindFirstOrThrowArgs> =
  z
    .object({
      select: SubtitleSelectSchema.optional(),
      include: SubtitleIncludeSchema.optional(),
      where: SubtitleWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubtitleOrderByWithRelationInputSchema.array(),
          SubtitleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubtitleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubtitleScalarFieldEnumSchema,
          SubtitleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleFindManyArgsSchema: z.ZodType<Prisma.SubtitleFindManyArgs> =
  z
    .object({
      select: SubtitleSelectSchema.optional(),
      include: SubtitleIncludeSchema.optional(),
      where: SubtitleWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubtitleOrderByWithRelationInputSchema.array(),
          SubtitleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubtitleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubtitleScalarFieldEnumSchema,
          SubtitleScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubtitleAggregateArgsSchema: z.ZodType<Prisma.SubtitleAggregateArgs> =
  z
    .object({
      where: SubtitleWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubtitleOrderByWithRelationInputSchema.array(),
          SubtitleOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubtitleWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubtitleGroupByArgsSchema: z.ZodType<Prisma.SubtitleGroupByArgs> =
  z
    .object({
      where: SubtitleWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubtitleOrderByWithAggregationInputSchema.array(),
          SubtitleOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: SubtitleScalarFieldEnumSchema.array(),
      having: SubtitleScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubtitleFindUniqueArgsSchema: z.ZodType<Prisma.SubtitleFindUniqueArgs> =
  z
    .object({
      select: SubtitleSelectSchema.optional(),
      include: SubtitleIncludeSchema.optional(),
      where: SubtitleWhereUniqueInputSchema,
    })
    .strict();

export const SubtitleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubtitleFindUniqueOrThrowArgs> =
  z
    .object({
      select: SubtitleSelectSchema.optional(),
      include: SubtitleIncludeSchema.optional(),
      where: SubtitleWhereUniqueInputSchema,
    })
    .strict();

export const ContentMetadataFindFirstArgsSchema: z.ZodType<Prisma.ContentMetadataFindFirstArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentMetadataOrderByWithRelationInputSchema.array(),
          ContentMetadataOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentMetadataWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentMetadataScalarFieldEnumSchema,
          ContentMetadataScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContentMetadataFindFirstOrThrowArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentMetadataOrderByWithRelationInputSchema.array(),
          ContentMetadataOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentMetadataWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentMetadataScalarFieldEnumSchema,
          ContentMetadataScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataFindManyArgsSchema: z.ZodType<Prisma.ContentMetadataFindManyArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentMetadataOrderByWithRelationInputSchema.array(),
          ContentMetadataOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentMetadataWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ContentMetadataScalarFieldEnumSchema,
          ContentMetadataScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ContentMetadataAggregateArgsSchema: z.ZodType<Prisma.ContentMetadataAggregateArgs> =
  z
    .object({
      where: ContentMetadataWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentMetadataOrderByWithRelationInputSchema.array(),
          ContentMetadataOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ContentMetadataWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ContentMetadataGroupByArgsSchema: z.ZodType<Prisma.ContentMetadataGroupByArgs> =
  z
    .object({
      where: ContentMetadataWhereInputSchema.optional(),
      orderBy: z
        .union([
          ContentMetadataOrderByWithAggregationInputSchema.array(),
          ContentMetadataOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ContentMetadataScalarFieldEnumSchema.array(),
      having: ContentMetadataScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ContentMetadataFindUniqueArgsSchema: z.ZodType<Prisma.ContentMetadataFindUniqueArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereUniqueInputSchema,
    })
    .strict();

export const ContentMetadataFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContentMetadataFindUniqueOrThrowArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereUniqueInputSchema,
    })
    .strict();

export const NetflixAccountFindFirstArgsSchema: z.ZodType<Prisma.NetflixAccountFindFirstArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          NetflixAccountOrderByWithRelationInputSchema.array(),
          NetflixAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NetflixAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NetflixAccountScalarFieldEnumSchema,
          NetflixAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NetflixAccountFindFirstOrThrowArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          NetflixAccountOrderByWithRelationInputSchema.array(),
          NetflixAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NetflixAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NetflixAccountScalarFieldEnumSchema,
          NetflixAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountFindManyArgsSchema: z.ZodType<Prisma.NetflixAccountFindManyArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          NetflixAccountOrderByWithRelationInputSchema.array(),
          NetflixAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NetflixAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          NetflixAccountScalarFieldEnumSchema,
          NetflixAccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const NetflixAccountAggregateArgsSchema: z.ZodType<Prisma.NetflixAccountAggregateArgs> =
  z
    .object({
      where: NetflixAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          NetflixAccountOrderByWithRelationInputSchema.array(),
          NetflixAccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: NetflixAccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const NetflixAccountGroupByArgsSchema: z.ZodType<Prisma.NetflixAccountGroupByArgs> =
  z
    .object({
      where: NetflixAccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          NetflixAccountOrderByWithAggregationInputSchema.array(),
          NetflixAccountOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: NetflixAccountScalarFieldEnumSchema.array(),
      having: NetflixAccountScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const NetflixAccountFindUniqueArgsSchema: z.ZodType<Prisma.NetflixAccountFindUniqueArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereUniqueInputSchema,
    })
    .strict();

export const NetflixAccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NetflixAccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereUniqueInputSchema,
    })
    .strict();

export const PreviousPasswordHashFindFirstArgsSchema: z.ZodType<Prisma.PreviousPasswordHashFindFirstArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereInputSchema.optional(),
      orderBy: z
        .union([
          PreviousPasswordHashOrderByWithRelationInputSchema.array(),
          PreviousPasswordHashOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PreviousPasswordHashWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PreviousPasswordHashScalarFieldEnumSchema,
          PreviousPasswordHashScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PreviousPasswordHashFindFirstOrThrowArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereInputSchema.optional(),
      orderBy: z
        .union([
          PreviousPasswordHashOrderByWithRelationInputSchema.array(),
          PreviousPasswordHashOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PreviousPasswordHashWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PreviousPasswordHashScalarFieldEnumSchema,
          PreviousPasswordHashScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashFindManyArgsSchema: z.ZodType<Prisma.PreviousPasswordHashFindManyArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereInputSchema.optional(),
      orderBy: z
        .union([
          PreviousPasswordHashOrderByWithRelationInputSchema.array(),
          PreviousPasswordHashOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PreviousPasswordHashWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          PreviousPasswordHashScalarFieldEnumSchema,
          PreviousPasswordHashScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const PreviousPasswordHashAggregateArgsSchema: z.ZodType<Prisma.PreviousPasswordHashAggregateArgs> =
  z
    .object({
      where: PreviousPasswordHashWhereInputSchema.optional(),
      orderBy: z
        .union([
          PreviousPasswordHashOrderByWithRelationInputSchema.array(),
          PreviousPasswordHashOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PreviousPasswordHashWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const PreviousPasswordHashGroupByArgsSchema: z.ZodType<Prisma.PreviousPasswordHashGroupByArgs> =
  z
    .object({
      where: PreviousPasswordHashWhereInputSchema.optional(),
      orderBy: z
        .union([
          PreviousPasswordHashOrderByWithAggregationInputSchema.array(),
          PreviousPasswordHashOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: PreviousPasswordHashScalarFieldEnumSchema.array(),
      having:
        PreviousPasswordHashScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const PreviousPasswordHashFindUniqueArgsSchema: z.ZodType<Prisma.PreviousPasswordHashFindUniqueArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereUniqueInputSchema,
    })
    .strict();

export const PreviousPasswordHashFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PreviousPasswordHashFindUniqueOrThrowArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereUniqueInputSchema,
    })
    .strict();

export const ProfileFindFirstArgsSchema: z.ZodType<Prisma.ProfileFindFirstArgs> =
  z
    .object({
      select: ProfileSelectSchema.optional(),
      include: ProfileIncludeSchema.optional(),
      where: ProfileWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfileOrderByWithRelationInputSchema.array(),
          ProfileOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfileWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProfileScalarFieldEnumSchema,
          ProfileScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindFirstOrThrowArgs> =
  z
    .object({
      select: ProfileSelectSchema.optional(),
      include: ProfileIncludeSchema.optional(),
      where: ProfileWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfileOrderByWithRelationInputSchema.array(),
          ProfileOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfileWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProfileScalarFieldEnumSchema,
          ProfileScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProfileFindManyArgsSchema: z.ZodType<Prisma.ProfileFindManyArgs> =
  z
    .object({
      select: ProfileSelectSchema.optional(),
      include: ProfileIncludeSchema.optional(),
      where: ProfileWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfileOrderByWithRelationInputSchema.array(),
          ProfileOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfileWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ProfileScalarFieldEnumSchema,
          ProfileScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ProfileAggregateArgsSchema: z.ZodType<Prisma.ProfileAggregateArgs> =
  z
    .object({
      where: ProfileWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProfileOrderByWithRelationInputSchema.array(),
          ProfileOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProfileWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProfileGroupByArgsSchema: z.ZodType<Prisma.ProfileGroupByArgs> = z
  .object({
    where: ProfileWhereInputSchema.optional(),
    orderBy: z
      .union([
        ProfileOrderByWithAggregationInputSchema.array(),
        ProfileOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ProfileScalarFieldEnumSchema.array(),
    having: ProfileScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ProfileFindUniqueArgsSchema: z.ZodType<Prisma.ProfileFindUniqueArgs> =
  z
    .object({
      select: ProfileSelectSchema.optional(),
      include: ProfileIncludeSchema.optional(),
      where: ProfileWhereUniqueInputSchema,
    })
    .strict();

export const ProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProfileSelectSchema.optional(),
      include: ProfileIncludeSchema.optional(),
      where: ProfileWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionTypeFindFirstArgsSchema: z.ZodType<Prisma.SubscriptionTypeFindFirstArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionTypeOrderByWithRelationInputSchema.array(),
          SubscriptionTypeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionTypeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionTypeScalarFieldEnumSchema,
          SubscriptionTypeScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionTypeFindFirstOrThrowArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionTypeOrderByWithRelationInputSchema.array(),
          SubscriptionTypeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionTypeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionTypeScalarFieldEnumSchema,
          SubscriptionTypeScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeFindManyArgsSchema: z.ZodType<Prisma.SubscriptionTypeFindManyArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionTypeOrderByWithRelationInputSchema.array(),
          SubscriptionTypeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionTypeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionTypeScalarFieldEnumSchema,
          SubscriptionTypeScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionTypeAggregateArgsSchema: z.ZodType<Prisma.SubscriptionTypeAggregateArgs> =
  z
    .object({
      where: SubscriptionTypeWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionTypeOrderByWithRelationInputSchema.array(),
          SubscriptionTypeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionTypeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubscriptionTypeGroupByArgsSchema: z.ZodType<Prisma.SubscriptionTypeGroupByArgs> =
  z
    .object({
      where: SubscriptionTypeWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionTypeOrderByWithAggregationInputSchema.array(),
          SubscriptionTypeOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: SubscriptionTypeScalarFieldEnumSchema.array(),
      having: SubscriptionTypeScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubscriptionTypeFindUniqueArgsSchema: z.ZodType<Prisma.SubscriptionTypeFindUniqueArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionTypeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionTypeFindUniqueOrThrowArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionFindFirstArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionOrderByWithRelationInputSchema.array(),
          SubscriptionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionScalarFieldEnumSchema,
          SubscriptionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindFirstOrThrowArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionOrderByWithRelationInputSchema.array(),
          SubscriptionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionScalarFieldEnumSchema,
          SubscriptionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionFindManyArgsSchema: z.ZodType<Prisma.SubscriptionFindManyArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionOrderByWithRelationInputSchema.array(),
          SubscriptionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SubscriptionScalarFieldEnumSchema,
          SubscriptionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriptionAggregateArgsSchema: z.ZodType<Prisma.SubscriptionAggregateArgs> =
  z
    .object({
      where: SubscriptionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionOrderByWithRelationInputSchema.array(),
          SubscriptionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SubscriptionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubscriptionGroupByArgsSchema: z.ZodType<Prisma.SubscriptionGroupByArgs> =
  z
    .object({
      where: SubscriptionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SubscriptionOrderByWithAggregationInputSchema.array(),
          SubscriptionOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: SubscriptionScalarFieldEnumSchema.array(),
      having: SubscriptionScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SubscriptionFindUniqueArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SubscriptionFindUniqueOrThrowArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereUniqueInputSchema,
    })
    .strict();

export const InvoiceFindFirstArgsSchema: z.ZodType<Prisma.InvoiceFindFirstArgs> =
  z
    .object({
      select: InvoiceSelectSchema.optional(),
      include: InvoiceIncludeSchema.optional(),
      where: InvoiceWhereInputSchema.optional(),
      orderBy: z
        .union([
          InvoiceOrderByWithRelationInputSchema.array(),
          InvoiceOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: InvoiceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          InvoiceScalarFieldEnumSchema,
          InvoiceScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InvoiceFindFirstOrThrowArgs> =
  z
    .object({
      select: InvoiceSelectSchema.optional(),
      include: InvoiceIncludeSchema.optional(),
      where: InvoiceWhereInputSchema.optional(),
      orderBy: z
        .union([
          InvoiceOrderByWithRelationInputSchema.array(),
          InvoiceOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: InvoiceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          InvoiceScalarFieldEnumSchema,
          InvoiceScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceFindManyArgsSchema: z.ZodType<Prisma.InvoiceFindManyArgs> =
  z
    .object({
      select: InvoiceSelectSchema.optional(),
      include: InvoiceIncludeSchema.optional(),
      where: InvoiceWhereInputSchema.optional(),
      orderBy: z
        .union([
          InvoiceOrderByWithRelationInputSchema.array(),
          InvoiceOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: InvoiceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          InvoiceScalarFieldEnumSchema,
          InvoiceScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const InvoiceAggregateArgsSchema: z.ZodType<Prisma.InvoiceAggregateArgs> =
  z
    .object({
      where: InvoiceWhereInputSchema.optional(),
      orderBy: z
        .union([
          InvoiceOrderByWithRelationInputSchema.array(),
          InvoiceOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: InvoiceWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const InvoiceGroupByArgsSchema: z.ZodType<Prisma.InvoiceGroupByArgs> = z
  .object({
    where: InvoiceWhereInputSchema.optional(),
    orderBy: z
      .union([
        InvoiceOrderByWithAggregationInputSchema.array(),
        InvoiceOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: InvoiceScalarFieldEnumSchema.array(),
    having: InvoiceScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const InvoiceFindUniqueArgsSchema: z.ZodType<Prisma.InvoiceFindUniqueArgs> =
  z
    .object({
      select: InvoiceSelectSchema.optional(),
      include: InvoiceIncludeSchema.optional(),
      where: InvoiceWhereUniqueInputSchema,
    })
    .strict();

export const InvoiceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InvoiceFindUniqueOrThrowArgs> =
  z
    .object({
      select: InvoiceSelectSchema.optional(),
      include: InvoiceIncludeSchema.optional(),
      where: InvoiceWhereUniqueInputSchema,
    })
    .strict();

export const ViewingHistoryFindFirstArgsSchema: z.ZodType<Prisma.ViewingHistoryFindFirstArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          ViewingHistoryOrderByWithRelationInputSchema.array(),
          ViewingHistoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ViewingHistoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ViewingHistoryScalarFieldEnumSchema,
          ViewingHistoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ViewingHistoryFindFirstOrThrowArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          ViewingHistoryOrderByWithRelationInputSchema.array(),
          ViewingHistoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ViewingHistoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ViewingHistoryScalarFieldEnumSchema,
          ViewingHistoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryFindManyArgsSchema: z.ZodType<Prisma.ViewingHistoryFindManyArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          ViewingHistoryOrderByWithRelationInputSchema.array(),
          ViewingHistoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ViewingHistoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          ViewingHistoryScalarFieldEnumSchema,
          ViewingHistoryScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const ViewingHistoryAggregateArgsSchema: z.ZodType<Prisma.ViewingHistoryAggregateArgs> =
  z
    .object({
      where: ViewingHistoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          ViewingHistoryOrderByWithRelationInputSchema.array(),
          ViewingHistoryOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ViewingHistoryWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ViewingHistoryGroupByArgsSchema: z.ZodType<Prisma.ViewingHistoryGroupByArgs> =
  z
    .object({
      where: ViewingHistoryWhereInputSchema.optional(),
      orderBy: z
        .union([
          ViewingHistoryOrderByWithAggregationInputSchema.array(),
          ViewingHistoryOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ViewingHistoryScalarFieldEnumSchema.array(),
      having: ViewingHistoryScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ViewingHistoryFindUniqueArgsSchema: z.ZodType<Prisma.ViewingHistoryFindUniqueArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereUniqueInputSchema,
    })
    .strict();

export const ViewingHistoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ViewingHistoryFindUniqueOrThrowArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereUniqueInputSchema,
    })
    .strict();

export const WatchlistFindFirstArgsSchema: z.ZodType<Prisma.WatchlistFindFirstArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereInputSchema.optional(),
      orderBy: z
        .union([
          WatchlistOrderByWithRelationInputSchema.array(),
          WatchlistOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: WatchlistWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          WatchlistScalarFieldEnumSchema,
          WatchlistScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.WatchlistFindFirstOrThrowArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereInputSchema.optional(),
      orderBy: z
        .union([
          WatchlistOrderByWithRelationInputSchema.array(),
          WatchlistOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: WatchlistWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          WatchlistScalarFieldEnumSchema,
          WatchlistScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistFindManyArgsSchema: z.ZodType<Prisma.WatchlistFindManyArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereInputSchema.optional(),
      orderBy: z
        .union([
          WatchlistOrderByWithRelationInputSchema.array(),
          WatchlistOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: WatchlistWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          WatchlistScalarFieldEnumSchema,
          WatchlistScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const WatchlistAggregateArgsSchema: z.ZodType<Prisma.WatchlistAggregateArgs> =
  z
    .object({
      where: WatchlistWhereInputSchema.optional(),
      orderBy: z
        .union([
          WatchlistOrderByWithRelationInputSchema.array(),
          WatchlistOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: WatchlistWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const WatchlistGroupByArgsSchema: z.ZodType<Prisma.WatchlistGroupByArgs> =
  z
    .object({
      where: WatchlistWhereInputSchema.optional(),
      orderBy: z
        .union([
          WatchlistOrderByWithAggregationInputSchema.array(),
          WatchlistOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: WatchlistScalarFieldEnumSchema.array(),
      having: WatchlistScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const WatchlistFindUniqueArgsSchema: z.ZodType<Prisma.WatchlistFindUniqueArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereUniqueInputSchema,
    })
    .strict();

export const WatchlistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.WatchlistFindUniqueOrThrowArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereUniqueInputSchema,
    })
    .strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          SessionScalarFieldEnumSchema,
          SessionScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
      orderBy: z
        .union([
          SessionOrderByWithRelationInputSchema.array(),
          SessionOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SessionWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z
  .object({
    where: SessionWhereInputSchema.optional(),
    orderBy: z
      .union([
        SessionOrderByWithAggregationInputSchema.array(),
        SessionOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: SessionScalarFieldEnumSchema.array(),
    having: SessionScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> =
  z
    .object({
      select: SessionSelectSchema.optional(),
      include: SessionIncludeSchema.optional(),
      where: SessionWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          AccountScalarFieldEnumSchema,
          AccountScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
      orderBy: z
        .union([
          AccountOrderByWithRelationInputSchema.array(),
          AccountOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AccountWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z
  .object({
    where: AccountWhereInputSchema.optional(),
    orderBy: z
      .union([
        AccountOrderByWithAggregationInputSchema.array(),
        AccountOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AccountScalarFieldEnumSchema.array(),
    having: AccountScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> =
  z
    .object({
      select: AccountSelectSchema.optional(),
      include: AccountIncludeSchema.optional(),
      where: AccountWhereUniqueInputSchema,
    })
    .strict();

export const VerificationFindFirstArgsSchema: z.ZodType<Prisma.VerificationFindFirstArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindFirstOrThrowArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationFindManyArgsSchema: z.ZodType<Prisma.VerificationFindManyArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          VerificationScalarFieldEnumSchema,
          VerificationScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const VerificationAggregateArgsSchema: z.ZodType<Prisma.VerificationAggregateArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithRelationInputSchema.array(),
          VerificationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: VerificationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationGroupByArgsSchema: z.ZodType<Prisma.VerificationGroupByArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
      orderBy: z
        .union([
          VerificationOrderByWithAggregationInputSchema.array(),
          VerificationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: VerificationScalarFieldEnumSchema.array(),
      having: VerificationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const VerificationFindUniqueArgsSchema: z.ZodType<Prisma.VerificationFindUniqueArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationFindUniqueOrThrowArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const JwksFindFirstArgsSchema: z.ZodType<Prisma.JwksFindFirstArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    where: JwksWhereInputSchema.optional(),
    orderBy: z
      .union([
        JwksOrderByWithRelationInputSchema.array(),
        JwksOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: JwksWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([JwksScalarFieldEnumSchema, JwksScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const JwksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JwksFindFirstOrThrowArgs> =
  z
    .object({
      select: JwksSelectSchema.optional(),
      where: JwksWhereInputSchema.optional(),
      orderBy: z
        .union([
          JwksOrderByWithRelationInputSchema.array(),
          JwksOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: JwksWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([JwksScalarFieldEnumSchema, JwksScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const JwksFindManyArgsSchema: z.ZodType<Prisma.JwksFindManyArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    where: JwksWhereInputSchema.optional(),
    orderBy: z
      .union([
        JwksOrderByWithRelationInputSchema.array(),
        JwksOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: JwksWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([JwksScalarFieldEnumSchema, JwksScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const JwksAggregateArgsSchema: z.ZodType<Prisma.JwksAggregateArgs> = z
  .object({
    where: JwksWhereInputSchema.optional(),
    orderBy: z
      .union([
        JwksOrderByWithRelationInputSchema.array(),
        JwksOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: JwksWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const JwksGroupByArgsSchema: z.ZodType<Prisma.JwksGroupByArgs> = z
  .object({
    where: JwksWhereInputSchema.optional(),
    orderBy: z
      .union([
        JwksOrderByWithAggregationInputSchema.array(),
        JwksOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: JwksScalarFieldEnumSchema.array(),
    having: JwksScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const JwksFindUniqueArgsSchema: z.ZodType<Prisma.JwksFindUniqueArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    where: JwksWhereUniqueInputSchema,
  })
  .strict();

export const JwksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JwksFindUniqueOrThrowArgs> =
  z
    .object({
      select: JwksSelectSchema.optional(),
      where: JwksWhereUniqueInputSchema,
    })
    .strict();

export const GenreCreateArgsSchema: z.ZodType<Prisma.GenreCreateArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    data: z.union([GenreCreateInputSchema, GenreUncheckedCreateInputSchema]),
  })
  .strict();

export const GenreUpsertArgsSchema: z.ZodType<Prisma.GenreUpsertArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    where: GenreWhereUniqueInputSchema,
    create: z.union([GenreCreateInputSchema, GenreUncheckedCreateInputSchema]),
    update: z.union([GenreUpdateInputSchema, GenreUncheckedUpdateInputSchema]),
  })
  .strict();

export const GenreCreateManyArgsSchema: z.ZodType<Prisma.GenreCreateManyArgs> =
  z
    .object({
      data: z.union([
        GenreCreateManyInputSchema,
        GenreCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GenreCreateManyAndReturnArgsSchema: z.ZodType<Prisma.GenreCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        GenreCreateManyInputSchema,
        GenreCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const GenreDeleteArgsSchema: z.ZodType<Prisma.GenreDeleteArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    where: GenreWhereUniqueInputSchema,
  })
  .strict();

export const GenreUpdateArgsSchema: z.ZodType<Prisma.GenreUpdateArgs> = z
  .object({
    select: GenreSelectSchema.optional(),
    include: GenreIncludeSchema.optional(),
    data: z.union([GenreUpdateInputSchema, GenreUncheckedUpdateInputSchema]),
    where: GenreWhereUniqueInputSchema,
  })
  .strict();

export const GenreUpdateManyArgsSchema: z.ZodType<Prisma.GenreUpdateManyArgs> =
  z
    .object({
      data: z.union([
        GenreUpdateManyMutationInputSchema,
        GenreUncheckedUpdateManyInputSchema,
      ]),
      where: GenreWhereInputSchema.optional(),
    })
    .strict();

export const GenreDeleteManyArgsSchema: z.ZodType<Prisma.GenreDeleteManyArgs> =
  z
    .object({
      where: GenreWhereInputSchema.optional(),
    })
    .strict();

export const ContentRatingCreateArgsSchema: z.ZodType<Prisma.ContentRatingCreateArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      data: z.union([
        ContentRatingCreateInputSchema,
        ContentRatingUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ContentRatingUpsertArgsSchema: z.ZodType<Prisma.ContentRatingUpsertArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereUniqueInputSchema,
      create: z.union([
        ContentRatingCreateInputSchema,
        ContentRatingUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ContentRatingUpdateInputSchema,
        ContentRatingUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ContentRatingCreateManyArgsSchema: z.ZodType<Prisma.ContentRatingCreateManyArgs> =
  z
    .object({
      data: z.union([
        ContentRatingCreateManyInputSchema,
        ContentRatingCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentRatingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContentRatingCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ContentRatingCreateManyInputSchema,
        ContentRatingCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentRatingDeleteArgsSchema: z.ZodType<Prisma.ContentRatingDeleteArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      where: ContentRatingWhereUniqueInputSchema,
    })
    .strict();

export const ContentRatingUpdateArgsSchema: z.ZodType<Prisma.ContentRatingUpdateArgs> =
  z
    .object({
      select: ContentRatingSelectSchema.optional(),
      include: ContentRatingIncludeSchema.optional(),
      data: z.union([
        ContentRatingUpdateInputSchema,
        ContentRatingUncheckedUpdateInputSchema,
      ]),
      where: ContentRatingWhereUniqueInputSchema,
    })
    .strict();

export const ContentRatingUpdateManyArgsSchema: z.ZodType<Prisma.ContentRatingUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ContentRatingUpdateManyMutationInputSchema,
        ContentRatingUncheckedUpdateManyInputSchema,
      ]),
      where: ContentRatingWhereInputSchema.optional(),
    })
    .strict();

export const ContentRatingDeleteManyArgsSchema: z.ZodType<Prisma.ContentRatingDeleteManyArgs> =
  z
    .object({
      where: ContentRatingWhereInputSchema.optional(),
    })
    .strict();

export const ContentCreateArgsSchema: z.ZodType<Prisma.ContentCreateArgs> = z
  .object({
    select: ContentSelectSchema.optional(),
    include: ContentIncludeSchema.optional(),
    data: z.union([
      ContentCreateInputSchema,
      ContentUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ContentUpsertArgsSchema: z.ZodType<Prisma.ContentUpsertArgs> = z
  .object({
    select: ContentSelectSchema.optional(),
    include: ContentIncludeSchema.optional(),
    where: ContentWhereUniqueInputSchema,
    create: z.union([
      ContentCreateInputSchema,
      ContentUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ContentUpdateInputSchema,
      ContentUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ContentCreateManyArgsSchema: z.ZodType<Prisma.ContentCreateManyArgs> =
  z
    .object({
      data: z.union([
        ContentCreateManyInputSchema,
        ContentCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContentCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ContentCreateManyInputSchema,
        ContentCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentDeleteArgsSchema: z.ZodType<Prisma.ContentDeleteArgs> = z
  .object({
    select: ContentSelectSchema.optional(),
    include: ContentIncludeSchema.optional(),
    where: ContentWhereUniqueInputSchema,
  })
  .strict();

export const ContentUpdateArgsSchema: z.ZodType<Prisma.ContentUpdateArgs> = z
  .object({
    select: ContentSelectSchema.optional(),
    include: ContentIncludeSchema.optional(),
    data: z.union([
      ContentUpdateInputSchema,
      ContentUncheckedUpdateInputSchema,
    ]),
    where: ContentWhereUniqueInputSchema,
  })
  .strict();

export const ContentUpdateManyArgsSchema: z.ZodType<Prisma.ContentUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ContentUpdateManyMutationInputSchema,
        ContentUncheckedUpdateManyInputSchema,
      ]),
      where: ContentWhereInputSchema.optional(),
    })
    .strict();

export const ContentDeleteManyArgsSchema: z.ZodType<Prisma.ContentDeleteManyArgs> =
  z
    .object({
      where: ContentWhereInputSchema.optional(),
    })
    .strict();

export const LanguageCreateArgsSchema: z.ZodType<Prisma.LanguageCreateArgs> = z
  .object({
    select: LanguageSelectSchema.optional(),
    include: LanguageIncludeSchema.optional(),
    data: z.union([
      LanguageCreateInputSchema,
      LanguageUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const LanguageUpsertArgsSchema: z.ZodType<Prisma.LanguageUpsertArgs> = z
  .object({
    select: LanguageSelectSchema.optional(),
    include: LanguageIncludeSchema.optional(),
    where: LanguageWhereUniqueInputSchema,
    create: z.union([
      LanguageCreateInputSchema,
      LanguageUncheckedCreateInputSchema,
    ]),
    update: z.union([
      LanguageUpdateInputSchema,
      LanguageUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const LanguageCreateManyArgsSchema: z.ZodType<Prisma.LanguageCreateManyArgs> =
  z
    .object({
      data: z.union([
        LanguageCreateManyInputSchema,
        LanguageCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LanguageCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LanguageCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        LanguageCreateManyInputSchema,
        LanguageCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LanguageDeleteArgsSchema: z.ZodType<Prisma.LanguageDeleteArgs> = z
  .object({
    select: LanguageSelectSchema.optional(),
    include: LanguageIncludeSchema.optional(),
    where: LanguageWhereUniqueInputSchema,
  })
  .strict();

export const LanguageUpdateArgsSchema: z.ZodType<Prisma.LanguageUpdateArgs> = z
  .object({
    select: LanguageSelectSchema.optional(),
    include: LanguageIncludeSchema.optional(),
    data: z.union([
      LanguageUpdateInputSchema,
      LanguageUncheckedUpdateInputSchema,
    ]),
    where: LanguageWhereUniqueInputSchema,
  })
  .strict();

export const LanguageUpdateManyArgsSchema: z.ZodType<Prisma.LanguageUpdateManyArgs> =
  z
    .object({
      data: z.union([
        LanguageUpdateManyMutationInputSchema,
        LanguageUncheckedUpdateManyInputSchema,
      ]),
      where: LanguageWhereInputSchema.optional(),
    })
    .strict();

export const LanguageDeleteManyArgsSchema: z.ZodType<Prisma.LanguageDeleteManyArgs> =
  z
    .object({
      where: LanguageWhereInputSchema.optional(),
    })
    .strict();

export const SubtitleCreateArgsSchema: z.ZodType<Prisma.SubtitleCreateArgs> = z
  .object({
    select: SubtitleSelectSchema.optional(),
    include: SubtitleIncludeSchema.optional(),
    data: z.union([
      SubtitleCreateInputSchema,
      SubtitleUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const SubtitleUpsertArgsSchema: z.ZodType<Prisma.SubtitleUpsertArgs> = z
  .object({
    select: SubtitleSelectSchema.optional(),
    include: SubtitleIncludeSchema.optional(),
    where: SubtitleWhereUniqueInputSchema,
    create: z.union([
      SubtitleCreateInputSchema,
      SubtitleUncheckedCreateInputSchema,
    ]),
    update: z.union([
      SubtitleUpdateInputSchema,
      SubtitleUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const SubtitleCreateManyArgsSchema: z.ZodType<Prisma.SubtitleCreateManyArgs> =
  z
    .object({
      data: z.union([
        SubtitleCreateManyInputSchema,
        SubtitleCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubtitleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubtitleCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SubtitleCreateManyInputSchema,
        SubtitleCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubtitleDeleteArgsSchema: z.ZodType<Prisma.SubtitleDeleteArgs> = z
  .object({
    select: SubtitleSelectSchema.optional(),
    include: SubtitleIncludeSchema.optional(),
    where: SubtitleWhereUniqueInputSchema,
  })
  .strict();

export const SubtitleUpdateArgsSchema: z.ZodType<Prisma.SubtitleUpdateArgs> = z
  .object({
    select: SubtitleSelectSchema.optional(),
    include: SubtitleIncludeSchema.optional(),
    data: z.union([
      SubtitleUpdateInputSchema,
      SubtitleUncheckedUpdateInputSchema,
    ]),
    where: SubtitleWhereUniqueInputSchema,
  })
  .strict();

export const SubtitleUpdateManyArgsSchema: z.ZodType<Prisma.SubtitleUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SubtitleUpdateManyMutationInputSchema,
        SubtitleUncheckedUpdateManyInputSchema,
      ]),
      where: SubtitleWhereInputSchema.optional(),
    })
    .strict();

export const SubtitleDeleteManyArgsSchema: z.ZodType<Prisma.SubtitleDeleteManyArgs> =
  z
    .object({
      where: SubtitleWhereInputSchema.optional(),
    })
    .strict();

export const ContentMetadataCreateArgsSchema: z.ZodType<Prisma.ContentMetadataCreateArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      data: z.union([
        ContentMetadataCreateInputSchema,
        ContentMetadataUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ContentMetadataUpsertArgsSchema: z.ZodType<Prisma.ContentMetadataUpsertArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereUniqueInputSchema,
      create: z.union([
        ContentMetadataCreateInputSchema,
        ContentMetadataUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ContentMetadataUpdateInputSchema,
        ContentMetadataUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ContentMetadataCreateManyArgsSchema: z.ZodType<Prisma.ContentMetadataCreateManyArgs> =
  z
    .object({
      data: z.union([
        ContentMetadataCreateManyInputSchema,
        ContentMetadataCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContentMetadataCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ContentMetadataCreateManyInputSchema,
        ContentMetadataCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ContentMetadataDeleteArgsSchema: z.ZodType<Prisma.ContentMetadataDeleteArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      where: ContentMetadataWhereUniqueInputSchema,
    })
    .strict();

export const ContentMetadataUpdateArgsSchema: z.ZodType<Prisma.ContentMetadataUpdateArgs> =
  z
    .object({
      select: ContentMetadataSelectSchema.optional(),
      include: ContentMetadataIncludeSchema.optional(),
      data: z.union([
        ContentMetadataUpdateInputSchema,
        ContentMetadataUncheckedUpdateInputSchema,
      ]),
      where: ContentMetadataWhereUniqueInputSchema,
    })
    .strict();

export const ContentMetadataUpdateManyArgsSchema: z.ZodType<Prisma.ContentMetadataUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ContentMetadataUpdateManyMutationInputSchema,
        ContentMetadataUncheckedUpdateManyInputSchema,
      ]),
      where: ContentMetadataWhereInputSchema.optional(),
    })
    .strict();

export const ContentMetadataDeleteManyArgsSchema: z.ZodType<Prisma.ContentMetadataDeleteManyArgs> =
  z
    .object({
      where: ContentMetadataWhereInputSchema.optional(),
    })
    .strict();

export const NetflixAccountCreateArgsSchema: z.ZodType<Prisma.NetflixAccountCreateArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      data: z.union([
        NetflixAccountCreateInputSchema,
        NetflixAccountUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const NetflixAccountUpsertArgsSchema: z.ZodType<Prisma.NetflixAccountUpsertArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereUniqueInputSchema,
      create: z.union([
        NetflixAccountCreateInputSchema,
        NetflixAccountUncheckedCreateInputSchema,
      ]),
      update: z.union([
        NetflixAccountUpdateInputSchema,
        NetflixAccountUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const NetflixAccountCreateManyArgsSchema: z.ZodType<Prisma.NetflixAccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        NetflixAccountCreateManyInputSchema,
        NetflixAccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const NetflixAccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NetflixAccountCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        NetflixAccountCreateManyInputSchema,
        NetflixAccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const NetflixAccountDeleteArgsSchema: z.ZodType<Prisma.NetflixAccountDeleteArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      where: NetflixAccountWhereUniqueInputSchema,
    })
    .strict();

export const NetflixAccountUpdateArgsSchema: z.ZodType<Prisma.NetflixAccountUpdateArgs> =
  z
    .object({
      select: NetflixAccountSelectSchema.optional(),
      include: NetflixAccountIncludeSchema.optional(),
      data: z.union([
        NetflixAccountUpdateInputSchema,
        NetflixAccountUncheckedUpdateInputSchema,
      ]),
      where: NetflixAccountWhereUniqueInputSchema,
    })
    .strict();

export const NetflixAccountUpdateManyArgsSchema: z.ZodType<Prisma.NetflixAccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        NetflixAccountUpdateManyMutationInputSchema,
        NetflixAccountUncheckedUpdateManyInputSchema,
      ]),
      where: NetflixAccountWhereInputSchema.optional(),
    })
    .strict();

export const NetflixAccountDeleteManyArgsSchema: z.ZodType<Prisma.NetflixAccountDeleteManyArgs> =
  z
    .object({
      where: NetflixAccountWhereInputSchema.optional(),
    })
    .strict();

export const PreviousPasswordHashCreateArgsSchema: z.ZodType<Prisma.PreviousPasswordHashCreateArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      data: z.union([
        PreviousPasswordHashCreateInputSchema,
        PreviousPasswordHashUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const PreviousPasswordHashUpsertArgsSchema: z.ZodType<Prisma.PreviousPasswordHashUpsertArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereUniqueInputSchema,
      create: z.union([
        PreviousPasswordHashCreateInputSchema,
        PreviousPasswordHashUncheckedCreateInputSchema,
      ]),
      update: z.union([
        PreviousPasswordHashUpdateInputSchema,
        PreviousPasswordHashUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const PreviousPasswordHashCreateManyArgsSchema: z.ZodType<Prisma.PreviousPasswordHashCreateManyArgs> =
  z
    .object({
      data: z.union([
        PreviousPasswordHashCreateManyInputSchema,
        PreviousPasswordHashCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PreviousPasswordHashCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PreviousPasswordHashCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        PreviousPasswordHashCreateManyInputSchema,
        PreviousPasswordHashCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PreviousPasswordHashDeleteArgsSchema: z.ZodType<Prisma.PreviousPasswordHashDeleteArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      where: PreviousPasswordHashWhereUniqueInputSchema,
    })
    .strict();

export const PreviousPasswordHashUpdateArgsSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateArgs> =
  z
    .object({
      select: PreviousPasswordHashSelectSchema.optional(),
      include: PreviousPasswordHashIncludeSchema.optional(),
      data: z.union([
        PreviousPasswordHashUpdateInputSchema,
        PreviousPasswordHashUncheckedUpdateInputSchema,
      ]),
      where: PreviousPasswordHashWhereUniqueInputSchema,
    })
    .strict();

export const PreviousPasswordHashUpdateManyArgsSchema: z.ZodType<Prisma.PreviousPasswordHashUpdateManyArgs> =
  z
    .object({
      data: z.union([
        PreviousPasswordHashUpdateManyMutationInputSchema,
        PreviousPasswordHashUncheckedUpdateManyInputSchema,
      ]),
      where: PreviousPasswordHashWhereInputSchema.optional(),
    })
    .strict();

export const PreviousPasswordHashDeleteManyArgsSchema: z.ZodType<Prisma.PreviousPasswordHashDeleteManyArgs> =
  z
    .object({
      where: PreviousPasswordHashWhereInputSchema.optional(),
    })
    .strict();

export const ProfileCreateArgsSchema: z.ZodType<Prisma.ProfileCreateArgs> = z
  .object({
    select: ProfileSelectSchema.optional(),
    include: ProfileIncludeSchema.optional(),
    data: z.union([
      ProfileCreateInputSchema,
      ProfileUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ProfileUpsertArgsSchema: z.ZodType<Prisma.ProfileUpsertArgs> = z
  .object({
    select: ProfileSelectSchema.optional(),
    include: ProfileIncludeSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
    create: z.union([
      ProfileCreateInputSchema,
      ProfileUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProfileUpdateInputSchema,
      ProfileUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ProfileCreateManyArgsSchema: z.ZodType<Prisma.ProfileCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProfileCreateManyInputSchema,
        ProfileCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProfileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProfileCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ProfileCreateManyInputSchema,
        ProfileCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProfileDeleteArgsSchema: z.ZodType<Prisma.ProfileDeleteArgs> = z
  .object({
    select: ProfileSelectSchema.optional(),
    include: ProfileIncludeSchema.optional(),
    where: ProfileWhereUniqueInputSchema,
  })
  .strict();

export const ProfileUpdateArgsSchema: z.ZodType<Prisma.ProfileUpdateArgs> = z
  .object({
    select: ProfileSelectSchema.optional(),
    include: ProfileIncludeSchema.optional(),
    data: z.union([
      ProfileUpdateInputSchema,
      ProfileUncheckedUpdateInputSchema,
    ]),
    where: ProfileWhereUniqueInputSchema,
  })
  .strict();

export const ProfileUpdateManyArgsSchema: z.ZodType<Prisma.ProfileUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProfileUpdateManyMutationInputSchema,
        ProfileUncheckedUpdateManyInputSchema,
      ]),
      where: ProfileWhereInputSchema.optional(),
    })
    .strict();

export const ProfileDeleteManyArgsSchema: z.ZodType<Prisma.ProfileDeleteManyArgs> =
  z
    .object({
      where: ProfileWhereInputSchema.optional(),
    })
    .strict();

export const SubscriptionTypeCreateArgsSchema: z.ZodType<Prisma.SubscriptionTypeCreateArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      data: z.union([
        SubscriptionTypeCreateInputSchema,
        SubscriptionTypeUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const SubscriptionTypeUpsertArgsSchema: z.ZodType<Prisma.SubscriptionTypeUpsertArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereUniqueInputSchema,
      create: z.union([
        SubscriptionTypeCreateInputSchema,
        SubscriptionTypeUncheckedCreateInputSchema,
      ]),
      update: z.union([
        SubscriptionTypeUpdateInputSchema,
        SubscriptionTypeUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const SubscriptionTypeCreateManyArgsSchema: z.ZodType<Prisma.SubscriptionTypeCreateManyArgs> =
  z
    .object({
      data: z.union([
        SubscriptionTypeCreateManyInputSchema,
        SubscriptionTypeCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionTypeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubscriptionTypeCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SubscriptionTypeCreateManyInputSchema,
        SubscriptionTypeCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionTypeDeleteArgsSchema: z.ZodType<Prisma.SubscriptionTypeDeleteArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      where: SubscriptionTypeWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionTypeUpdateArgsSchema: z.ZodType<Prisma.SubscriptionTypeUpdateArgs> =
  z
    .object({
      select: SubscriptionTypeSelectSchema.optional(),
      include: SubscriptionTypeIncludeSchema.optional(),
      data: z.union([
        SubscriptionTypeUpdateInputSchema,
        SubscriptionTypeUncheckedUpdateInputSchema,
      ]),
      where: SubscriptionTypeWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionTypeUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionTypeUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SubscriptionTypeUpdateManyMutationInputSchema,
        SubscriptionTypeUncheckedUpdateManyInputSchema,
      ]),
      where: SubscriptionTypeWhereInputSchema.optional(),
    })
    .strict();

export const SubscriptionTypeDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionTypeDeleteManyArgs> =
  z
    .object({
      where: SubscriptionTypeWhereInputSchema.optional(),
    })
    .strict();

export const SubscriptionCreateArgsSchema: z.ZodType<Prisma.SubscriptionCreateArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      data: z.union([
        SubscriptionCreateInputSchema,
        SubscriptionUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const SubscriptionUpsertArgsSchema: z.ZodType<Prisma.SubscriptionUpsertArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereUniqueInputSchema,
      create: z.union([
        SubscriptionCreateInputSchema,
        SubscriptionUncheckedCreateInputSchema,
      ]),
      update: z.union([
        SubscriptionUpdateInputSchema,
        SubscriptionUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const SubscriptionCreateManyArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyArgs> =
  z
    .object({
      data: z.union([
        SubscriptionCreateManyInputSchema,
        SubscriptionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SubscriptionCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SubscriptionCreateManyInputSchema,
        SubscriptionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SubscriptionDeleteArgsSchema: z.ZodType<Prisma.SubscriptionDeleteArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      where: SubscriptionWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionUpdateArgsSchema: z.ZodType<Prisma.SubscriptionUpdateArgs> =
  z
    .object({
      select: SubscriptionSelectSchema.optional(),
      include: SubscriptionIncludeSchema.optional(),
      data: z.union([
        SubscriptionUpdateInputSchema,
        SubscriptionUncheckedUpdateInputSchema,
      ]),
      where: SubscriptionWhereUniqueInputSchema,
    })
    .strict();

export const SubscriptionUpdateManyArgsSchema: z.ZodType<Prisma.SubscriptionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SubscriptionUpdateManyMutationInputSchema,
        SubscriptionUncheckedUpdateManyInputSchema,
      ]),
      where: SubscriptionWhereInputSchema.optional(),
    })
    .strict();

export const SubscriptionDeleteManyArgsSchema: z.ZodType<Prisma.SubscriptionDeleteManyArgs> =
  z
    .object({
      where: SubscriptionWhereInputSchema.optional(),
    })
    .strict();

export const InvoiceCreateArgsSchema: z.ZodType<Prisma.InvoiceCreateArgs> = z
  .object({
    select: InvoiceSelectSchema.optional(),
    include: InvoiceIncludeSchema.optional(),
    data: z.union([
      InvoiceCreateInputSchema,
      InvoiceUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const InvoiceUpsertArgsSchema: z.ZodType<Prisma.InvoiceUpsertArgs> = z
  .object({
    select: InvoiceSelectSchema.optional(),
    include: InvoiceIncludeSchema.optional(),
    where: InvoiceWhereUniqueInputSchema,
    create: z.union([
      InvoiceCreateInputSchema,
      InvoiceUncheckedCreateInputSchema,
    ]),
    update: z.union([
      InvoiceUpdateInputSchema,
      InvoiceUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const InvoiceCreateManyArgsSchema: z.ZodType<Prisma.InvoiceCreateManyArgs> =
  z
    .object({
      data: z.union([
        InvoiceCreateManyInputSchema,
        InvoiceCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InvoiceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.InvoiceCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        InvoiceCreateManyInputSchema,
        InvoiceCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InvoiceDeleteArgsSchema: z.ZodType<Prisma.InvoiceDeleteArgs> = z
  .object({
    select: InvoiceSelectSchema.optional(),
    include: InvoiceIncludeSchema.optional(),
    where: InvoiceWhereUniqueInputSchema,
  })
  .strict();

export const InvoiceUpdateArgsSchema: z.ZodType<Prisma.InvoiceUpdateArgs> = z
  .object({
    select: InvoiceSelectSchema.optional(),
    include: InvoiceIncludeSchema.optional(),
    data: z.union([
      InvoiceUpdateInputSchema,
      InvoiceUncheckedUpdateInputSchema,
    ]),
    where: InvoiceWhereUniqueInputSchema,
  })
  .strict();

export const InvoiceUpdateManyArgsSchema: z.ZodType<Prisma.InvoiceUpdateManyArgs> =
  z
    .object({
      data: z.union([
        InvoiceUpdateManyMutationInputSchema,
        InvoiceUncheckedUpdateManyInputSchema,
      ]),
      where: InvoiceWhereInputSchema.optional(),
    })
    .strict();

export const InvoiceDeleteManyArgsSchema: z.ZodType<Prisma.InvoiceDeleteManyArgs> =
  z
    .object({
      where: InvoiceWhereInputSchema.optional(),
    })
    .strict();

export const ViewingHistoryCreateArgsSchema: z.ZodType<Prisma.ViewingHistoryCreateArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      data: z.union([
        ViewingHistoryCreateInputSchema,
        ViewingHistoryUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ViewingHistoryUpsertArgsSchema: z.ZodType<Prisma.ViewingHistoryUpsertArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereUniqueInputSchema,
      create: z.union([
        ViewingHistoryCreateInputSchema,
        ViewingHistoryUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ViewingHistoryUpdateInputSchema,
        ViewingHistoryUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ViewingHistoryCreateManyArgsSchema: z.ZodType<Prisma.ViewingHistoryCreateManyArgs> =
  z
    .object({
      data: z.union([
        ViewingHistoryCreateManyInputSchema,
        ViewingHistoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ViewingHistoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ViewingHistoryCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        ViewingHistoryCreateManyInputSchema,
        ViewingHistoryCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ViewingHistoryDeleteArgsSchema: z.ZodType<Prisma.ViewingHistoryDeleteArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      where: ViewingHistoryWhereUniqueInputSchema,
    })
    .strict();

export const ViewingHistoryUpdateArgsSchema: z.ZodType<Prisma.ViewingHistoryUpdateArgs> =
  z
    .object({
      select: ViewingHistorySelectSchema.optional(),
      include: ViewingHistoryIncludeSchema.optional(),
      data: z.union([
        ViewingHistoryUpdateInputSchema,
        ViewingHistoryUncheckedUpdateInputSchema,
      ]),
      where: ViewingHistoryWhereUniqueInputSchema,
    })
    .strict();

export const ViewingHistoryUpdateManyArgsSchema: z.ZodType<Prisma.ViewingHistoryUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ViewingHistoryUpdateManyMutationInputSchema,
        ViewingHistoryUncheckedUpdateManyInputSchema,
      ]),
      where: ViewingHistoryWhereInputSchema.optional(),
    })
    .strict();

export const ViewingHistoryDeleteManyArgsSchema: z.ZodType<Prisma.ViewingHistoryDeleteManyArgs> =
  z
    .object({
      where: ViewingHistoryWhereInputSchema.optional(),
    })
    .strict();

export const WatchlistCreateArgsSchema: z.ZodType<Prisma.WatchlistCreateArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      data: z.union([
        WatchlistCreateInputSchema,
        WatchlistUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const WatchlistUpsertArgsSchema: z.ZodType<Prisma.WatchlistUpsertArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereUniqueInputSchema,
      create: z.union([
        WatchlistCreateInputSchema,
        WatchlistUncheckedCreateInputSchema,
      ]),
      update: z.union([
        WatchlistUpdateInputSchema,
        WatchlistUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const WatchlistCreateManyArgsSchema: z.ZodType<Prisma.WatchlistCreateManyArgs> =
  z
    .object({
      data: z.union([
        WatchlistCreateManyInputSchema,
        WatchlistCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const WatchlistCreateManyAndReturnArgsSchema: z.ZodType<Prisma.WatchlistCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        WatchlistCreateManyInputSchema,
        WatchlistCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const WatchlistDeleteArgsSchema: z.ZodType<Prisma.WatchlistDeleteArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      where: WatchlistWhereUniqueInputSchema,
    })
    .strict();

export const WatchlistUpdateArgsSchema: z.ZodType<Prisma.WatchlistUpdateArgs> =
  z
    .object({
      select: WatchlistSelectSchema.optional(),
      include: WatchlistIncludeSchema.optional(),
      data: z.union([
        WatchlistUpdateInputSchema,
        WatchlistUncheckedUpdateInputSchema,
      ]),
      where: WatchlistWhereUniqueInputSchema,
    })
    .strict();

export const WatchlistUpdateManyArgsSchema: z.ZodType<Prisma.WatchlistUpdateManyArgs> =
  z
    .object({
      data: z.union([
        WatchlistUpdateManyMutationInputSchema,
        WatchlistUncheckedUpdateManyInputSchema,
      ]),
      where: WatchlistWhereInputSchema.optional(),
    })
    .strict();

export const WatchlistDeleteManyArgsSchema: z.ZodType<Prisma.WatchlistDeleteManyArgs> =
  z
    .object({
      where: WatchlistWhereInputSchema.optional(),
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserCreateManyInputSchema,
        UserCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
    create: z.union([
      SessionCreateInputSchema,
      SessionUncheckedCreateInputSchema,
    ]),
    update: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        SessionCreateManyInputSchema,
        SessionCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z
  .object({
    select: SessionSelectSchema.optional(),
    include: SessionIncludeSchema.optional(),
    data: z.union([
      SessionUpdateInputSchema,
      SessionUncheckedUpdateInputSchema,
    ]),
    where: SessionWhereUniqueInputSchema,
  })
  .strict();

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SessionUpdateManyMutationInputSchema,
        SessionUncheckedUpdateManyInputSchema,
      ]),
      where: SessionWhereInputSchema.optional(),
    })
    .strict();

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> =
  z
    .object({
      where: SessionWhereInputSchema.optional(),
    })
    .strict();

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
    create: z.union([
      AccountCreateInputSchema,
      AccountUncheckedCreateInputSchema,
    ]),
    update: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        AccountCreateManyInputSchema,
        AccountCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z
  .object({
    select: AccountSelectSchema.optional(),
    include: AccountIncludeSchema.optional(),
    data: z.union([
      AccountUpdateInputSchema,
      AccountUncheckedUpdateInputSchema,
    ]),
    where: AccountWhereUniqueInputSchema,
  })
  .strict();

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AccountUpdateManyMutationInputSchema,
        AccountUncheckedUpdateManyInputSchema,
      ]),
      where: AccountWhereInputSchema.optional(),
    })
    .strict();

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> =
  z
    .object({
      where: AccountWhereInputSchema.optional(),
    })
    .strict();

export const VerificationCreateArgsSchema: z.ZodType<Prisma.VerificationCreateArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      data: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const VerificationUpsertArgsSchema: z.ZodType<Prisma.VerificationUpsertArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
      create: z.union([
        VerificationCreateInputSchema,
        VerificationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        VerificationUpdateInputSchema,
        VerificationUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const VerificationCreateManyArgsSchema: z.ZodType<Prisma.VerificationCreateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const VerificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        VerificationCreateManyInputSchema,
        VerificationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const VerificationDeleteArgsSchema: z.ZodType<Prisma.VerificationDeleteArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationUpdateArgsSchema: z.ZodType<Prisma.VerificationUpdateArgs> =
  z
    .object({
      select: VerificationSelectSchema.optional(),
      data: z.union([
        VerificationUpdateInputSchema,
        VerificationUncheckedUpdateInputSchema,
      ]),
      where: VerificationWhereUniqueInputSchema,
    })
    .strict();

export const VerificationUpdateManyArgsSchema: z.ZodType<Prisma.VerificationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        VerificationUpdateManyMutationInputSchema,
        VerificationUncheckedUpdateManyInputSchema,
      ]),
      where: VerificationWhereInputSchema.optional(),
    })
    .strict();

export const VerificationDeleteManyArgsSchema: z.ZodType<Prisma.VerificationDeleteManyArgs> =
  z
    .object({
      where: VerificationWhereInputSchema.optional(),
    })
    .strict();

export const JwksCreateArgsSchema: z.ZodType<Prisma.JwksCreateArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    data: z.union([JwksCreateInputSchema, JwksUncheckedCreateInputSchema]),
  })
  .strict();

export const JwksUpsertArgsSchema: z.ZodType<Prisma.JwksUpsertArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    where: JwksWhereUniqueInputSchema,
    create: z.union([JwksCreateInputSchema, JwksUncheckedCreateInputSchema]),
    update: z.union([JwksUpdateInputSchema, JwksUncheckedUpdateInputSchema]),
  })
  .strict();

export const JwksCreateManyArgsSchema: z.ZodType<Prisma.JwksCreateManyArgs> = z
  .object({
    data: z.union([
      JwksCreateManyInputSchema,
      JwksCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const JwksCreateManyAndReturnArgsSchema: z.ZodType<Prisma.JwksCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        JwksCreateManyInputSchema,
        JwksCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const JwksDeleteArgsSchema: z.ZodType<Prisma.JwksDeleteArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    where: JwksWhereUniqueInputSchema,
  })
  .strict();

export const JwksUpdateArgsSchema: z.ZodType<Prisma.JwksUpdateArgs> = z
  .object({
    select: JwksSelectSchema.optional(),
    data: z.union([JwksUpdateInputSchema, JwksUncheckedUpdateInputSchema]),
    where: JwksWhereUniqueInputSchema,
  })
  .strict();

export const JwksUpdateManyArgsSchema: z.ZodType<Prisma.JwksUpdateManyArgs> = z
  .object({
    data: z.union([
      JwksUpdateManyMutationInputSchema,
      JwksUncheckedUpdateManyInputSchema,
    ]),
    where: JwksWhereInputSchema.optional(),
  })
  .strict();

export const JwksDeleteManyArgsSchema: z.ZodType<Prisma.JwksDeleteManyArgs> = z
  .object({
    where: JwksWhereInputSchema.optional(),
  })
  .strict();
