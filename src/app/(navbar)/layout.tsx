import React from "react";
import Navbar from "@/components/Navbar";
import WriteRecipeProvider from "@/components/provider/WriteRecipeProvider";
import { sessionCookie } from "@/util/sessionCookie";
import { redirect, RedirectType } from "next/navigation";

function Layout({ children }: { readonly children: React.ReactNode }) {
  if (!sessionCookie()?.value) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <div className={"pb-24 w-full flex flex-col"}>
      <WriteRecipeProvider>{children}</WriteRecipeProvider>
      <Navbar />
    </div>
  );
}

export default Layout;
