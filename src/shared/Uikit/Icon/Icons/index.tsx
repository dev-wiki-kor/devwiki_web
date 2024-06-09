import SearchSvg from '@/shared/svgs/search.svg';
import Icon from '@/shared/UIKit/Icon/svgBase';
import { CSSProperties } from 'react';
import { IStyleX } from '@/shared/type/styleX';

interface Props extends IStyleX {}

export function SearchIcon({ styleX }: Props) {
  const id = '#search';
  const { src } = SearchSvg;

  const style: CSSProperties = {
    width: '24px',
    height: '24px',
  };

  return (
    <Icon
      src={src}
      id={id}
      title={id.toString()}
      svgAttr={{
        style,
      }}
      styleX={styleX}
    />
  );
}

export default {};
