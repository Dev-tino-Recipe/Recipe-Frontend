import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

function axiosInstance(isOwnServer: boolean) {
  return axios.create({
    baseURL: `http://localhost:${isOwnServer ? "3000" : "4000"}/api`,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}

export async function clientAxiosRequest<T>(
  config: AxiosRequestConfig,
  isOwnServer: boolean
) {
  // let response: AxiosResponse<T, AxiosRequestConfig>;
  const response = await axiosInstance(isOwnServer).request(config);
  // try {

  // } catch (e) {
  //   console.log(e);
  //   response = e?.response as AxiosResponse;
  // }

  return response as AxiosResponse<T, AxiosRequestConfig>;
}
