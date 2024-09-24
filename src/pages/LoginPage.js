import React from "react";
import {useNavigate} from "react-router-dom";
import "../styles/LoginPage.css";
import AuthButton from "../components/auth/AuthButton";
import axios from "axios";
import {localLogin} from "../utils/localStorageManager";


const LoginPage = () => {
  const navigate = useNavigate();
  const handleFormLogin = async (event) => {
    event.preventDefault();
    const {id, password} = Object.fromEntries(new FormData(event.target))
    let response;
    try {
      response = await axios.request({
        method: "POST",
        url: "http://localhost:4000/api/auth/login",
        data: {
          username: id,
          password: password
        }
      })
    } catch (e) {
      response = e.response;
    }

    const {isSuccess, message, result} = response.data
    console.log(message);

    if (isSuccess) {
      window.alert("로그인 성공");
      localLogin(result.userId);
      return navigate("/main");
    }

    window.alert("아이디 비밀번호를 확인하세요");
  }

  return (
      <form onSubmit={handleFormLogin} className={"flex flex-col w-full px-4 font-bold gap-8"}>
        <div className={"flex flex-col"}>
          <label className={"text-xl"} htmlFor="id">아이디</label>
          <input required className={"outline-none border-b-2 border-black py-2"} id={"id"} name={"id"} type="text"/>
        </div>

        <div className={"flex flex-col"}>
          <label className={"text-xl"} htmlFor="password">비밀번호</label>
          <input required className={"outline-none border-b-2 border-black py-2"} id={"password"} name={"password"}
                 type="password"/>
        </div>

        <div className={"flex justify-end gap-4"}>
          <AuthButton onClick={() => {
            navigate("/signup")
          }}>회원가입</AuthButton>
          <AuthButton type={"submit"}>로그인</AuthButton>
        </div>
      </form>
  );
};

export default LoginPage;
