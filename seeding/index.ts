/* eslint-disable no-console */
/* eslint-disable node/prefer-global/buffer */
/* eslint-disable node/no-process-env */

import { config } from 'dotenv';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Pool } from 'pg';
import { v4 as uuidv4 } from 'uuid';

// Load environment variables
config();

// Single database pool configuration
const pool = new Pool({
  user: `${process.env.POSTGRES_USER}`,
  host: `postgres`,
  database: `${process.env.POSTGRES_DB}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  port: 5432,
});

// Fixed password for all accounts
const FIXED_PASSWORD = 'a9e36c7b6f60d4a1a43e742c90b7f841:965379b6df85e8c653d584277813e4216bb56929eeafb73439ebe198a7de315196eb3e67056260fd808944b7098c19a9b7c8f4479b5c4af48657896d05b44a0d';

// Pre-generate UUIDs for relationships
const ids = {
  genres: {
    action: uuidv4(),
    comedy: uuidv4(),
    drama: uuidv4(),
    sciFi: uuidv4(),
  },
  languages: {
    english: uuidv4(),
    spanish: uuidv4(),
    french: uuidv4(),
  },
  contentRatings: {
    hd: uuidv4(),
    fourK: uuidv4(),
    eightK: uuidv4(),
  },
  subscriptionTypes: {
    basic: uuidv4(),
    premium: uuidv4(),
  },
};

async function main() {
  console.log('🌱 Starting database seeding...');
  const client = await pool.connect();

  try {
    // Generate avatars
    const avatars = await Promise.all([
      generateAvatar(Math.random().toString(36).substring(2, 15)),
      generateAvatar(Math.random().toString(36).substring(2, 15)),
      generateAvatar(Math.random().toString(36).substring(2, 15)),
    ]);

    // Start transaction
    await client.query('BEGIN');

    // add the Genre table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS "Genre" (
        id TEXT NOT NULL,
        name VARCHAR(50) NOT NULL,
        CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
      )
    `);

    // check if the database is already seeded
    const user = await client.query('SELECT * FROM "Genre" LIMIT 1');
    if (user.rows.length > 0) {
      console.log('Database already seeded!');
      await client.query('COMMIT');
      return;
    }
    else {
      const schema = await getLatestPrismaSchema();
      await client.query(schema);
    }

    // Enable UUID extension
    await client.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

    // Check if database is already seeded
    const existingData = await client.query('SELECT * FROM "Genre" LIMIT 1');
    if (existingData.rows.length > 0) {
      console.log('Database already seeded!');
      await client.query('COMMIT');
      return;
    }

    // Create database users
    console.log('🔑 Creating database users...');
    await client.query(`
      DO $$ 
      BEGIN
        DROP USER IF EXISTS api_user;
        DROP USER IF EXISTS senior_user;
        DROP USER IF EXISTS medior_user;
        DROP USER IF EXISTS junior_user;

        CREATE USER api_user WITH PASSWORD 'api_password';
        CREATE USER senior_user WITH PASSWORD 'senior_password';
        CREATE USER medior_user WITH PASSWORD 'medior_password';
        CREATE USER junior_user WITH PASSWORD 'junior_password';

        REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM api_user, senior_user, medior_user, junior_user;
        REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public FROM api_user, senior_user, medior_user, junior_user;
        REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public FROM api_user, senior_user, medior_user, junior_user;
        REVOKE ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA public FROM api_user, senior_user, medior_user, junior_user;
        REVOKE ALL PRIVILEGES ON SCHEMA public FROM api_user, senior_user, medior_user, junior_user;
        REVOKE ALL PRIVILEGES ON DATABASE "${process.env.POSTGRES_DB}" FROM api_user, senior_user, medior_user, junior_user;

        GRANT CONNECT ON DATABASE "${process.env.POSTGRES_DB}" TO api_user;
        GRANT USAGE ON SCHEMA public TO api_user;
        GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO api_user;
        GRANT ALL PRIVILEGES ON ALL ROUTINES IN SCHEMA public TO api_user;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO api_user;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON ROUTINES TO api_user;

        GRANT ALL PRIVILEGES ON DATABASE "${process.env.POSTGRES_DB}" TO senior_user;
        GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO senior_user;
        GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO senior_user;
        GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO senior_user;

        GRANT CONNECT ON DATABASE "${process.env.POSTGRES_DB}" TO medior_user;
        GRANT USAGE ON SCHEMA public TO medior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO medior_user;
        REVOKE ALL PRIVILEGES ON "Invoice" FROM medior_user;
        REVOKE ALL PRIVILEGES ON "SubscriptionType" FROM medior_user;
        REVOKE ALL PRIVILEGES ON "Subscription" FROM medior_user;

        GRANT CONNECT ON DATABASE "${process.env.POSTGRES_DB}" TO junior_user;
        GRANT USAGE ON SCHEMA public TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "Content" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "ContentMetadata" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "Genre" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "Language" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "Subtitle" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "ContentRating" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "ViewingHistory" TO junior_user;
        GRANT SELECT, INSERT, UPDATE, DELETE ON "Watchlist" TO junior_user;
      END $$;
    `);

    // Create stored procedures
    console.log('📦 Creating stored procedures...');
    await client.query(`
      CREATE OR REPLACE PROCEDURE fetch_data()
      LANGUAGE plpgsql
      AS $$
      DECLARE
          v_table_name TEXT;
      BEGIN
          EXECUTE format('SET session_replication_role = ''replica''');
          FOR v_table_name IN 
              SELECT table_name
              FROM information_schema.tables
              WHERE table_schema = 'public'
              AND table_type = 'BASE TABLE'
              ORDER BY table_name DESC
          LOOP
              EXECUTE format('DROP TABLE IF EXISTS %I.%I CASCADE', 'public', v_table_name);
          END LOOP;
          EXECUTE format('SET session_replication_role = ''origin''');
      END;
      $$;
    `);

    // Grant function privileges to api_user after creating the procedure
    await client.query(`
      DO $$ 
      BEGIN
        GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO api_user;
        ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS TO api_user;
      END $$;
    `);

    // Create Genres
    await client.query(`
      INSERT INTO "Genre" (id, name) VALUES
        ($1, 'Action'),
        ($2, 'Comedy'),
        ($3, 'Drama'),
        ($4, 'Sci-Fi')
    `, [ids.genres.action, ids.genres.comedy, ids.genres.drama, ids.genres.sciFi]);

    // Create Languages
    await client.query(`
      INSERT INTO "Language" (id, language) VALUES
        ($1, 'English'),
        ($2, 'Spanish'),
        ($3, 'French')
    `, [ids.languages.english, ids.languages.spanish, ids.languages.french]);

    // Create Content Ratings
    await client.query(`
      INSERT INTO "ContentRating" (id, rating_type) VALUES
        ($1, 'HD'),
        ($2, '4K'),
        ($3, '8K')
    `, [ids.contentRatings.hd, ids.contentRatings.fourK, ids.contentRatings.eightK]);

    // Create Subscription Types
    await client.query(`
      INSERT INTO "SubscriptionType" (id, type, price_in_euro_cents) VALUES
        ($1, 'Basic', 799),
        ($2, 'Premium', 1299)
    `, [ids.subscriptionTypes.basic, ids.subscriptionTypes.premium]);

    // Create Demo Netflix Account
    const demoAccount = await client.query(`
      INSERT INTO "NetflixAccount" (
        id,
        email,
        password,
        activated,
        created_at,
        updated_at
      ) VALUES (
        uuid_generate_v4(),
        $1,
        $2,
        true,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      ) RETURNING id
    `, ['demo@example.com', FIXED_PASSWORD]);

    // Create Profile for Demo Account
    await client.query(`
      INSERT INTO "Profile" (
        id,
        account_id,
        name,
        date_of_birth,
        language,
        profile_image,
        created_at,
        updated_at
      ) VALUES (
        uuid_generate_v4(),
        $1,
        'Demo User',
        '1990-01-01'::date,
        'en',
        'https://example.com/default-avatar.png',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
    `, [demoAccount.rows[0].id]);

    // Create Demo Content
    const matrixId = uuidv4();
    const inceptionId = uuidv4();
    await client.query(`
      INSERT INTO "Content" (
        id,
        title,
        "durationInSeconds",
        release_date,
        created_at,
        updated_at
      ) VALUES
        ($1, 'The Matrix', 8949, '1999-03-31', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ($2, 'Inception', 18949, '2010-07-16', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `, [matrixId, inceptionId]);

    // Create Content Metadata
    await client.query(`
      INSERT INTO "ContentMetadata" (
        id,
        content_id,
        content_type,
        age_rating,
        genre_id,
        language_id,
        content_rating_id,
        rating,
        created_at,
        updated_at
      ) VALUES
        (uuid_generate_v4(), $1, 'MOVIE', 'R', $3, $5, $6, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        (uuid_generate_v4(), $2, 'MOVIE', 'PG_13', $4, $5, $6, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `, [matrixId, inceptionId, ids.genres.sciFi, ids.genres.action, ids.languages.english, ids.contentRatings.fourK]);

    // Create Demo Users
    await client.query(`
      INSERT INTO "user" (
        id,
        "emailVerified",
        email,
        name,
        image,
        role,
        "createdAt",
        "updatedAt"
      ) VALUES
        ('tOIdEhJiSiCxUCKRkfHHn', true, 'junior@demo.com', 'Junior User', $1, 'JUNIOR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('rkKWxWd7pfRgmnBHiKxZI', true, 'medior@demo.com', 'Medior User', $2, 'MEDIOR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        ('pe07ggzx_CkCi6Or2bph1', true, 'senior@demo.com', 'Senior User', $3, 'SENIOR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `, avatars);

    await client.query(`
        INSERT INTO "apiKey" (
    id,
    created_at,
    updated_at,
    user_id,
    api_key
) VALUES
    (
        'tOIdEhJiSiCxUCKRdkfHn',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        'tOIdEhJiSiCxUCKRkfHHn',
        'cm63wlsus00020cl29tgs5o7v'
    ),
    (
        'rkKWxWd7pfRgmnBHiKxZI',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        'rkKWxWd7pfRgmnBHiKxZI', 
        'cm63wet2f00000cl2cyhzdviq'
    ), 
    (
        'pe07ggzx_CkCi6Or2bph1',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        'pe07ggzx_CkCi6Or2bph1',
        'cm63wly9e00030cl2d0bpdzox'
    );

    `)

    // Create Demo Accounts
    await client.query(`
      INSERT INTO "account" (
        id,
        "accountId",
        "providerId",
        "userId",
        password,
        "createdAt",
        "updatedAt"
      ) VALUES
        (substr(md5(random()::text), 0, 15), 'tOIdEhJiSiCxUCKRkfHHn', 'credential', 'tOIdEhJiSiCxUCKRkfHHn',
         $1,
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        (substr(md5(random()::text), 0, 15), 'rkKWxWd7pfRgmnBHiKxZI', 'credential', 'rkKWxWd7pfRgmnBHiKxZI',
         $1,
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
        (substr(md5(random()::text), 0, 15), 'pe07ggzx_CkCi6Or2bph1', 'credential', 'pe07ggzx_CkCi6Or2bph1',
         $1,
         CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
    `, [FIXED_PASSWORD]);

    // Commit transaction
    await client.query('COMMIT');
    console.log('✅ Database seeding completed!');
  }
  catch (error) {
    await client.query('ROLLBACK');
    console.error('Error seeding database:', error);
    throw error;
  }
  finally {
    client.release();
  }
}

async function generateAvatar(seed: string): Promise<string> {
  try {
    const response = await fetch(`https://api.dicebear.com/9.x/dylan/svg?seed=${seed}`);
    const buffer = await response.arrayBuffer();
    return `data:image/svg+xml;base64,${Buffer.from(buffer).toString('base64')}`;
  }
  catch (error) {
    console.error('Error generating avatar:', error);
    return 'https://example.com/default-avatar.png';
  }
}

async function getLatestPrismaSchema() {
  // get the latest migration file from /prisma/migrations
  const migrationFiles = await fs.readdir(path.join(__dirname, './migrations'));
  const latestMigration = migrationFiles.sort((a, b) => a.localeCompare(b))[0];

  // get the schema from the latest migration file
  const schema = await fs.readFile(path.join(__dirname, `./migrations/${latestMigration}/migration.sql`), 'utf-8');

  return schema;
}

// Execute the seeding
main()
  .then(() => {
    pool.end().then(() => {
      console.log('✅ All database operations completed successfully!');
      process.exit(0); // Exit with success code
    });
  })
  .catch((error) => {
    console.error('Failed to seed database:', error);
    pool.end().then(() => {
      process.exit(1); // Exit with error code
    });
  });
