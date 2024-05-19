import * as stx from '@stylexjs/stylex';
import WelcomeMsg from '@/widgets/sidebar/ui/WelcomMgs';

export default function Sidebar() {
  return (
    <div>
      <WelcomeMsg />
    </div>
  );
}

const styles = stx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
