import type { Logger } from 'pino';

import pino from 'pino';

import { env } from './env';

export const logger: Logger
  = env.NODE_ENV === 'production'
    ? pino({ level: 'warn' })
    : pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
      level: 'debug',
    });
