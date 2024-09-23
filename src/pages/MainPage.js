import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  const [recentRecipes, setRecentRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [registeredRecipes, setRegisteredRecipes] = useState([]);
  const navigate = useNavigate();

 
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    navigate('/login'); 
  };

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <img src="/images/img-logo.png" className="img-logo" alt="Logo" />
        </div>
        <button className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      </header>

      <section className="section">
        <h2>최근 본 레시피</h2>
        <div className="content-grid">
          {recentRecipes.length > 0 ? (
            recentRecipes.map((recipe, index) => (
              <div className="content-item" key={index}>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-image" />
              </div>
            ))
          ) : (
            <div className="content-item">아직 본 레시피가 없습니다.</div>
          )}
        </div>
      </section>

      <section className="section">
        <h2>저장한 레시피</h2>
        <div className="content-grid">
          {savedRecipes.length > 0 ? (
            savedRecipes.map((recipe, index) => (
              <div className="content-item" key={index}>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-image" />
              </div>
            ))
          ) : (
            <div className="content-item">아직 저장한 레시피가 없습니다.</div>
          )}
        </div>
      </section>
      
      <section className="section">
        <h2>등록한 레시피</h2>
        <div className="content-grid">
          {registeredRecipes.length > 0 ? (
            registeredRecipes.map((recipe, index) => (
              <div className="content-item" key={index}>
                <img src={recipe.thumbnail} alt={recipe.title} className="recipe-image" />
              </div>
            ))
          ) : (
            <div className="content-item">아직 등록된 레시피가 없습니다.</div>
          )}
        </div>
      </section>

      <nav className="bottom-nav">
        <Link to="/write" className="nav-item">
          <img src="/images/write-logo.png" alt="Write" className="nav-icon" />
        </Link>
        <Link to="/daily" className="nav-item">Daily</Link>
        <Link to="/search" className="nav-item">Search</Link>
      </nav>
    </div>
  );
};

export default MainPage;
