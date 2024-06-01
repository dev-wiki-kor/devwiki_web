'use client';

import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

type TParentNode = 'modal';

interface Props {
  ParentNode: TParentNode;
  children: ReactNode;
}

export default function Portal({ ParentNode, children }: Props) {
  const parent = useRef<HTMLDivElement>(
    document.getElementById(ParentNode) as HTMLDivElement,
  );

  return createPortal(children, parent.current);
}
