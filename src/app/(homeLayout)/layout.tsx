import * as stx from '@stylexjs/stylex';

import { ReactNode } from 'react';
import { Sidebar } from '@/widgets/sidebar';
import Header from '@/widgets/header/ui/Header';
import { stxP } from '@/shared/lib/util/stylex';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main {...stxP(styles.container)}>
        <Sidebar />
        {children}
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
