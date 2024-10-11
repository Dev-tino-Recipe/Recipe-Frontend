import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { axiosRequest } from "@/api/axios";
import * as localManager from "@/util/localManager";

export default function useLogin() {
  const router = useRouter();
  const handleFormLogin = async (form: FormEvent<HTMLFormElement>) => {
    form.preventDefault();
    const { id, pw } = Object.fromEntries(
      new FormData(form.currentTarget).entries()
    ) as { id: string; pw: string };

    const response = await axiosRequest<{
      isSuccess: boolean;
      result: { userId: string };
    }>(
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

    const { isSuccess, result } = response.data;

    if (isSuccess) {
      localManager.userLogin(result.userId);
    }
    router.replace(isSuccess ? "/" : `/login?code=1`);
  };

  return { handleFormLogin };
}
