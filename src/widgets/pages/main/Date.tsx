import { HydrationBoundary } from '@tanstack/react-query';
import { testApi } from '@/features/test/api';
import getDehydratedQuery from '@/shared/reactQuery/util';

export default async function Date() {
  const { dehydratedQuery } = await getDehydratedQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const { isSucceed, body } = await testApi();
      if (!isSucceed) return null;
      return body;
    },
  });

  return (
    <HydrationBoundary
      state={{
        queries: [dehydratedQuery],
      }}
    >
      <div>date</div>
    </HydrationBoundary>
  );
}
