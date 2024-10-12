"use server";

import { cookies } from "next/headers";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

function axiosInstance(isOwnServer: boolean) {
  const session = cookies().get("session_cookie_name")?.value;

  return axios.create({
    baseURL: `http://localhost:${isOwnServer ? "3000" : "4000"}/api`,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
      Cookie: `session_cookie_name=${session}`,
    },
    withCredentials: true,
  });
}

export async function serverAxiosRequest<T>(
  config: AxiosRequestConfig,
  isOwnServer: boolean
) {
  let response: AxiosResponse<T, AxiosRequestConfig<T>>;
  try {
    response = await axiosInstance(isOwnServer).request(config);
  } catch (e) {
    if (e instanceof AxiosError) {
      response = (e as AxiosError<T, AxiosRequestConfig<T>>).response!;
    } else {
      throw e;
    }
  }

  return response;
}
