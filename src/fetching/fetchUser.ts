import { sessionCookie } from "@/util/sessionCookie";
import { axiosRequest } from "@/api/axios";
import { redirect, RedirectType } from "next/navigation";
import { User } from "@/types";

export async function fetchUser() {
  const { value } = sessionCookie();

  const response = await fetch("http://localhost:4000/api/auth/user", {
    headers: {
      Cookie: `session_cookie_name=${value}`,
    },
  });

  if (!response.ok) {
    await axiosRequest(
      {
        url: "/auth/logout",
        method: "POST",
      },
      false
    );

    return redirect("/login", RedirectType.replace);
  }

  const { result } = await response.json();
  return result.user as User;
}
