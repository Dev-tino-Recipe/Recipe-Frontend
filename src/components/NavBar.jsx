import EditIcon from "../assets/edit_icon.png";
import DailyIcon from "../assets/daily_icon.png";
import SearchIcon from "../assets/search_icon.png";
import Circle from "../assets/circle.png";
import {Link, useLocation} from "react-router-dom";

function NavBar() {
  let location = useLocation();
  const navbarMap = {
    0: "/edit",
    1: "/main",
    2: "/search",
  }
  const srcArray = [EditIcon, DailyIcon, SearchIcon];
  return (
      <div className={"fixed bottom-0 w-[390px] h-24 bg-white border-t-2 flex py-4 justify-evenly"}>
        {srcArray.map((src, index) => (
            <Link to={navbarMap[index]} className={"h-full aspect-square relative"}>
              {navbarMap[index] === location.pathname && <img className={"absolute"} src={Circle}></img>}
              <img className={"h-full w-full object-contain"} key={index} src={src} alt=""/>
            </Link>
        ))}
      </div>
  )
}

export default NavBar;