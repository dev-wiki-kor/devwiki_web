import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';

import WelcomeMsg from '@/widgets/sidebar/ui/WelcomMgs';
import Navigation from '@/widgets/sidebar/ui/Navigation';

export default function Sidebar() {
  return (
    <aside {...stxP(styles.container)}>
      <WelcomeMsg />
      <Navigation />
    </aside>
  );
}

const styles = stx.create({
  container: {
    width: '250px',

    display: 'flex',
    flexDirection: 'column',

    flexGrow: 1,
  },
});
