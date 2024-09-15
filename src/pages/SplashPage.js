import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashPage.css";
import SplashImage from "../assets/mdi_cook.png";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src={SplashImage} alt="Splash" className="splash-image" />
    </div>
  );
};

export default SplashPage;
