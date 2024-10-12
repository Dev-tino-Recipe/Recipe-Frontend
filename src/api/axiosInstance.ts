import axios from "axios";

export default function axiosInstance(isOwnServer: boolean) {
  return axios.create({
    baseURL: `http://${isOwnServer ? "localhost" : "twoone14.shop"}:${isOwnServer ? "3000" : "4001"}/api`,
    // baseURL: "http://localhost:4000/api",
    timeout: 1000,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
}
