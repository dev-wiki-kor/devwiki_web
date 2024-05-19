import NaviHomeSvg from '@/shared/svgs/ㅣink/home.svg';
import Icon from '@/shared/uIkit/Icon';

export default function NaviHomeIcon() {
  const id = '#home';
  const { src } = NaviHomeSvg;

  return <Icon src={src} id={id} title={id.toString()} />;
}
