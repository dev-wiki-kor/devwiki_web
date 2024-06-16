import { IStyleX } from '@/shared/type/styleX';
import { ReactNode } from 'react';
import * as stx from '@stylexjs/stylex';
import { text } from '@/app/_styles/globalTokens.stylex';

interface Props extends IStyleX {
  children: ReactNode;
}

export function H5({ children, css, styleX }: Props) {
  return (
    <h5 {...stx.props(styles.h5, styleX)} style={css}>
      {children}
    </h5>
  );
}

export function P({ children, css, styleX }: Props) {
  return (
    <p {...stx.props(styles.p, styleX)} style={css}>
      {children}
    </p>
  );
}

const styles = stx.create({
  h5: {
    font: text.h5,
    lineHeight: '24px',
    color: '#444',
    fontWeight: 'bold',
  },
  p: {
    font: text.p,
    lineHeight: '24px',
    color: '#444',
    fontWeight: 'normal',
  },
});
