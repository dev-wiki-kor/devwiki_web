import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';

interface Props {
  title: string;
  isSelected: boolean;
}

export default function PageTitle({ title, isSelected = true }: Props) {
  return (
    <h1 {...stxP(styles.title, !isSelected && styles.notSelected)}>{title}</h1>
  );
}

const styles = stylex.create({
  title: {
    fontSize: '24px',
    fontWeight: 'medium',
    color: colors.black,
    margin: '50px 0 20px',
  },
  notSelected: {
    color: '6A6A6A',
  },
});
