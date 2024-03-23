import { HeaderContent } from '@/shared/api/constant';

export type THttpMethod = 'GET' | 'POST' | 'PUT';

export type TParams = Record<string, any>;

export interface IErrorMsg {
  code: string;
  message: string;
}

interface IBaseHttpResponse {
  code: number;
  httpStatus: number;
  // res: Response;
}

export interface IHttpSResponse<S> extends IBaseHttpResponse {
  isSucceed: true;
  body: S;
}

export interface IHttpFResponse<F> extends IBaseHttpResponse {
  isSucceed: false;
  body: F;
}

export type THttpResponse<S, F> = IHttpSResponse<S> | IHttpFResponse<F>;

export type THeaderContentKey = keyof typeof HeaderContent;
