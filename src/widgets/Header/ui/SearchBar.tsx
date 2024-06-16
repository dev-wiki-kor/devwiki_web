'use client';

import * as stx from '@stylexjs/stylex';
import { SearchIcon } from '@/shared/UIKit/Icon';
import { colors } from '@/app/_styles/globalTokens.stylex';
import useModal from '@/feature/modal/lib/hook/useModal';

export default function SearchBar() {
  const { openModal } = useModal('search');
  const handleClick = () => {
    openModal();
  };

  return (
    <div {...stx.props(styles.box)}>
      <button {...stx.props(styles.container)} onClick={handleClick}>
        <input {...stx.props(styles.input)} type="text" disabled={true} />
        <SearchIcon />
      </button>
    </div>
  );
}

const styles = stx.create({
  box: {
    display: 'flex',
    alignItems: 'center',
    // todo 변경 필요
    justifyContent: 'center',
    flex: '1',
  },
  container: {
    width: '100%',
    maxWidth: '694px',
    height: '40px',

    overflow: 'hidden',
    borderRadius: '9px',

    display: 'flex',
    alignItems: 'center',

    backgroundColor: colors.white,
    border: `1px solid ${colors.white}`,
  },
  input: {
    height: '13px',
    lineHeight: '28px',
    width: 'calc(100% - 40px)',
  },
});
