'use server';

import { revalidateTag } from 'next/cache';

const testAction = async () => {
  revalidateTag('TEST2');
};

export default testAction;
