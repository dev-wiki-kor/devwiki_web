'use client';

import { memo, ReactNode } from 'react';
import useTheme from '@/shared/hooks/useTheme';

interface Props {
  children: ReactNode;
}

function GlobalState({ children }: Props) {
  const { toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>모드 변경</button>
      {children}
    </>
  );
}

export default memo(GlobalState);
