// import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import '../styles/SplashPage.css';
// import ChefIcon from "../assets/chef_icon.png"

// const SplashPage = () => {
//   const navigate = useNavigate();

//   return (
//       <div onClick={() => {
//         navigate('/login');
//       }} className="splash-container my-0 h-full flex flex-col justify-center items-center bg-[#FEF5ED]">
//         <img src={ChefIcon} alt="Splash"/>
//         <p className={"font-bold mt-10"}>터치 하여 시작!</p>
//       </div>
//   );
// };

// export default SplashPage;

// 메인페이지로 넘어가도록 만든 임시 코드입니다.
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashPage.css';
import ChefIcon from '../assets/chef_icon.png';

const SplashPage = () => {
  const navigate = useNavigate();

  const handleSplashClick = () => {
    navigate('/main');
  };

  return (
    <div 
      onClick={handleSplashClick} 
      className="splash-container my-0 h-full flex flex-col justify-center items-center bg-[#FEF5ED]"
    >
      <img src={ChefIcon} alt="Splash" />
      <p className="font-bold mt-10 cursor-pointer">터치 하여 시작!</p>
    </div>
  );
};

export default SplashPage;
