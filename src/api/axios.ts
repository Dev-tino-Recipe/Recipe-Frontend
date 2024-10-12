import { AxiosRequestConfig, AxiosResponse } from "axios";
import { serverAxiosRequest } from "@/api/serverAxios";
import { clientAxiosRequest } from "@/api/clientAxios";

export async function axiosRequest<T>(
  config: AxiosRequestConfig,
  isOwnServer: boolean
) {
  let response: AxiosResponse<T, AxiosRequestConfig>;
  if (isOwnServer) {
    response = await serverAxiosRequest<T>(config, isOwnServer);
  } else {
    response = await clientAxiosRequest<T>(config, isOwnServer);
  }

  return response;
}
