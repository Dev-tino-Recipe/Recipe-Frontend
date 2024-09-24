import {Navigate, Outlet} from "react-router-dom";
import Header from "../components/Header";
import ChefIcon from "../assets/chef_icon.png";
import React from "react";
import {isLocalLogin} from "../utils/localStorageManager";

function AuthLayout() {
  if (isLocalLogin()) {
    // 로그인 상태라면 "/main"으로 리다이렉트
    return <Navigate to="/main" replace/>;
  }

  return (
      <div className={"flex flex-col h-full w-full"}>
        <Header/>
        <div className="flex flex-col items-center">
          <img src={ChefIcon}/>
        </div>
        <Outlet/>
      </div>
  )
}

export default AuthLayout;