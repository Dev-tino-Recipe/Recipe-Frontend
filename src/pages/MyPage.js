import React, { useState } from 'react';
import '../styles/MyPage.css';
import AuthButton from "../components/auth/AuthButton";
import { Link } from 'react-router-dom';

const MyPage = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleProfileEdit = () => {
    setIsEditingProfile(true);
  };

  const handleCloseEdit = () => {
    setIsEditingProfile(false);
  };

  return (
    <div className="mypage-container">
      <header className="header">
        <div className="profile-info">
          <img src="/profile-pic.png" alt="Profile" className="profile-image" />
          <h2>zeew00</h2>
        </div>
        <button className="edit-profile-button" onClick={handleProfileEdit}>
          ✏️
        </button>
      </header>

      <section>
        <h3>최근 본 레시피</h3>
        <div className="recipe-list">
          <Link to="/more-recipes" className="more-link">더보기 ></Link>
          <div className="recipe-item">카카오 무쌉</div>
          <div className="recipe-item">소고기 감자 덮밥</div>
        </div>
      </section>

      <section>
        <h3>저장한 레시피</h3>
        <div className="recipe-list">
          <Link to="/saved-recipes" className="more-link">더보기 &gt;</Link>
          <div className="recipe-item">카카오 무쌉</div>
          <div className="recipe-item">소고기 고수 감자튀김 요리</div>
        </div>
      </section>

      <section>
        <h3>등록한 레시피</h3>
        <div className="recipe-list">
          <Link to="/registered-recipes" className="more-link">더보기 &gt;</Link>
          <div className="recipe-item">카카오 무쌉</div>
          <div className="recipe-item">폭찹 베이크</div>
        </div>
      </section>

      <footer className="bottom-nav">
        <Link to="/write" className="nav-item">Write</Link>
        <Link to="/daily" className="nav-item">Daily</Link>
        <Link to="/search" className="nav-item">Search</Link>
      </footer>

      {isEditingProfile && (
        <div className="edit-profile-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseEdit}>X</button>
            <div className="profile-edit-info">
              <img src="/chef-icon.png" alt="Profile" className="edit-profile-image" />
              <h2>zeew00</h2>
              <button className="save-profile-button">저장하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
