import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export async function apiHelper<T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  const response = await axios(config);
  return response;
}
