import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isIdAvailable, setIsIdAvailable] = useState(null);
  const navigate = useNavigate();

  const checkIdAvailability = () => {
    const existingUser = JSON.parse(localStorage.getItem('user'));
    if (existingUser && existingUser.id === id) {
      setIsIdAvailable(false); 
      setError('이미 존재하는 아이디입니다.');
    } else {
      setIsIdAvailable(true); 
      setError('');
    }
  };

  const handleSignup = () => {

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (isIdAvailable === null) {
      setError('아이디 중복검사를 해주세요.');
      return;
    }

    if (isIdAvailable === false) {
      setError('이미 가입된 아이디가 있습니다.');
    } else {
      localStorage.setItem('user', JSON.stringify({ id, password }));
      console.log('회원가입 성공');
      setError('');
      navigate('/login'); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
      <div className="signup-header">
        <img src="/images/img-logo.png" alt="Daily Recipe Logo" className="login-logo" />
        <h4>회원가입</h4>
      </div>

        <label htmlFor="id">아이디(ID)</label>
        <div className="id-check-container">
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="사용하실 아이디를 입력하세요."
            className="signup-input"
          />
          <button onClick={checkIdAvailability} className="check-id-button">중복검사</button>
        </div>

        {isIdAvailable === true && <div className="id-available">사용 가능한 아이디입니다.</div>}
        {isIdAvailable === false && <div className="id-unavailable">이미 존재하는 아이디입니다.</div>}

        <label htmlFor="password">비밀번호(P/W)</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="사용하실 비밀번호를 입력하세요."
          className="signup-input"
        />

        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="위와 동일한 P/W를 입력해주세요."
          className="signup-input"
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button onClick={handleSignup} className="signup-button">회원가입</button>
    </div>
  );
};

export default SignupPage;
