import React, { useState } from 'react';
import '../styles/SignupPage.css';
import AuthButton from '../components/auth/AuthButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    id: '',
    password: '',
    passwordCheck: '',
  });

  const [isValidId, setIsValidId] = useState({
    isValid: false,
    message1: '',
    message2: '',
  });

  // 입력값을 실시간으로 업데이트하는 함수
  const handleFormChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 아이디 중복 체크 함수
  const handleDuplicateId = async () => {
    const { id } = form;
    let response;
    try {
      response = await axios.post('http://localhost:4000/api/auth/duplicate', {
        username: id,
      });

      if (response && response.data) {
        const { isSuccess } = response.data;
        setIsValidId({
          ...isValidId,
          isValid: isSuccess,
          message1: isSuccess ? '사용 가능한 아이디입니다.' : '유효하지 않은 아이디입니다.',
        });
      }
    } catch (e) {
      setIsValidId({
        ...isValidId,
        isValid: false,
        message1: '서버와의 통신에 문제가 발생했습니다.',
      });
    }
  };

  // 회원가입 처리 함수
  const handleOnSignup = async (event) => {
    event.preventDefault();

    // 아이디 중복검사 통과 여부 확인
    if (!isValidId.isValid) {
      return setIsValidId({
        ...isValidId,
        message2: '아이디 중복검사를 해주세요.',
      });
    }

    const { id, password, passwordCheck } = form;

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== passwordCheck) {
      return setIsValidId({
        ...isValidId,
        message2: '비밀번호가 일치하지 않습니다.',
      });
    }

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        username: id,
        password: password,
      });

      if (response && response.data) {
        const { isSuccess, message } = response.data;
        console.log(message);

        if (isSuccess) {
          window.alert('회원가입이 완료되었습니다.');
          navigate('/login');
        } else {
          setIsValidId({
            ...isValidId,
            message2: '회원가입에 실패했습니다. 다시 시도해주세요.',
          });
        }
      }
    } catch (e) {
      setIsValidId({
        ...isValidId,
        message2: '서버와의 통신에 문제가 발생했습니다.',
      });
    }
  };

  return (
    <form onSubmit={handleOnSignup} className="flex flex-col w-full px-4 font-bold gap-8">
      <div className="flex flex-col">
        <label className="text-xl" htmlFor="id">
          아이디
        </label>
        <input
          onChange={handleFormChangeInput}
          value={form.id}
          placeholder="4~12자의 영어 소문자, 숫자를 적어주세요"
          required
          className="outline-none border-b-2 border-black py-2"
          id="id"
          name="id"
          type="text"
        />
      </div>

      {/* 중복검사 버튼 */}
      <div className="flex justify-end gap-8">
        <p className="flex items-center">{isValidId.message1}</p>
        <AuthButton onClick={handleDuplicateId} textColor="text-orange-400" borderColor="border-orange-400">
          중복검사
        </AuthButton>
      </div>

      <div className="flex flex-col">
        <label className="text-xl" htmlFor="password">
          비밀번호
        </label>
        <input
          minLength={8}
          maxLength={15}
          onChange={handleFormChangeInput}
          value={form.password}
          placeholder="8-15자의 영어 대소문자 숫자 및 특수기호를 적어주세요."
          required
          className="outline-none border-b-2 border-black py-2"
          id="password"
          name="password"
          type="password"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xl" htmlFor="passwordCheck">
          비밀번호 확인
        </label>
        <input
          minLength={8}
          maxLength={15}
          onChange={handleFormChangeInput}
          value={form.passwordCheck}
          required
          className="outline-none border-b-2 border-black py-2"
          id="passwordCheck"
          name="passwordCheck"
          type="password"
        />
      </div>

      {/* 회원가입 버튼 */}
      <div className="flex justify-end gap-8">
        <p className="flex items-center">{isValidId.message2}</p>
        <AuthButton type="submit" textColor="text-orange-400" borderColor="border-orange-400">
          계정 생성
        </AuthButton>
      </div>
    </form>
  );
};

export default SignupPage;
