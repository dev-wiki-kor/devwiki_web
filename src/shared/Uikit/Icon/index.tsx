/**
 * Icon component
 * @constructor
 * svg use id로 아이콘을 가져온다.
 * 해당 아이콘 svg 파일은 서버 빌드시 생성된다.
 */
import { TRemoveDuplicatedEle } from '@/shared/type/mapped';

type TAttr = TRemoveDuplicatedEle<'svg', Props>;

interface Props {
  src: any;
  id: string;
  title: string;
  className?: string;
  attr?: TAttr;
}

export default function Icon({ src, id, title, className, attr }: Props) {
  return (
    <svg {...attr}>
      <use href={`${src}${id}`} className={`${className ?? ''}`} />
      <title>{title}</title>
    </svg>
  );
}
