/**
 * Icon component
 * @constructor
 * svg use id로 아이콘을 가져온다.
 * 해당 아이콘 svg 파일은 서버 빌드시 생성된다.
 */
import { TEleAttr } from '@/shared/type/mapped';
import { IStyleX } from '@/shared/type/styleX';
import { stxP } from '@/shared/lib/util/stylex';
import { StyleXStyles } from '@stylexjs/stylex';

export interface IconProps extends IStyleX {
  src: any;
  id: string;
  title: string;
  style?: StyleXStyles;
  className?: string;
  svgAttr?: TEleAttr<'svg'>;
}

export type TOptionalIconProps = Pick<
  IconProps,
  'style' | 'svgAttr' | 'className'
>;

export default function Icon({
  src,
  id,
  title,
  className,
  svgAttr,
  styleX,
}: IconProps) {
  return (
    <svg {...stxP(styleX)} className={`${className ?? ''}`} {...svgAttr}>
      <use href={`${src}${id}`} />
      <title>{title}</title>
    </svg>
  );
}
