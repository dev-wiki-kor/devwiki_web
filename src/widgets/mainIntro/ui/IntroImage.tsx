import * as stylex from '@stylexjs/stylex';
import { stxP } from '@/shared/lib/util/stylex';
import Image, { ImageProps } from 'next/image';
import { TMakeOptionalKey } from '@/shared/type/mapped';
import main_intro from '../../../../public/imgs/main_intro.jpg';

interface Props {
  imgKey: keyof typeof IMAGE;
  imgProps?: TMakeOptionalKey<ImageProps>;
}

const IMAGE = {
  main: {
    src: main_intro,
    alt: 'main_intro',
  },
};

export default function IntroImage({ imgKey, imgProps }: Props) {
  const { src, alt } = IMAGE[imgKey];

  return (
    <div {...stxP(styles.container)}>
      <Image
        {...stxP(styles.image)}
        {...(imgProps ?? {})}
        src={src}
        alt={alt}
        priority={true}
        // fill={true}
      />
    </div>
  );
}

const styles = stylex.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    margin: '15px auto',
    maxWidth: '672px',
    maxHeight: '324px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
