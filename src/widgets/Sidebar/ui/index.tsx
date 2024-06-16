import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import Helper from '@/widgets/Sidebar/ui/Helper';
import RecentDOCOfTag from '@/widgets/Sidebar/ui/RecentDOCOfTag';

export default function Sidebar() {
  return (
    <div {...stxP(styles.container)}>
      <Helper />
      <RecentDOCOfTag />
    </div>
  );
}

const styles = stx.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});
