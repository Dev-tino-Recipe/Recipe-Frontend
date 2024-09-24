import {Outlet, useLocation} from "react-router-dom";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const NavBarLayout = () => {
  const location = useLocation();
  return (
      <>
        {location.pathname !== "/main" && <Header/>}
        <Outlet />
        <NavBar />
      </>
  )
}

export default NavBarLayout;