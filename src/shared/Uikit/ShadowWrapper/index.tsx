import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { ReactNode } from 'react';
import { IStyleX } from '@/shared/type/styleX';

interface Props extends IStyleX {
  children: ReactNode;
}

export default function ShadowWrapper({ children, styleX }: Props) {
  return <div {...stxP(styles.container, styleX)}>{children}</div>;
}

const styles = stx.create({
  container: {
    width: '100%',
    padding: '16px 12px',
    border: '1px solid #eee',
    borderRadius: '8px',
    boxShadow: '0px 4px 4px 0px #0000000D',
  },
});
