import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance";

export async function axiosRequest<T>(
  config: AxiosRequestConfig,
  isOwnServer: boolean,
  session_cookie_name?: string
) {
  let response: AxiosResponse<T, typeof config>;

  if (session_cookie_name) {
    config.headers = { ...config.headers, Cookie: session_cookie_name };
  }

  try {
    response = await axiosInstance(isOwnServer).request(config);
  } catch (e) {
    if (e instanceof AxiosError) {
      response = (e as AxiosError<T, typeof config>).response!;
    } else {
      response = {
        data: {} as T,
        status: 500,
        statusText: "Internal Server Error",
        headers: { "Content-Type": "application/json" },
        config,
      } as AxiosResponse<T, typeof config>;
    }
    console.error(e);
  }
  return response;
}
