import * as stx from '@stylexjs/stylex';
import ShadowWrapper from '@/shared/UIKit/ShadowWrapper';

export default function RecentDOCOfTag() {
  return (
    <ShadowWrapper styleX={styles.container}>RecentDOCOfTag</ShadowWrapper>
  );
}

const styles = stx.create({
  container: {
    marginTop: '20px',
  },
});
