import logo_img from '@/../public/imgs/logo_img.png';
import Image from 'next/image';
import * as stx from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { spacing } from '@/app/_styles/globalTokens.stylex';

export default function Logo() {
  return (
    <Image
      src={logo_img}
      alt="logo"
      width={124}
      height={24}
      {...stxP(styles.logo)}
    />
  );
}

const styles = stx.create({
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
});
