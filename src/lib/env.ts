/* eslint-disable node/no-process-env */
import { z } from 'zod';

// Server-side only schema
const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
});

// Type for our env
type EnvType = z.infer<typeof envSchema>;

// Create a safe server-side only env object
function serverEnv(): EnvType {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error(JSON.stringify(parsed.error.flatten().fieldErrors, null, 2));
    console.error('❌ Invalid env:');
    process.exit(1);
  }

  return parsed.data;
}

// Export a safe env object that works in both client and server
export const env
  = typeof window === 'undefined'
    ? serverEnv()
    : {
        NODE_ENV: 'development',
        PORT: 3000,
        DATABASE_URL: '',
        BETTER_AUTH_SECRET: '',
        BETTER_AUTH_URL: '',
      };
