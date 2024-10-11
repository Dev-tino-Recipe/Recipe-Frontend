import { isDuplicateIdAction, signupAction } from "@/app/(auth)/signup/actions";
import { SignupFormType } from "@/types";
import { validateId, validatePw, validatePwc } from "@/util/validator";
import { useRouter } from "next/navigation";
import React, { FormEvent, useCallback, useState } from "react";

function useSignupForm() {
  const [form, setForm] = useState<SignupFormType>({
    id: "",
    pw: "",
    pwc: "",
  });

  const router = useRouter();

  const [isIdCheck, setIsIdCheck] = useState(false);

  const [errorMessages, setErrorMessages] = useState<{ [key: string]: string }>(
    {}
  );

  const validateField = useCallback(
    (name: string, value: string): string | undefined => {
      switch (name) {
        case "id":
          return validateId(value);
        case "pw":
          return validatePw(value);
        case "pwc":
          return validatePwc(form.pw, value);
        default:
          return undefined;
      }
    },
    [form.pw]
  );

  // 필드별 유효성 검사 함수
  const handleOnChangeFormInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (name === "id") setIsIdCheck(false);

      const error = validateField(name, value);

      setErrorMessages((prev) => {
        if (error) return { ...prev, [name]: error };
        delete prev[name];
        return prev;
      });
    },
    [validateField]
  );

  const validateSignupForm = useCallback(() => {
    const errors: { [key: string]: string } = {};

    Object.entries(form).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        errors[name] = error;
      }
    });

    setErrorMessages(errors);

    return Object.keys(errors).length === 0;
  }, [form, validateField]);

  const checkIdDuplicate = useCallback(async () => {
    const isSuccess = await isDuplicateIdAction(form.id);
    setIsIdCheck(isSuccess);
    if (!isSuccess) {
      setErrorMessages((prev) => ({
        ...prev,
        id: "이미 사용중인 아이디입니다.",
      }));
    }
  }, [form.id]);

  const handleOnSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!validateSignupForm()) return;

      const { id, pw } = form;

      const isSuccess = await signupAction(id, pw);

      if (isSuccess) {
        alert("회원가입에 성공했습니다.");
        router.push("/login");
      } else {
        alert("오류입니다. 잠시후 다시 시도해주세요.");
      }
    },
    [form, router, validateSignupForm]
  );

  return {
    form,
    errorMessages,
    isIdCheck,
    checkIdDuplicate,
    handleOnChangeFormInput,
    handleOnSubmit,
  };
}

export default useSignupForm;
