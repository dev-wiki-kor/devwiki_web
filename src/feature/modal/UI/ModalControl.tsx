'use client';

import { useRecoilValue } from 'recoil';
import { modalState } from '@/feature/modal/model/store';
import Portal from '@/shared/UIKit/Portal';
import { ComponentType, useMemo } from 'react';
import { TModalType } from '@/feature/modal/model/model';
import dynamic from 'next/dynamic';

const Test = () => {
  return <div>gdgd</div>;
};

type TModalComponent = Record<TModalType, ComponentType>;

const ModalComponent: TModalComponent = {
  search: dynamic(() => Promise.resolve(Test), { ssr: false }),
  login: dynamic(() => Promise.resolve(Test), { ssr: false }),
};

/**
 * 요구 사항에 맞춰 멀티 모달 가능
 */
export default function ModalControl() {
  const modals = useRecoilValue(modalState);

  const Component = useMemo(() => {
    const activeKeys = (Object.keys(modals) as TModalType[]).filter(
      (key) => modals[key],
    );

    if (activeKeys.length === 0) return null;

    return activeKeys.map((key) => ModalComponent[key]);
  }, [modals]);

  return (
    <>
      {!!Component && (
        <Portal parentNode="modal">
          {Component.map((C, index) => (
            <C key={index} />
          ))}
        </Portal>
      )}
    </>
  );
}
