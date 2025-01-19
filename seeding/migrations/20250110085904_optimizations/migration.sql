-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('MOVIE', 'SERIES', 'DOCUMENTARY');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('JUNIOR', 'MEDIOR', 'SENIOR');

-- CreateEnum
CREATE TYPE "AgeRating" AS ENUM ('G', 'PG', 'PG_13', 'R', 'NC_17');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PAID', 'UNPAID', 'PENDING');

-- CreateTable
CREATE TABLE "ContentRating" (
    "id" TEXT NOT NULL,
    "rating_type" VARCHAR(20) NOT NULL,

    CONSTRAINT "ContentRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "durationInSeconds" INTEGER NOT NULL,
    "release_date" DATE NOT NULL,
    "season" SMALLINT,
    "quality_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "language" VARCHAR(50) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subtitle" (
    "id" TEXT NOT NULL,
    "language_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Subtitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentMetadata" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255),
    "genre_id" TEXT,
    "rating" SMALLINT,
    "content_id" TEXT NOT NULL,
    "language_id" TEXT,
    "subtitle_id" TEXT,
    "content_type" "ContentType" NOT NULL,
    "content_rating_id" TEXT,
    "age_rating" "AgeRating" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentMetadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NetflixAccount" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "blocked_until" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NetflixAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreviousPasswordHash" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PreviousPasswordHash_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "profile_image" VARCHAR(255),
    "date_of_birth" DATE NOT NULL,
    "language" VARCHAR(5) NOT NULL DEFAULT 'en',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionType" (
    "id" TEXT NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "price_in_euro_cents" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SubscriptionType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "begin_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "account_id" TEXT NOT NULL,
    "subscription_type_id" TEXT NOT NULL,
    "referral_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "subscription_id" TEXT NOT NULL,
    "is_paid" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViewingHistory" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    "watch_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "progress_percentage" REAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ViewingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" TEXT NOT NULL,
    "profile_id" TEXT NOT NULL,
    "content_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'JUNIOR',
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "api_key" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,

    CONSTRAINT "api_key_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE INDEX "Genre_name_idx" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ContentRating_rating_type_key" ON "ContentRating"("rating_type");

-- CreateIndex
CREATE INDEX "ContentRating_rating_type_idx" ON "ContentRating"("rating_type");

-- CreateIndex
CREATE INDEX "Content_title_idx" ON "Content"("title");

-- CreateIndex
CREATE INDEX "Content_release_date_idx" ON "Content"("release_date");

-- CreateIndex
CREATE UNIQUE INDEX "Language_language_key" ON "Language"("language");

-- CreateIndex
CREATE INDEX "Language_language_idx" ON "Language"("language");

-- CreateIndex
CREATE INDEX "Subtitle_language_id_idx" ON "Subtitle"("language_id");

-- CreateIndex
CREATE INDEX "ContentMetadata_content_id_content_type_idx" ON "ContentMetadata"("content_id", "content_type");

-- CreateIndex
CREATE INDEX "ContentMetadata_genre_id_age_rating_idx" ON "ContentMetadata"("genre_id", "age_rating");

-- CreateIndex
CREATE UNIQUE INDEX "NetflixAccount_email_key" ON "NetflixAccount"("email");

-- CreateIndex
CREATE INDEX "NetflixAccount_email_activated_idx" ON "NetflixAccount"("email", "activated");

-- CreateIndex
CREATE INDEX "PreviousPasswordHash_account_id_created_at_idx" ON "PreviousPasswordHash"("account_id", "created_at");

-- CreateIndex
CREATE INDEX "Profile_account_id_name_idx" ON "Profile"("account_id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriptionType_type_key" ON "SubscriptionType"("type");

-- CreateIndex
CREATE INDEX "SubscriptionType_type_idx" ON "SubscriptionType"("type");

-- CreateIndex
CREATE INDEX "Subscription_account_id_end_date_idx" ON "Subscription"("account_id", "end_date");

-- CreateIndex
CREATE INDEX "Subscription_subscription_type_id_begin_date_idx" ON "Subscription"("subscription_type_id", "begin_date");

-- CreateIndex
CREATE INDEX "Invoice_subscription_id_is_paid_idx" ON "Invoice"("subscription_id", "is_paid");

-- CreateIndex
CREATE INDEX "ViewingHistory_profile_id_watch_date_idx" ON "ViewingHistory"("profile_id", "watch_date");

-- CreateIndex
CREATE INDEX "ViewingHistory_content_id_progress_percentage_idx" ON "ViewingHistory"("content_id", "progress_percentage");

-- CreateIndex
CREATE INDEX "Watchlist_created_at_idx" ON "Watchlist"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "Watchlist_profile_id_content_id_key" ON "Watchlist"("profile_id", "content_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "session"("token");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_user_id_key" ON "api_key"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "api_key_apiKey_key" ON "api_key"("apiKey");

-- AddForeignKey
ALTER TABLE "Subtitle" ADD CONSTRAINT "Subtitle_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMetadata" ADD CONSTRAINT "ContentMetadata_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "Genre"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMetadata" ADD CONSTRAINT "ContentMetadata_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMetadata" ADD CONSTRAINT "ContentMetadata_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Language"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMetadata" ADD CONSTRAINT "ContentMetadata_subtitle_id_fkey" FOREIGN KEY ("subtitle_id") REFERENCES "Subtitle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentMetadata" ADD CONSTRAINT "ContentMetadata_content_rating_id_fkey" FOREIGN KEY ("content_rating_id") REFERENCES "ContentRating"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreviousPasswordHash" ADD CONSTRAINT "PreviousPasswordHash_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "NetflixAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "NetflixAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "NetflixAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_subscription_type_id_fkey" FOREIGN KEY ("subscription_type_id") REFERENCES "SubscriptionType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_referral_id_fkey" FOREIGN KEY ("referral_id") REFERENCES "NetflixAccount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "Subscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewingHistory" ADD CONSTRAINT "ViewingHistory_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewingHistory" ADD CONSTRAINT "ViewingHistory_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "api_key" ADD CONSTRAINT "api_key_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
