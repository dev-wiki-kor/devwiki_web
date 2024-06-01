import * as stx from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import SearchBar from '@/widgets/header/ui/SearchBae';

export default function Header() {
  return (
    <header {...stx.props(styles.container)}>
      <SearchBar />
    </header>
  );
}

const styles = stx.create({
  container: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
  },
});
