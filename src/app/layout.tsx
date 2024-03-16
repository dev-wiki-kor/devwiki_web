import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import GlobalState from '@/app/_provider/GlobalState';
import './_styles/reset.css';
import './_styles/global.css';
import { DarkMode } from '@/app/_script/darkmode';
import RQProvider from '@/app/_provider/RQProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning>
        <DarkMode />
        <GlobalState>
          <RQProvider>{children}</RQProvider>
        </GlobalState>
      </body>
    </html>
  );
}
