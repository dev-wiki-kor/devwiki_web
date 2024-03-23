import { HEADER } from '@/shared/Apibase/constant';
import { THeaderContentKey, THttpMethod, TParams } from '@/shared/Apibase/type';

export default class BaseFetch {
  protected url: string;

  protected init: RequestInit = {
    headers: {
      [HEADER.contentType]: 'application/json',
    },
    credentials: 'include',
  };

  protected params: TParams = {};

  protected HeaderContentKey: THeaderContentKey = 'json';

  protected method: THttpMethod = 'GET';

  constructor(url: string) {
    this.url = url;
  }

  protected setRequestConfig() {
    this.setUrlPrefix();
    this.setParams();
    this.init.method = this.method;
  }

  protected setUrlPrefix() {
    let prefix: string | undefined;

    // if (this.isMock) prefix = IS_NODE ? MOCK_API_URL : '';
    // else prefix = IS_NODE ? API_URL : '';

    if (prefix) this.url = prefix + this.url;
  }

  private setParams() {
    if (this.method === 'GET') this.getParams();
    else this.postParams();
  }

  private getParams() {
    const query = Object.keys(this.params)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(this.params[key])}`,
      )
      .join('&');
    if (query) this.url += `?${query}`;
  }

  private postParams() {
    switch (this.HeaderContentKey) {
      case 'json':
        this.init.body = JSON.stringify(this.params);
        break;
      case 'form': {
        const formData = new FormData();
        Object.keys(this.params).forEach((key) => {
          formData.append(key, this.params[key]);
        });
        this.init.body = formData;
        break;
      }
      case 'xForm': {
        const xForm = new URLSearchParams();
        Object.keys(this.params).forEach((key) => {
          xForm.append(key, this.params[key]);
        });
        this.init.body = xForm.toString();
        break;
      }
      default:
        break;
    }
  }
}
