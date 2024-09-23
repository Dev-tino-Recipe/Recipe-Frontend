import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashPage.css'; // SplashPage의 CSS

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <h1 className="app-title">Daily Recipe</h1>
      <img src="/images/splash.png" alt="Splash" className="splash-image" />
    </div>
  );
};

export default SplashPage;
