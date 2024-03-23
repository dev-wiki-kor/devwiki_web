'use client';

import useTestStore from '@/widgets/test/store';
import { useQueryClient } from '@tanstack/react-query';

export default function Test() {
  const queryClient = useQueryClient();
  const test = queryClient.getQueryData(['test']);
  const bears = useTestStore((state) => state.bears);
  return <div></div>;
}
