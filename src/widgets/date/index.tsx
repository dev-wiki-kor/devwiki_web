import { HydrationBoundary } from '@tanstack/react-query';
import { testApi } from '@/widgets/test/api';
import getDehydratedQuery from '@/shared/reactQuery/util';
import Test from '@/widgets/test';
import * as stylex from '@stylexjs/stylex';

export default async function Date() {
  const { dehydratedQuery } = await getDehydratedQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const res = await testApi();
      if (!res.isSucceed) return null;
      return res;
    },
  });

  return (
    <HydrationBoundary
      state={{
        queries: [dehydratedQuery],
      }}
    >
      <div {...stylex.props(styles.label)}>date</div>
      <Test />
    </HydrationBoundary>
  );
}

const styles = stylex.create({
  label: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    color: 'white',
    width: '100%',
    height: '50px',
  },
});
