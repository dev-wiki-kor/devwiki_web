import { atom } from 'recoil';
import { TModalType } from '@/feature/modal/model/model';

type TModalState = Record<TModalType, boolean>;

export const modalState = atom<TModalState>({
  key: 'modalState',
  default: {
    search: false,
    login: false,
  },
});

export default {};
