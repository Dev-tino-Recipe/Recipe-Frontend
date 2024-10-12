import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

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
  config: AxiosRequestConfig<T>,
  isOwnServer: boolean
) {
  let response: AxiosResponse<T, typeof config>;
  try {
    response = await axiosInstance(isOwnServer).request(config);
  } catch (e) {
    if (e instanceof AxiosError) {
      response = (e as AxiosError<T, typeof config>).response!;
    } else {
      throw e;
    }
  }

  return response;
}
