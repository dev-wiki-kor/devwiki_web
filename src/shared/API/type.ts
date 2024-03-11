// import { THttpStatusCodeKey } from '@/shared/type/httpStatusCode';

export type THttpMethod = 'GET' | 'POST' | 'PUT';

export type TParams = Record<string, any>;

export interface IErrorMsg {
  code: string;
  message: string;
}

interface IBaseHttpResponse {
  code: string;
  httpStatus: number;
  res: Response;
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
