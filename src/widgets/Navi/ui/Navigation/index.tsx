import * as stx from '@stylexjs/stylex';
import { colors } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { TMenuIconKey } from '@/shared/UIKit/Icon/navi';
import Link from 'next/link';
import { NaviIcon } from '@/shared/UIKit/Icon';
import SelectBar from '@/widgets/Navi/ui/Navigation/ui/SelectBar';

export interface ILink {
  name: string;
  url: string;
  iconKey: TMenuIconKey;
}

const Links: ILink[] = [
  { name: 'Home', url: '/', iconKey: 'menu_home' },
  { name: '읽은문서', url: '/readDocument', iconKey: 'menu_readDocument' },
  {
    name: '번역문서',
    url: '/translatedDocument',
    iconKey: 'menu_translatedDocument',
  },
  { name: '엔지니어링', url: '/engineering', iconKey: 'menu_engineering' },
  { name: 'QNA', url: '/QnA', iconKey: 'menu_QnA' },
  { name: '건의사항', url: '/suggest', iconKey: 'menu_suggest' },
  { name: '마이페이지', url: '/myPage', iconKey: 'menu_myPage' },
];

export default function Navigation() {
  return (
    <ul {...stxP(styles.container)}>
      <SelectBar>
        {Links.map((link) => (
          <li key={link.name} {...stxP(styles.li)}>
            <NaviItem {...link} />
          </li>
        ))}
      </SelectBar>
    </ul>
  );
}

function NaviItem({ iconKey, url, name }: ILink) {
  return (
    <>
      <Link {...stxP(styles.link)} href={url}>
        <NaviIcon iconKey={iconKey} />
        <span {...stxP(styles.linkName)}>{name}</span>
      </Link>
    </>
  );
}

const styles = stx.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    gap: '24px 0',
    marginTop: '42px',
    backgroundColor: colors.white,
  },
  li: {
    position: 'relative',
    height: '28px',
  },
  link: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    zIndex: '1',
  },
  linkName: {
    fontSize: '15px',
    fontWeight: '500',
    color: colors.black,
  },
});
