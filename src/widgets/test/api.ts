import Fetch from '../../shared/api';

export const testApi = async () => {
  const timeZone = 'UTC';
  const url = `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`;
  const res = await new Fetch(url)
    .addNextConfig({
      tags: ['DATE'],
    })
    .addCache('force-cache')
    .request<{
      dateTime: string;
    }>();

  return res;
};

export default {};
