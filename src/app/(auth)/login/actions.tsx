"use server";

import { axiosRequest } from "@/api/axios";
import { redirect, RedirectType } from "next/navigation";
import { setSessionCookie } from "@/util/sessionCookie";

export async function loginAction(formData: FormData) {
  const { id, pw } = Object.fromEntries(formData.entries()) as {
    id: string;
    pw: string;
  };

  const response = await axiosRequest<{ isSuccess: boolean; message: string }>(
    {
      url: "/auth/login",
      method: "POST",
      data: {
        username: id,
        password: pw,
      },
    },
    false
  );

  const { isSuccess } = response.data;

  const setCookies = response.headers["set-cookie"] ?? [];

  setCookies.forEach(setSessionCookie);

  redirect(isSuccess ? "/" : `/login?code=1`, RedirectType.replace);
}
