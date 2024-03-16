export const cookieValueToObj = (value: string) => {
  return value.split('&').reduce<Record<string, string>>((acc, cur) => {
    const [k, v] = cur.split('=');
    acc[k] = v;
    return acc;
  }, {});
};

export const makeCookieValue = (obj: Record<string, string>) => {
  return Object.entries(obj)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
};
