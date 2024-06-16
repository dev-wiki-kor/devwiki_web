import * as stx from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { IStyleX } from '@/shared/type/styleX';

const keyWordInfo = {
  translate: {
    label: '번역',
    bg: colors.lightGreen,
  },
  qna: {
    label: 'Q&A',
    bg: colors.skyBlue,
  },
  tech: {
    label: 'tech',
    bg: colors.pink,
  },
};

const sizes = {
  sm: {
    width: '55px',
    height: '19px',
    fontSize: '12px',
  },
  md: {
    width: '62px',
    height: '28px',
    fontSize: '14px',
  },
};

interface Props extends IStyleX {
  keyWordType: keyof typeof keyWordInfo;
  size?: keyof typeof sizes;
}

export default function Keyword({ keyWordType, size = 'md', styleX }: Props) {
  const { label, bg } = keyWordInfo[keyWordType];

  return (
    <div
      {...stx.props(styles.container, styleX)}
      style={{
        ...sizes[size],
        backgroundColor: bg,
      }}
    >
      {label}
    </div>
  );
}

const styles = stx.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    fontWeight: 'normal',
  },
});
