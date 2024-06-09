import * as stx from '@stylexjs/stylex';
import {
  CompiledStyles,
  InlineStyles,
  StyleXArray,
} from '@stylexjs/stylex/lib/StyleXTypes';

export function stxP(
  this: null | undefined | unknown,
  ...styles: ReadonlyArray<
    StyleXArray<
      | (null | undefined | CompiledStyles)
      | boolean
      | Readonly<[CompiledStyles, InlineStyles]>
    >
  >
) {
  return stx.props(styles);
}

export default {};
