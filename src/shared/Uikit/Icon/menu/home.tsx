import menu_home from '@/shared/svgs/menu_home.svg';
import menu_engineering from '@/shared/svgs/menu_engineering.svg';
import menu_mypage from '@/shared/svgs/menu_mypage.svg';
import menu_q_a from '@/shared/svgs/menu_q&a.svg';
import menu_ReadDocument from '@/shared/svgs/menu_ReadDocument.svg';
import menu_suggest from '@/shared/svgs/menu_suggest.svg';
import menu_TranslatedDocument from '@/shared/svgs/menu_TranslatedDocument.svg';
import Icon from '@/shared/UIKit/Icon/svgBase';

const MENU_ICON = {
  menu_home: menu_home.src,
  menu_engineering: menu_engineering.src,
  menu_mypage: menu_mypage.src,
  menu_q_a: menu_q_a.src,
  menu_ReadDocument: menu_ReadDocument.src,
  menu_suggest: menu_suggest.src,
  menu_TranslatedDocument: menu_TranslatedDocument.src,
};

interface Props {
  iconKey: keyof typeof MENU_ICON;
}

export default function MenuIcon({ iconKey }: Props) {
  const src = MENU_ICON[iconKey];
  const id = `#${iconKey}`;
  return <Icon src={src} id={id} title={id.toString()} />;
}
