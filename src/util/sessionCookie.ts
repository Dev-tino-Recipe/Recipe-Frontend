import { cookies } from "next/headers";
import { parseSetCookie } from "@/util/cookieParser";

const SESSION_COOKIE_NAME = "session_cookie_name";

export function sessionCookie() {
  const sessionCookieName = cookies().get(SESSION_COOKIE_NAME);
  return { name: sessionCookieName?.name, value: sessionCookieName?.value };
}

export function setSessionCookie(setCookie: string) {
  const cookie = parseSetCookie(setCookie);
  cookies().set(SESSION_COOKIE_NAME, cookie.value, cookie);
}

export function clearSessionCookie(){
  cookies().delete(SESSION_COOKIE_NAME);
}
