import * as stx from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import SearchBar from '@/widgets/Header/ui/SearchBar';
import Logo from '@/widgets/Header/ui/Logo';

export default function Header() {
  return (
    <header {...stx.props(styles.container)}>
      <Logo />
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
    // justifyContent: 'space-between',
    backgroundColor: colors.skyBlue,
  },
});
