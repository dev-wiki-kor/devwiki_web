import { ReactNode } from 'react';
import { Sidebar } from '@/widgets/sidebar';
import Header from '@/widgets/header/ui/Header';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}
// const styles = stx.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
// });
