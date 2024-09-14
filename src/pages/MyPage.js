import React from 'react';
import '../styles/MyPage.css';

const MyPage = () => {
  return (
    <div className="mypage-container">
      <div className="profile-section">
        <img src="/profile-pic.png" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>사용자 닉네임</h2>
          <button className="edit-profile-button">프로필 편집</button>
        </div>
      </div>

      <div className="saved-recipes">
        <h3>저장된 레시피</h3>
        <div className="recipe-item">레시피 1</div>
        <div className="recipe-item">레시피 2</div>
      </div>
    </div>
  );
};

export default MyPage;
