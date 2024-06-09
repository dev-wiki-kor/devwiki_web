import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';

interface Props {
  iconKey: string;
  title: string;
}

export default function IntroTitle({ iconKey, title }: Props) {
  return (
    <div {...stxP(styles.container)}>
      {/* icon */}
      <h1 {...stxP(styles.title)}>{title}</h1>;
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'medium',
    color: colors.black,
  },
});
