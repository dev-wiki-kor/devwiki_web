import * as stx from '@stylexjs/stylex';

import { ReactNode } from 'react';
import Header from '@/widgets/Header/ui/Header';
import { stxP } from '@/shared/lib/util/stylex';
import { Navi } from '@/widgets/Navi';
import { Sidebar } from '@/widgets/Sidebar';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Navi />
      <main {...stxP(styles.container)}>
        {children}
        <Sidebar />
      </main>
    </div>
  );
}
const styles = stx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});
