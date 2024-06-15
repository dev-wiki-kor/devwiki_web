import menu_home from '@/shared/svgs/menu_home.svg';
import menu_engineering from '@/shared/svgs/menu_engineering.svg';
import menu_myPage from '@/shared/svgs/menu_mypage.svg';
import menu_QnA from '@/shared/svgs/menu_QnA.svg';
import menu_readDocument from '@/shared/svgs/menu_ReadDocument.svg';
import menu_suggest from '@/shared/svgs/menu_suggest.svg';
import menu_translatedDocument from '@/shared/svgs/menu_TranslatedDocument.svg';
import { TOptionalIconProps } from '@/shared/UIKit/Icon/base';
import Image from 'next/image';

const MENU_ICON = {
  menu_home: menu_home.src,
  menu_engineering: menu_engineering.src,
  menu_myPage: menu_myPage.src,
  menu_QnA: menu_QnA.src,
  menu_readDocument: menu_readDocument.src,
  menu_suggest: menu_suggest.src,
  menu_translatedDocument: menu_translatedDocument.src,
};

export type TMenuIconKey = keyof typeof MENU_ICON;

interface Props extends TOptionalIconProps {
  iconKey: TMenuIconKey;
}

export default function NaviIcon({ iconKey, ...rest }: Props) {
  const src = MENU_ICON[iconKey] as string;
  const id = `#${iconKey}`;

  return <Image src={src} alt={id} width={24} height={24} />;
  // return <Icon {...rest} src={src} id={id} title={id.toString()} />;
}
