import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import './globals.css';

import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { ReactQueryProvider } from '@/lib/providers/react-query';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netflix Employee Dashboard',
  description: 'Management panel for Netflix employees',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
      >
        <ReactQueryProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
