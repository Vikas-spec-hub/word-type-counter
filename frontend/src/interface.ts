export interface IApiResponse {
  status: string;
  message: string;
}

export interface IResponseWithBody<T> extends IApiResponse {
  body: T;
}

export interface IResponse {
  [key: string]: number;
}
