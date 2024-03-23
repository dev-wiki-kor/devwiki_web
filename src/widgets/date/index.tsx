import { HydrationBoundary } from '@tanstack/react-query';
import { testApi } from '@/widgets/test/api';
import getDehydratedQuery from '@/shared/reactQuery/util';
import Test from '@/widgets/test';

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
      <Test />
    </HydrationBoundary>
  );
}
