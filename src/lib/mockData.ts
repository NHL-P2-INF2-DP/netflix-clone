// Enums
export const ContentType = {
  MOVIE: 'MOVIE',
  SERIES: 'SERIES',
  DOCUMENTARY: 'DOCUMENTARY'
} as const;

export const AgeRating = {
  G: 'G',
  PG: 'PG',
  PG_13: 'PG_13',
  R: 'R',
  NC_17: 'NC_17',
  TV_Y: 'TV_Y',
  TV_Y7: 'TV_Y7',
  TV_G: 'TV_G',
  TV_PG: 'TV_PG',
  TV_14: 'TV_14',
  TV_MA: 'TV_MA',
} as const;

export const PaymentStatus = {
  PAID: 'PAID',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
} as const;

export const Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  JUNIOR: 'JUNIOR',
  MEDIOR: 'MEDIOR',
  SENIOR: 'SENIOR',
} as const;

// Types
export type ContentTypeValues = typeof ContentType[keyof typeof ContentType];
export type AgeRatingValues = typeof AgeRating[keyof typeof AgeRating];
export type PaymentStatusValues = typeof PaymentStatus[keyof typeof PaymentStatus];
export type RoleValues = typeof Role[keyof typeof Role];

export interface Field {
  name: string;
  type: string;
  required: boolean;
  isId?: boolean;
  isUnique?: boolean;
  default?: unknown;
}

export interface MockSchema {
  [key: string]: Field[];
}

// Mock Schema
export const mockSchema: MockSchema = {
  netflixAccount: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'email', type: 'String', required: true, isUnique: true },
    { name: 'password', type: 'String', required: true },
    { name: 'activated', type: 'Boolean', required: true, default: false },
    { name: 'blockedUntil', type: 'DateTime', required: false },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  profile: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'accountId', type: 'String', required: true },
    { name: 'name', type: 'String', required: true },
    { name: 'profileImage', type: 'String', required: false },
    { name: 'dateOfBirth', type: 'DateTime', required: true },
    { name: 'language', type: 'String', required: true, default: 'en' },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  content: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'title', type: 'String', required: true },
    { name: 'duration', type: 'DateTime', required: true },
    { name: 'releaseDate', type: 'DateTime', required: true },
    { name: 'season', type: 'Int', required: false },
    { name: 'qualityId', type: 'String', required: false },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  contentMetadata: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'title', type: 'String', required: false },
    { name: 'genreId', type: 'String', required: false },
    { name: 'rating', type: 'Int', required: false },
    { name: 'contentId', type: 'String', required: true },
    { name: 'languageId', type: 'String', required: false },
    { name: 'subtitleId', type: 'String', required: false },
    { name: 'contentType', type: 'Enum', required: true },
    { name: 'contentRatingId', type: 'String', required: false },
    { name: 'ageRating', type: 'Enum', required: true },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  genre: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'name', type: 'String', required: true, isUnique: true },
  ],
  contentRating: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'ratingType', type: 'String', required: true, isUnique: true },
  ],
  language: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'language', type: 'String', required: true, isUnique: true },
  ],
  subtitle: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'languageId', type: 'String', required: true },
    { name: 'content', type: 'String', required: true },
  ],
  subscription: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'beginDate', type: 'DateTime', required: true },
    { name: 'endDate', type: 'DateTime', required: true },
    { name: 'accountId', type: 'String', required: true },
    { name: 'subscriptionTypeId', type: 'String', required: true },
    { name: 'referralId', type: 'String', required: false },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  subscriptionType: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'type', type: 'String', required: true, isUnique: true },
    { name: 'priceInEuroCents', type: 'Int', required: true, default: 0 },
  ],
  invoice: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'subscriptionId', type: 'String', required: true },
    { name: 'isPaid', type: 'Enum', required: true, default: 'PENDING' },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  viewingHistory: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'profileId', type: 'String', required: true },
    { name: 'contentId', type: 'String', required: true },
    { name: 'watchDate', type: 'DateTime', required: true },
    { name: 'progressPercentage', type: 'Float', required: true },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  watchlist: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'profileId', type: 'String', required: true },
    { name: 'contentId', type: 'String', required: true },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  user: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'name', type: 'String', required: true },
    { name: 'email', type: 'String', required: true, isUnique: true },
    { name: 'emailVerified', type: 'Boolean', required: true },
    { name: 'role', type: 'Enum', required: true, default: 'JUNIOR' },
    { name: 'image', type: 'String', required: false },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  session: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'expiresAt', type: 'DateTime', required: true },
    { name: 'token', type: 'String', required: true, isUnique: true },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
    { name: 'ipAddress', type: 'String', required: false },
    { name: 'userAgent', type: 'String', required: false },
    { name: 'userId', type: 'String', required: true },
  ],
  account: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'accountId', type: 'String', required: true },
    { name: 'providerId', type: 'String', required: true },
    { name: 'userId', type: 'String', required: true },
    { name: 'accessToken', type: 'String', required: false },
    { name: 'refreshToken', type: 'String', required: false },
    { name: 'idToken', type: 'String', required: false },
    { name: 'accessTokenExpiresAt', type: 'DateTime', required: false },
    { name: 'refreshTokenExpiresAt', type: 'DateTime', required: false },
    { name: 'scope', type: 'String', required: false },
    { name: 'password', type: 'String', required: false },
    { name: 'createdAt', type: 'DateTime', required: true },
    { name: 'updatedAt', type: 'DateTime', required: true },
  ],
  verification: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'identifier', type: 'String', required: true },
    { name: 'value', type: 'String', required: true },
    { name: 'expiresAt', type: 'DateTime', required: true },
    { name: 'createdAt', type: 'DateTime', required: false },
    { name: 'updatedAt', type: 'DateTime', required: false },
  ],
  jwks: [
    { name: 'id', type: 'String', required: true, isId: true },
    { name: 'publicKey', type: 'String', required: true },
    { name: 'privateKey', type: 'String', required: true },
    { name: 'createdAt', type: 'DateTime', required: true },
  ],
};

export const mockEnums = {
  ContentType,
  Role,
  AgeRating,
  PaymentStatus,
};

export function getFieldsFromMockSchema(modelName: string): Field[] {
  return mockSchema[modelName] || [];
}

export function getEnumValues(enumName: string): string[] {
  const enumObject = mockEnums[enumName as keyof typeof mockEnums];
  return enumObject ? Object.values(enumObject) : [];
}

interface NetflixAccount {
  id: string;
  email: string;
  password: string;
  activated: boolean;
  blockedUntil: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Profile {
  id: string;
  accountId: string;
  name: string;
  profileImage: string | null;
  dateOfBirth: Date;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Content {
  id: string;
  title: string;
  duration: Date;
  releaseDate: Date;
  season: number | null;
  qualityId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ContentMetadata {
  id: string;
  title: string | null;
  genreId: string | null;
  rating: number | null;
  contentId: string;
  languageId: string | null;
  subtitleId: string | null;
  contentType: ContentTypeValues;
  contentRatingId: string | null;
  ageRating: AgeRatingValues;
  createdAt: Date;
  updatedAt: Date;
}

interface Genre {
  id: string;
  name: string;
}

interface ContentRating {
  id: string;
  ratingType: string;
}

interface Language {
  id: string;
  language: string;
}

interface Subtitle {
  id: string;
  languageId: string;
  content: string;
}

interface Subscription {
  id: string;
  beginDate: Date;
  endDate: Date;
  accountId: string;
  subscriptionTypeId: string;
  referralId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface SubscriptionType {
  id: string;
  type: string;
  priceInEuroCents: number;
}

interface Invoice {
  id: string;
  subscriptionId: string;
  isPaid: PaymentStatusValues;
  createdAt: Date;
  updatedAt: Date;
}

interface ViewingHistory {
  id: string;
  profileId: string;
  contentId: string;
  watchDate: Date;
  progressPercentage: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Watchlist {
  id: string;
  profileId: string;
  contentId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  role: RoleValues;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Session {
  id: string;
  expiresAt: Date;
  token: string;
  createdAt: Date;
  updatedAt: Date;
  ipAddress: string | null;
  userAgent: string | null;
  userId: string;
}

interface Account {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  accessTokenExpiresAt: Date | null;
  refreshTokenExpiresAt: Date | null;
  scope: string | null;
  password: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface Verification {
  id: string;
  identifier: string;
  value: string;
  expiresAt: Date;
  createdAt: Date | null;
  updatedAt: Date | null;
}

interface Jwks {
  id: string;
  publicKey: string;
  privateKey: string;
  createdAt: Date;
}

export const mockData: {
  netflixAccount: NetflixAccount[];
  profile: Profile[];
  content: Content[];
  contentMetadata: ContentMetadata[];
  genre: Genre[];
  contentRating: ContentRating[];
  language: Language[];
  subtitle: Subtitle[];
  subscription: Subscription[];
  subscriptionType: SubscriptionType[];
  invoice: Invoice[];
  viewingHistory: ViewingHistory[];
  watchlist: Watchlist[];
  user: User[];
  session: Session[];
  account: Account[];
  verification: Verification[];
  jwks: Jwks[];
} = {
  netflixAccount: [
    { id: '1', email: 'user1@example.com', password: 'hashedpassword1', activated: true, blockedUntil: null, createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', email: 'user2@example.com', password: 'hashedpassword2', activated: false, blockedUntil: new Date('2023-07-01'), createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
  ],
  profile: [
    { id: '1', accountId: '1', name: 'John Doe', profileImage: 'profile1.jpg', dateOfBirth: new Date('1990-05-15'), language: 'en', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', accountId: '1', name: 'Jane Smith', profileImage: 'profile2.jpg', dateOfBirth: new Date('1985-11-22'), language: 'es', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
  ],
  content: [
    { id: '1', title: 'Stranger Things', duration: new Date(0, 0, 0, 1, 0), releaseDate: new Date('2016-07-15'), season: 1, qualityId: 'HD', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', title: 'The Crown', duration: new Date(0, 0, 0, 0, 50), releaseDate: new Date('2016-11-04'), season: 1, qualityId: '4K', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
  ],
  contentMetadata: [
    { id: '1', title: 'Stranger Things Metadata', genreId: '1', rating: 5, contentId: '1', languageId: '1', subtitleId: '1', contentType: ContentType.SERIES, contentRatingId: '1', ageRating: AgeRating.TV_14, createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', title: 'The Crown Metadata', genreId: '2', rating: 4, contentId: '2', languageId: '1', subtitleId: '2', contentType: ContentType.SERIES, contentRatingId: '2', ageRating: AgeRating.TV_MA, createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
  ],
  genre: [
    { id: '1', name: 'Sci-Fi' },
    { id: '2', name: 'Drama' },
  ],
  contentRating: [
    { id: '1', ratingType: 'TV-14' },
    { id: '2', ratingType: 'TV-MA' },
  ],
  language: [
    { id: '1', language: 'English' },
    { id: '2', language: 'Spanish' },
  ],
  subtitle: [
    { id: '1', languageId: '1', content: 'English subtitles for Stranger Things' },
    { id: '2', languageId: '2', content: 'Spanish subtitles for The Crown' },
  ],
  subscription: [
    { id: '1', beginDate: new Date('2023-01-01'), endDate: new Date('2024-01-01'), accountId: '1', subscriptionTypeId: '3', referralId: null, createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', beginDate: new Date('2023-02-15'), endDate: new Date('2024-02-15'), accountId: '2', subscriptionTypeId: '2', referralId: '1', createdAt: new Date('2023-02-15'), updatedAt: new Date('2023-02-15') },
  ],
  subscriptionType: [
    { id: '1', type: 'Basic', priceInEuroCents: 799 },
    { id: '2', type: 'Standard', priceInEuroCents: 1299 },
    { id: '3', type: 'Premium', priceInEuroCents: 1799 },
  ],
  invoice: [
    { id: '1', subscriptionId: '1', isPaid: PaymentStatus.PAID, createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', subscriptionId: '2', isPaid: PaymentStatus.PENDING, createdAt: new Date('2023-02-15'), updatedAt: new Date('2023-02-15') },
  ],
  viewingHistory: [
    { id: '1', profileId: '1', contentId: '1', watchDate: new Date('2023-06-15'), progressPercentage: 75, createdAt: new Date('2023-06-15'), updatedAt: new Date('2023-06-15') },
    { id: '2', profileId: '2', contentId: '2', watchDate: new Date('2023-07-01'), progressPercentage: 100, createdAt: new Date('2023-07-01'), updatedAt: new Date('2023-07-01') },
  ],
  watchlist: [
    { id: '1', profileId: '1', contentId: '2', createdAt: new Date('2023-05-20'), updatedAt: new Date('2023-05-20') },
    { id: '2', profileId: '2', contentId: '1', createdAt: new Date('2023-06-10'), updatedAt: new Date('2023-06-10') },
  ],
  user: [
    { id: '1', name: 'Admin User', email: 'admin@example.com', emailVerified: true, role: Role.SENIOR, image: 'admin.jpg', createdAt: new Date('2023-01-01'), updatedAt: new Date('2023-01-01') },
    { id: '2', name: 'Regular User', email: 'user@example.com', emailVerified: true, role: Role.JUNIOR, image: null, createdAt: new Date('2023-01-02'), updatedAt: new Date('2023-01-02') },
  ],
  session: [
    { id: '1', expiresAt: new Date('2023-07-01'), token: 'token1', createdAt: new Date('2023-06-01'), updatedAt: new Date('2023-06-01'), ipAddress: '192.168.1.1', userAgent: 'Mozilla/5.0', userId: '1' },
    { id: '2', expiresAt: new Date('2023-07-02'), token: 'token2', createdAt: new Date('2023-06-02'), updatedAt: new Date('2023-06-02'), ipAddress: '192.168.1.2', userAgent: 'Chrome/91.0', userId: '2' },
  ],
  account: [
    { id: '1', accountId: 'acc1', providerId: 'google', userId: '1', accessToken: 'access1', refreshToken: 'refresh1', idToken: 'id1', accessTokenExpiresAt: new Date('2023-07-01'), refreshTokenExpiresAt: new Date('2023-08-01'), scope: 'email profile', password: null, createdAt: new Date('2023-06-01'), updatedAt: new Date('2023-06-01') },
    { id: '2', accountId: 'acc2', providerId: 'facebook', userId: '2', accessToken: 'access2', refreshToken: 'refresh2', idToken: 'id2', accessTokenExpiresAt: new Date('2023-07-02'), refreshTokenExpiresAt: new Date('2023-08-02'), scope: 'email', password: null, createdAt: new Date('2023-06-02'), updatedAt: new Date('2023-06-02') },
  ],
  verification: [
    { id: '1', identifier: 'email1', value: 'code1', expiresAt: new Date('2023-07-01'), createdAt: new Date('2023-06-01'), updatedAt: new Date('2023-06-01') },
    { id: '2', identifier: 'email2', value: 'code2', expiresAt: new Date('2023-07-02'), createdAt: new Date('2023-06-02'), updatedAt: new Date('2023-06-02') },
  ],
  jwks: [
    { id: '1', publicKey: 'public1', privateKey: 'private1', createdAt: new Date('2023-06-01') },
    { id: '2', publicKey: 'public2', privateKey: 'private2', createdAt: new Date('2023-06-02') },
  ],
};

