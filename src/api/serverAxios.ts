"use server";

import {cookies} from "next/headers";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

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
  isOwnServer: boolean,
) {
  // let response: ;
  const response = await axiosInstance(isOwnServer).request(config);
  // try {
    
  // } catch (e: any) {
  //   console.log(e.message);
  //   response = e?.response;
  // }

  return response as AxiosResponse<T, AxiosRequestConfig>;
}