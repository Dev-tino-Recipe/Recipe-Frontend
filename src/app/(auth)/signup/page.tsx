"use client";

import React from "react";
import useSignupForm from "@/app/(auth)/signup/useSignupForm";

const SignupPage = () => {
  const labelClassName = "text-2xl font-bold";
  const inputClassName = "text-xl outline-none border-b-2 border-black py-2";

  const {
    form,
    errorMessages,
    isIdCheck,
    checkIdDuplicate,
    handleOnChangeFormInput,
    handleOnSubmit,
  } = useSignupForm();

  const duplicateDisabled = isIdCheck || !!errorMessages.id;

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={"flex flex-col"}>
        <label className={labelClassName} htmlFor="id">
          아이디
        </label>
        <input
          required
          className={inputClassName}
          onChange={handleOnChangeFormInput}
          placeholder={"4~12자리의 영어 소문자 숫자를 적어주세요"}
          value={form.id}
          id={"id"}
          name={"id"}
          type="text"
        />
      </div>

      <div className={"flex justify-end my-4 gap-4"}>
        <p className={"flex justify-center items-center"}>
          {isIdCheck ? "사용 가능한 아이디 입니다." : errorMessages.id}
        </p>
        <button
          disabled={duplicateDisabled}
          type={"button"}
          onClick={checkIdDuplicate}
          className={`border-2 rounded-lg px-3 py-1 text-xl ${!duplicateDisabled ? "text-orange-400 border-orange-400" : "text-orange-200 border-orange-200"}`}
        >
          중복검사
        </button>
      </div>

      <div className={"flex flex-col mt-6"}>
        <label className={labelClassName} htmlFor="pw">
          비밀번호
        </label>
        <input
          required
          disabled={!isIdCheck}
          onChange={handleOnChangeFormInput}
          className={inputClassName}
          placeholder={"8~15자의 영어 대소문자 숫자 및 특수기호를 적어주세요"}
          value={form.pw}
          id={"pw"}
          name={"pw"}
          type="password"
        />
      </div>

      <div className={"flex flex-col mt-6"}>
        <label className={labelClassName} htmlFor="pwc">
          비밀번호 확인
        </label>
        <input
          required
          disabled={!isIdCheck}
          className={inputClassName}
          onChange={handleOnChangeFormInput}
          value={form.pwc}
          id={"pwc"}
          name={"pwc"}
          type="password"
        />
      </div>

      <div className={"flex justify-end my-4 gap-4"}>
        <p className={"flex justify-center items-center"}>
          {Object.entries(errorMessages).filter((e) => e[0] !== "id")[0]?.[1]}
        </p>
        <button
          type={"submit"}
          disabled={!isIdCheck}
          className={`border-2  rounded-lg px-3 py-1 text-xl ${isIdCheck ? "text-orange-400 border-orange-400" : "text-orange-200 border-orange-200"}`}
        >
          회원가입
        </button>
      </div>
    </form>
  );
};

export default SignupPage;
