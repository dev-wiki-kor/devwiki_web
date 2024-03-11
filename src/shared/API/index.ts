/* eslint-disable no-undef */

import {
  IErrorMsg,
  THttpMethod,
  THttpResponse,
  TParams,
} from '@/shared/API/type';

export default class Fetch {
  private url: string;

  private readonly isMock: boolean = false;

  private method: THttpMethod = 'GET';

  private params: TParams = {};

  private init: RequestInit = {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  constructor(url: string, nextTag?: string | string[]) {
    this.url = url;

    if (nextTag)
      this.init.next = {
        tags: typeof nextTag === 'string' ? [nextTag] : nextTag,
      };
  }

  public async request<S extends {}, F = IErrorMsg>(): Promise<
    THttpResponse<S, F>
  > {
    this.setRequestConfig();
    console.log(this.init);
    try {
      const res = await fetch(this.url, this.init);
      const { code } = await res.clone().json();
      const body = await res.clone().json();

      this.httpLog('request', body);

      if (!res.ok) {
        return {
          code,
          httpStatus: res.status,
          res,
          body: body as F,
          isSucceed: res.ok,
        };
      }

      return {
        code: '200',
        httpStatus: res.status,
        res,
        body: body as S,
        isSucceed: res.ok,
      };
    } catch (err) {
      /**
       * TODO 에러 던지면 에러 페이지로 이동,
       * TODO 에러 코드에 맞춰 명시적 리턴이 필요한지 확인 필요
       */
      this.httpLog('error');
      return {
        code: '500',
        httpStatus: 500,
        res: new Response(),
        body: err as F,
        isSucceed: false,
      };
    }
  }

  public addParams<T extends TParams>(params: T) {
    this.params = {
      ...this.params,
      ...params,
    };
    return this;
  }

  public httpMethod(method: THttpMethod) {
    this.method = method;
    this.init.method = method;
    return this;
  }

  public addConfig(config: RequestInit) {
    this.init = {
      ...this.init,
      ...config,
    };
    return this;
  }

  public addNextConfig(nextConfig: NextFetchRequestConfig) {
    this.init.next = {
      ...this.init.next,
      ...nextConfig,
    };
    return this;
  }

  public addCache(cacheConfig: RequestCache) {
    this.init.cache = cacheConfig;
    return this;
  }

  private setRequestConfig() {
    this.setUrlPrefix();
    this.setParams();
    this.init.method = this.method;
  }

  private setParams() {
    if (this.method === 'GET') {
      const query = Object.keys(this.params)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(this.params[key])}`,
        )
        .join('&');
      if (query) this.url += `?${query}`;
      return;
    }

    this.init.body = JSON.stringify(this.params);
  }

  private setUrlPrefix() {
    let prefix: string | undefined;
    // else prefix = IS_NODE ? API_URL : ''
    if (prefix) this.url = prefix + this.url;
  }

  private httpLog(msg: string, body?: any) {
    if (process.env.IS_LOOK_LOG !== 'true') return;
    console.log('msg: ', msg);
    console.log(
      '\x1b[0m%s',
      `[REQUEST] ${new Date().toLocaleString('ko-kr')} :: ${this.url}`,
    );
    console.log(`params: ${JSON.stringify(this.params)}`);
    console.log(`headers: ${JSON.stringify(this.init.headers)}`);
    if (body) console.log('\x1b[32m%s', `[RESPONSE] ${JSON.stringify(body)}`);
    console.log('');
  }
}
