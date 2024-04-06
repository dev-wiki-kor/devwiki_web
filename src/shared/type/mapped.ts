import { ComponentPropsWithoutRef, ElementType } from 'react';

export type TqueryFn = (...args: unknown[]) => Promise<unknown>;

export type TqueryResult<Qfn extends TqueryFn> = Awaited<ReturnType<Qfn>>;

export type TRemoveDuplicatedKey<Target extends {}, Props extends {}> = Props &
  Omit<Target, keyof Props>;

export type TRemoveDuplicatedEle<T extends ElementType, Props = {}> = Props &
  Omit<ComponentPropsWithoutRef<T>, keyof Props>;

export type TPolymorphic<
  T extends ElementType,
  Props extends {
    as?: T;
  },
> = TRemoveDuplicatedEle<T, Props>;
