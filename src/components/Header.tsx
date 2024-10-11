"use client";

import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const titleMap: Record<string, string> = {
    "/login": "로그인",
    "/signup": "회원가입",
  };

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={
        "relative flex justify-center items-center h-20 font-bold text-3xl"
      }
    >
      <button
        onClick={() => router.back()}
        className={"absolute left-0 text-5xl flex justify-center items-center"}
      >
        {"<"}
      </button>
      <h1>{titleMap[pathname]}</h1>
    </div>
  );
};

export default Header;
