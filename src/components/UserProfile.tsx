"use client";

import { logoutAction } from "@/app/(navbar)/actions";
import LogoIcon from "@/assets/img-logo.png";
import useFetchUser from "@/hooks/user/useFetchUser";
import Image from "next/image";

function UserProfile() {
  const { user } = useFetchUser();

  return (
    <div className={"flex justify-between mb-4"}>
      <Image className={"object-cover w-32"} src={LogoIcon} alt={""} />
      <form action={logoutAction} className={"flex items-center gap-2"}>
        <p className={""}>{user?.username}</p>
        <button
          type={"submit"}
          className={"py-1 px-2 border-2 border-gray-200 rounded-lg"}
        >
          로그아웃
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
