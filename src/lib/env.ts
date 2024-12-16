/* eslint-disable node/no-process-env */
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import path from 'node:path';
import { z } from 'zod';

expand(
  config({
    path: path.resolve(
      process.cwd(),
      process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
    ),
  }),
);

const envSchema = z.object({
  // add new environment variables here, this will allow you to access them in your app in a type-safe manner
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().default(process.env.DATABASE_URL || ''),
  BETTER_AUTH_SECRET: z.string().default(process.env.BETTER_AUTH_SECRET || ''),
  BETTER_AUTH_URL: z.string().default(process.env.BETTER_AUTH_URL || ''),
});

const { error, data: parsedEnv } = envSchema.safeParse(process.env);

if (error) {
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  console.error('❌ Invalid env:');
  process.exit(1);
}

export const env = parsedEnv!;
