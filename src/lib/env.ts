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
  JWT_SECRET: z.string().min(32),
  DATABASE_URL: z.string(),
});

declare module 'node' {
  interface ProcessEnv extends z.infer<typeof envSchema> {}
}

export const env = envSchema.parse(process.env);
