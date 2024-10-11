"use server";

import { axiosRequest } from "@/api/axios";

export async function isDuplicateIdAction(id: string) {
  const response = await axiosRequest<{
    isSuccess: boolean;
    message: string;
  }>(
    {
      method: "POST",
      url: "/auth/duplicate",
      data: { username: id },
    },
    false
  );

  return response.data?.isSuccess ?? false;
}

export async function signupAction(id: string, pw: string) {
  const response = await axiosRequest<{
    isSuccess: boolean;
    message: string;
  }>(
    {
      method: "POST",
      url: "/auth/signup",
      data: { username: id, password: pw },
    },
    false
  );

  return response.data?.isSuccess ?? false;
}
