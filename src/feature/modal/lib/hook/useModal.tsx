'use client';

import { useRecoilState } from 'recoil';

import { modalState } from '@/feature/modal/model/store';
import { TModalType } from '@/feature/modal/model/model';
import { useCallback } from 'react';

export default function useModal(type: TModalType) {
  const [modal, setModal] = useRecoilState(modalState);

  const isOpen = modal[type];

  const openModal = useCallback(() => {
    setModal((prev) => ({ ...prev, [type]: true }));
  }, []);

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, [type]: false }));
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
