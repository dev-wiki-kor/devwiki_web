import * as stx from '@stylexjs/stylex';
import Link from 'next/link';
import { colors, display } from '@/app/_styles/globalTokens.stylex';
import { stxP } from '@/shared/lib/util/stylex';
import { SearchIcon } from '@/shared/UIKit/Icon';

const Links = [
  { name: 'Home', url: '/' },
  { name: '읽은문서', url: '/' },
  { name: '번역문서', url: '/' },
  { name: '엔지니어링', url: '/' },
  { name: 'QNA', url: '/' },
  { name: '건의사항', url: '/' },
  { name: '마이페이지', url: '/' },
];

export default function Navigation() {
  return (
    <nav>
      {/* <ul {...stx.props(styles.container)}> */}
      <ul {...stxP(styles.container)}>
        {Links.map((link) => (
          <li key={link.name} {...stxP(styles.li)}>
            <Link {...stxP(styles.link)} href={link.url}>
              <SearchIcon />
              <span {...stxP(styles.linkName)}>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = stx.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    gap: '24px 0',
    marginTop: '42px',
    backgroundColor: colors.white,
  },
  li: {
    height: '28px',
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
  },
  linkName: {
    fontSize: '15px',
    fontWeight: '500',
    color: colors.black,
    display: display.mobile,
  },
});
