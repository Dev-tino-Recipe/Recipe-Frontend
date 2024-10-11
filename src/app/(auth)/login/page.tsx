"use client";
import useLogin from "@/hooks/user/useLogin";
import Link from "next/link";

const LoginPage = ({ searchParams }: { searchParams: { code?: string } }) => {
  const { code } = searchParams;

  const { handleFormLogin } = useLogin();

  const buttonClassName =
    "border-2 border-gray-200 rounded-lg px-3 py-1 text-xl";

  return (
    <form className={"flex flex-col mx-8 mt-8"} onSubmit={handleFormLogin}>
      <div className={"flex flex-col"}>
        <label className={"text-2xl font-bold"} htmlFor="id">
          아이디
        </label>
        <input
          required
          className={"text-xl outline-none border-b-2 border-black"}
          id={"id"}
          name={"id"}
          type="text"
        />
      </div>

      <div className={"flex flex-col mt-6"}>
        <label className={"text-2xl font-bold"} htmlFor="pw">
          비밀번호
        </label>
        <input
          required
          className={"text-xl outline-none border-b-2 border-black"}
          id={"pw"}
          name={"pw"}
          type="password"
        />
      </div>

      <div className={"flex justify-end gap-4 mt-8"}>
        <Link className={buttonClassName} href={"signup"}>
          회원가입
        </Link>
        <button className={buttonClassName} type={"submit"}>
          로그인
        </button>
      </div>
      <p className={"flex justify-center items-center mt-8 text-red-500"}>
        {code === "1" && "아이디 및 비밀번호가 유효하지 않습니다."}
      </p>
    </form>
  );
};

export default LoginPage;
