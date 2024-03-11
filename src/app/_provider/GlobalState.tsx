'use client';

import { memo, ReactNode } from 'react';
import { useTheme } from '@/app/_provider/use-theme';

interface Props {
  children: ReactNode;
}

function GlobalState({ children }: Props) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>모드 변경</button>
      {children}
    </>
  );
}

export default memo(GlobalState);
