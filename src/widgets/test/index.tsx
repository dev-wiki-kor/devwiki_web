'use client';

import useTestStore from '@/widgets/test/store';
import { useQueryClient } from '@tanstack/react-query';
import { testApi } from '@/widgets/test/api';
import { TqueryResult } from '@/shared/type/mapped';
import * as stylex from '@stylexjs/stylex';

export default function Test() {
  const queryClient = useQueryClient();
  const test = queryClient.getQueryData<TqueryResult<typeof testApi>>(['test']);
  const bears = useTestStore((state) => state.bears);

  if (!test || !test.isSucceed) return null;
  return <div {...stylex.props(styles.container)}>{test.body.dateTime}</div>;
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: '10px',
  },
});
