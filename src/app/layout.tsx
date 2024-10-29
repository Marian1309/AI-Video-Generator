import type { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import './globals.scss';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-figtree'
});

export const metadata: Metadata = {
  title: 'Next.js 14',
  description: 'Next.js 14 Template'
};

type Props = PropsWithChildren;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={figtree.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
