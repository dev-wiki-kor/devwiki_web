import BaseFetch from '@/shared/api/BaseFetch';
import {
  IErrorMsg,
  THeaderContentKey,
  THttpMethod,
  THttpResponse,
  TParams,
} from '@/shared/api/type';
import { HeaderContent, HTTP_STATUS_CODE } from '@/shared/api/constant';

const IS_MOCKING = false;

export default class Fetch extends BaseFetch {
  private readonly isMock: boolean = false;

  constructor(url: string, nextTag?: string | string[], isMock?: boolean) {
    super(url);

    if (nextTag)
      this.init.next = {
        tags: typeof nextTag === 'string' ? [nextTag] : nextTag,
      };

    if (IS_MOCKING && isMock) this.isMock = true;

    this.addCache('no-store');
  }

  public async request<S extends {}, F = IErrorMsg>(): Promise<
    THttpResponse<S, F>
  > {
    this.setRequestConfig();

    try {
      const res = await fetch(this.url, this.init);
      const body = res.status === 204 ? {} : await res.clone().json();

      if (!res.ok) {
        const { code } = body;
        return {
          code,
          httpStatus: res.status,
          body: body as F,
          isSucceed: res.ok,
        };
      }

      return {
        code: HTTP_STATUS_CODE['200'],
        httpStatus: res.status,
        body: body as S,
        isSucceed: res.ok,
      };
    } catch (err) {
      // if ((err as Error).message === ERROR_CODE['9000001'].toString()) {
      //   throw new Error(ERROR_CODE['9000001'].toString());
      // }

      return {
        code: HTTP_STATUS_CODE['501'],
        httpStatus: 500,
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

  public addHeaderContent(key: THeaderContentKey) {
    this.HeaderContentKey = key;
    this.addConfig({
      headers: {
        ...this.init.headers,
        'Content-Type': HeaderContent[key],
      },
    });
    return this;
  }
}
