import { z } from 'zod';

// Error Messages
const ERROR_MESSAGES = {
  required: 'This field is required',
  uuid: 'Invalid UUID format',
  email: 'Invalid email address',
  date: 'Invalid date format',
  string: 'Must be a string',
  number: 'Must be a number',
  boolean: 'Must be a boolean',
  min: (min: number) => `Must be at least ${min} characters long`,
  max: (max: number) => `Must be at most ${max} characters long`,
  percentage: 'Must be a number between 0 and 100',
  positiveInt: 'Must be a positive integer',
  password:
    'Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one special character',
} as const;

// Enums
export const ContentTypeEnum = z.enum(['MOVIE', 'SERIES', 'DOCUMENTARY'], {
  errorMap: () => ({ message: 'Invalid content type' }),
});

export const AgeRatingEnum = z.enum(['G', 'PG', 'PG_13', 'R', 'NC_17'], {
  errorMap: () => ({ message: 'Invalid age rating' }),
});

export const PaymentStatusEnum = z.enum(['PAID', 'UNPAID', 'PENDING'], {
  errorMap: () => ({ message: 'Invalid payment status' }),
});

// Base schemas
export const genreSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  name: z.string({ required_error: ERROR_MESSAGES.required }),
});

export const contentRatingSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  ratingType: z.string({ required_error: ERROR_MESSAGES.required }),
});

export const contentSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  title: z.string({ required_error: ERROR_MESSAGES.required }),
  duration: z.date({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.date,
  }),
  releaseDate: z.date({
    required_error: ERROR_MESSAGES.required,
    invalid_type_error: ERROR_MESSAGES.date,
  }),
  season: z.number().int().nullable(),
  qualityId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const languageSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  language: z.string({ required_error: ERROR_MESSAGES.required }),
});

export const subtitleSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  languageId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  content: z.string({ required_error: ERROR_MESSAGES.required }),
});

export const contentMetadataSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  title: z.string().nullable(),
  genreId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
  rating: z.number().int().min(0).max(10).nullable(),
  contentId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  languageId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
  subtitleId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
  contentType: ContentTypeEnum,
  contentRatingId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
  ageRating: AgeRatingEnum,
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const netflixAccountSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  email: z.string().email({ message: ERROR_MESSAGES.email }),
  password: z.string().min(8, { message: ERROR_MESSAGES.password }),
  activated: z.boolean(),
  blockedUntil: z.date({ invalid_type_error: ERROR_MESSAGES.date }).nullable(),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const previousPasswordHashSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  accountId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  passwordHash: z.string(),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const profileSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  accountId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  name: z.string().min(1, { message: ERROR_MESSAGES.required }),
  profileImage: z.string().nullable(),
  dateOfBirth: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  language: z.string().default('en'),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const subscriptionTypeSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  type: z.string(),
  priceInEuroCents: z
    .number()
    .int()
    .positive({ message: ERROR_MESSAGES.positiveInt }),
});

export const subscriptionSchema = z
  .object({
    id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
    beginDate: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
    endDate: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
    accountId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
    subscriptionTypeId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
    referralId: z.string().uuid({ message: ERROR_MESSAGES.uuid }).nullable(),
    createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
    updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  })
  .refine(data => data.endDate > data.beginDate, {
    message: 'End date must be after begin date',
    path: ['endDate'],
  });

export const invoiceSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  subscriptionId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  isPaid: PaymentStatusEnum,
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const viewingHistorySchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  profileId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  contentId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  watchDate: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  progressPercentage: z
    .number()
    .min(0, { message: ERROR_MESSAGES.percentage })
    .max(100, { message: ERROR_MESSAGES.percentage }),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});

export const watchlistSchema = z.object({
  id: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  profileId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  contentId: z.string().uuid({ message: ERROR_MESSAGES.uuid }),
  createdAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
  updatedAt: z.date({ invalid_type_error: ERROR_MESSAGES.date }),
});
