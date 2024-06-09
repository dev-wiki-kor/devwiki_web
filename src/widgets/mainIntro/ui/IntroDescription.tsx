import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';

interface Props {
  title: string;
}

export default function IntroDescription({ title }: Props) {
  return (
    <div {...stxP(styles.container)}>
      <p {...stxP(styles.title)}>{title}</p>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '16px',
    lineHeight: '28px',
    fontWeight: 'medium',
    color: colors.black,
  },
});
