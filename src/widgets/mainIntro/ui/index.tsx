import * as stylex from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { ReactNode } from 'react';
import IntroTitle from '@/widgets/mainIntro/ui/IntroTitle';
import IntroImage from '@/widgets/mainIntro/ui/IntroImage';
import IntroDescription from '@/widgets/mainIntro/ui/IntroDescription';

interface Props {
  children: ReactNode;
}

function Base({ children }: Props) {
  return <div {...stxP(styles.container)}>{children}</div>;
}

const styles = stylex.create({
  container: {
    width: '100%',
    backgroundColor: colors.gray1,
    padding: '20px 24px',
  },
});

Base.displayName = 'MainIntro';

const MainIntro = Object.assign(Base, {
  Title: IntroTitle,
  Image: IntroImage,
  Description: IntroDescription,
});

export default MainIntro;
