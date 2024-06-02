'use client';

import { memo, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

type TParentNode = 'modal';

interface Props {
  parentNode: TParentNode;
  children: ReactNode;
}

function Portal({ parentNode, children }: Props) {
  const parent = useRef<HTMLDivElement>(
    document.getElementById(parentNode) as HTMLDivElement,
  );

  return createPortal(children, parent.current);
}

export default memo(Portal);
