"use server";

import { redirect, RedirectType } from "next/navigation";
import { axiosRequest } from "@/api/axios";
import { clearSessionCookie } from "@/util/sessionCookie";

export async function logoutAction() {
  await axiosRequest(
    {
      method: "POST",
      url: "/auth/logout",
    },
    false
  );

  clearSessionCookie();

  redirect("/login", RedirectType.replace);
}
