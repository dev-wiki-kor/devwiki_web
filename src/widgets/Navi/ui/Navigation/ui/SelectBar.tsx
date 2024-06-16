'use client';

import { memo, ReactNode, useEffect, useRef, useState } from 'react';
import * as stx from '@stylexjs/stylex';
import { usePathname } from 'next/navigation';
import { stxP } from '@/shared/lib/util/stylex';

const naviPathList = [
  '/',
  '/readDocument',
  '/translatedDocument',
  '/engineering',
  '/QnA',
  '/suggest',
  '/myPage',
];

interface Props {
  children: ReactNode;
}

function SelectBar({ children }: Props) {
  const [isShow, setIsShow] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const pathNm = usePathname();

  useEffect(() => {
    if (selectRef && selectRef.current) {
      const selectBox = selectRef.current;

      if (!isShow) {
        setIsShow(true);
        selectBox.style.display = 'block';
      }

      const currActiveIdx = naviPathList.findIndex((path) => path === pathNm);
      const defaultTop = -12;

      if (currActiveIdx === 0) {
        selectRef.current.style.top = `${defaultTop}px`;
        return;
      }

      selectRef.current.style.top = `${defaultTop + 52 * currActiveIdx}px`;
    }
  }, [pathNm]);

  return (
    <>
      {children}
      <div ref={selectRef} {...stxP(styles.activeBar)} />
    </>
  );
}

export default memo(SelectBar);

const styles = stx.create({
  activeBar: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    height: '44px',
    top: '-12px',
    backgroundColor: '#D1DEE9',
    borderRadius: '8px',
    transition: 'top 0.3s',
  },
});
