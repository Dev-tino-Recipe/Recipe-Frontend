import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashPage.css';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <h1 className="app-title">My Recipe App</h1>
      <img src="/splash-image.png" alt="Splash" className="splash-image" />
    </div>
  );
};

export default SplashPage;
