import type { Metadata } from 'next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Geist } from 'next/font/google';

import '@/styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Netflix Clone ',
  description: 'Een app voor Data Proccesing van NHL Stenden',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body
        className={`antialiased ${geist.className}`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
