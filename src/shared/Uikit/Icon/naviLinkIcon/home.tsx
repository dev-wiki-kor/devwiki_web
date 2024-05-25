import NaviHomeSvg from '@/shared/svgs/link/home.svg';
import Icon from '@/shared/uIkit/Icon/base';

export default function NaviHomeIcon() {
  const id = '#home';
  const { src } = NaviHomeSvg;

  return <Icon src={src} id={id} title={id.toString()} />;
}
