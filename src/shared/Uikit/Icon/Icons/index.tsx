import SearchSvg from '@/shared/svgs/search.svg';
import Icon from '@/shared/uIkit/Icon/base';
import { CSSProperties } from 'react';

export function SearchIcon() {
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
    />
  );
}

export default {};
