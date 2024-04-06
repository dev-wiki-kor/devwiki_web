'use client';

import useTestStore from '@/widgets/test/store';
import { useQueryClient } from '@tanstack/react-query';
import { testApi } from '@/widgets/test/api';
import { TqueryResult } from '@/shared/type/mapped';

export default function Test() {
  const queryClient = useQueryClient();
  const test = queryClient.getQueryData<TqueryResult<typeof testApi>>(['test']);
  const bears = useTestStore((state) => state.bears);

  if (!test || !test.isSucceed) return null;
  return <div></div>;
}
