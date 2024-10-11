import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import ChefIcon from "@/assets/chef_icon.png";

function AuthLayout({ children }: Readonly<React.PropsWithChildren>) {
  return (
    <>
      <Header />
      <div className={"flex flex-col h-full"}>
        <Image className={"object-cover mx-auto"} src={ChefIcon} alt="설명" />
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
