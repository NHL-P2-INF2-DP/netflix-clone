'use client';

import type { PropsWithChildren } from 'react';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { HTTPException } from 'hono/http-exception';
import { useState } from 'react';

export function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            let errorMessage: string;
            if (err instanceof HTTPException) {
              errorMessage = err.message;
            }
            else if (err instanceof Error) {
              errorMessage = err.message;
            }
            else {
              errorMessage = 'An unknown error occurred.';
            }
            console.error(errorMessage);
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
