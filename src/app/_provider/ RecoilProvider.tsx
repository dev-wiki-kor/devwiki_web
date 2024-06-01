'use client';

import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RecoilRoot } from 'recoil';

export default function RecoilProvider({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
