import { ReactNode } from 'react';
import { Sidebar } from '@/widgets/sidebar';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
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
