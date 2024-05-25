import * as stx from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { SearchIcon } from '@/shared/uIkit/Icon';

export default function Header() {
  return (
    <header {...stx.props(styles.container)}>
      <SearchIcon />
    </header>
  );
}

const styles = stx.create({
  container: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
