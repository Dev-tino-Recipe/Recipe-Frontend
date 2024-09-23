import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      console.log('저장된 유저 정보:', storedUser); 
    }

    if (storedUser && storedUser.id === id && storedUser.password === password) {
      console.log('로그인 성공');
      localStorage.setItem('isLoggedIn', true); 
      navigate('/main'); 
    } else {
      console.log('로그인 실패');
      setError('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <button className="back-button">&lt;</button>
      <div className="login-header">
        <img src="/images/img-logo.png" alt="Daily Recipe Logo" className="login-logo" />
        <h2>로그인이 필요합니다.😊</h2>
      </div>

      <div className="login-form">
        <label htmlFor="id">아이디(ID)</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디를 입력하세요."
          className="login-input"
        />

        <label htmlFor="password">비밀번호(P/W)</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요."
          className="login-input"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="login-buttons">
        <button onClick={handleSignup} className="signup-button">회원가입</button>
        <button onClick={handleLogin} className="login-button">로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
