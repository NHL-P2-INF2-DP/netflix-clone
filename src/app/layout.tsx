import type { Metadata } from 'next';

import { Geist } from 'next/font/google';

import '@/styles/globals.css';
import Providers from '@/components/providers';

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
  return (
    <html lang="en">
      <body className={`antialiased ${geist.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
