import React, {useState} from 'react';
import '../styles/SignupPage.css';
import AuthButton from "../components/auth/AuthButton";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: "",
    password: "",
    passwordCheck: ""
  })

  const [isValidId, setIsValidId] = useState({
    isValid: false,
    message1: "",
    message2: "",
  })


  const handleFormChangeInput = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }


  const handleDuplicateId = async (e) => {
    const {id} = form;
    let response;
    try {
      response = await axios.request({
        "method": "POST",
        url: "http://localhost:4000/api/auth/duplicate",
        data: {
          username: id
        },
      });
    } catch (e) {
      response = e.response
    }

    const {isSuccess} = response.data
    if (!response) return;

    setIsValidId({
      ...isValidId,
      isValid: isSuccess,
      message1: isSuccess ? "사용 가능한 아이디입니다." : "유효하지 않은 아이디입니다.",
    })
  }

  const handleOnSignup = async (event) => {
    event.preventDefault();
    if (!isValidId.isValid) {
      return setIsValidId({
        ...isValidId,
        message2: "아이디 중복검사를 해주세요",
      })
    }

    const {id, password, passwordCheck} = Object.fromEntries(new FormData(event.target).entries());
    if (password !== passwordCheck) {
      return setIsValidId({
        ...isValidId,
        message2: "비밀번호가 일치하지 않습니다.",
      })
    }

    let response;
    try {
      response = await axios.request({
        method: "POST",
        url: "http://localhost:4000/api/auth/signup",
        data: {
          username: id,
          password: password,
        }
      });
    } catch (e) {
      response = e.response;
    }
    const {isSuccess, message} = response.data;
    console.log(message);

    if(isSuccess){
      window.alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  }

  return (
      <form onSubmit={handleOnSignup} className={"flex flex-col w-full px-4 font-bold gap-8"}>
        <div className={"flex flex-col"}>
          <label className={"text-xl"} htmlFor="id">아이디</label>
          <input
              onChange={handleFormChangeInput}
              value={form.id}
              placeholder={"4~12자의 영어 소문자, 숫자를 적어주세요"} required
              className={"outline-none border-b-2 border-black py-2"} id={"id"} name={"id"} type="text"/>
        </div>
        {/* 중복검사 버튼 */}

        <div className={"flex justify-end gap-8"}>
          <p className={"flex items-center"}>{isValidId.message1}</p>
          <AuthButton
              onClick={handleDuplicateId}
              textColor={"text-orange-400"}
              borderColor={"border-orange-400"}>중복검사</AuthButton>
        </div>

        <div className={"flex flex-col"}>
          <label className={"text-xl"} htmlFor="password">비밀번호</label>
          <input
              minLength={8}
              maxLength={15}
              onChange={handleFormChangeInput}
              value={form.password}
              placeholder={"8-15자의 영어 대소문자 숫자 및 특수기호를 적어주세요."} required
              className={"outline-none border-b-2 border-black py-2"} id={"password"} name={"password"} type="password"/>
        </div>

        <div className={"flex flex-col"}>
          <label className={"text-xl"} htmlFor="passwordCheck">비밀번호 확인</label>
          <input
              minLength={8}
              maxLength={15}
              onChange={handleFormChangeInput}
              value={form.passwordCheck}
              required
              className={"outline-none border-b-2 border-black py-2"} id={"passwordCheck"} name={"passwordCheck"}
              type="password"/>
        </div>

        <div className={"flex justify-end gap-8"}>
          <p className={"flex items-center"}>{isValidId.message2}</p>
          <AuthButton
              type={"submit"}
              textColor={"text-orange-400"}
              borderColor={"border-orange-400"}>계정 생성</AuthButton>
        </div>


      </form>
  );
};

export default SignupPage;
