import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';

import WelcomeMsg from '@/widgets/Navi/ui/WelcomMgs';
import Navigation from '@/widgets/Navi/ui/Navigation';

export default function Index() {
  return (
    <nav {...stxP(styles.container)}>
      <WelcomeMsg />
      <Navigation />
    </nav>
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
