import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/MainPage.css';
import axios from "axios";
import {localLogout} from "../utils/localStorageManager";
import LogoIcon from "../assets/img-logo.png";
import AuthButton from "../components/auth/AuthButton";
import RecentRecipe from "../components/recipe/RecentRecipe";
import PreviewRecipe from "../components/recipe/PreviewRecipe";

const MainPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.request({
      url: "http://localhost:4000/api/auth/user",
    }).then((response) => {
      setUser(response.data.result?.user);
    })
  }, []);


  const handleLogout = () => {
    localLogout();
    navigate('/login');
  };

  return (
      <div className={"h-full w-full p-4 flex flex-col gap-8"}>
        <header className="w-full flex justify-between items-center h-32 py-4">
          <img className="object-cover h-full" src={LogoIcon} alt="Logo"/>
          <div className={"flex justify-center items-center gap-1"}>
            <p>{user?.username}</p>
            <AuthButton onClick={handleLogout}>로그아웃</AuthButton>
          </div>
        </header>
        <section>
          <h1 className={"text-3xl font-bold mb-4"}>최근 본 레시피</h1>
          <RecentRecipe/>
        </section>

        <section>
          <div className={"flex justify-between mb-4"}>
            <h1 className={"text-3xl font-bold"}>저장한 레시피</h1>
            <p className={"flex justify-center items-center"}>더보기 ></p>
          </div>

          <div className={"flex justify-between gap-6"}>
            {[1, 2, 3].map(() => {
              return <PreviewRecipe/>
            })}
          </div>
        </section>

        <section>
          <div className={"flex justify-between mb-4"}>
            <h1 className={"text-3xl font-bold"}>등록한 레시피</h1>
            <p className={"flex justify-center items-center"}>더보기 ></p>
          </div>

          <div className={"flex justify-between gap-6"}>
            {[1, 2, 3].map(() => {
              return <PreviewRecipe/>
            })}
          </div>
        </section>
      </div>
  );
};

export default MainPage;
