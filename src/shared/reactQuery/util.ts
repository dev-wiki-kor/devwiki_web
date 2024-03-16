import { cache } from 'react';
import {
  dehydrate,
  QueryClient,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';

const getQueryClient = cache(() => new QueryClient());

interface Props {
  queryKey: QueryKey;
  queryFn: QueryFunction;
}

export default async function getDehydratedQuery({ queryKey, queryFn }: Props) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey, queryFn });
  const currFetchQuery = queryClient.getQueryData(queryKey);

  const { queries } = dehydrate(queryClient);
  const [dehydratedQuery] = queries.filter((query) =>
    Object.is(query.queryKey, queryKey),
  );

  return { dehydratedQuery, currFetchQuery };
}
