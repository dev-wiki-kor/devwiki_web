import { StyleXStyles } from '@stylexjs/stylex';
import { CSSProperties } from 'react';

// 배열 리터럴을 사용하면 여러 StyleX 객체를 사용 할 수 있음.
export interface IStyleX {
  styleX?: StyleXStyles;
  css?: CSSProperties;
}
