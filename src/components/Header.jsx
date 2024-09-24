import {IoIosArrowBack} from "react-icons/io";
import {useLocation, useNavigate} from "react-router-dom";

function Header() {
  const location = useLocation();
  let navigate = useNavigate();
  const titleMap = {
    '/login': '로그인',
    '/signup': '회원가입',
  };
  const title = titleMap[location.pathname] || '홈';
  return (
      <div className={"h-24 flex items-center relative z-10"}>
        <IoIosArrowBack
            size={40}
            color="black"
            onClick={() => {
              navigate(-1);
            }}
        />
        <div className={"absolute w-full h-full text-3xl flex justify-center items-center font-bold -z-10"}>{title}</div>
      </div>
  )
}

export default Header;