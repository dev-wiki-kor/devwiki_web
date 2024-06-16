import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { H5, P } from '@/shared/UIKit/HeadTitle';

export default function Head() {
  return (
    <>
      <H5>도움이 필요해요</H5>
      <P styleX={[styles.p]}>도움이 필요하신가요?</P>
      <div {...stxP(styles.divider)} />
    </>
  );
}

const styles = stx.create({
  p: {
    marginTop: '5px',
  },
  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: '#eee',
    marginTop: '15px',
  },
});
