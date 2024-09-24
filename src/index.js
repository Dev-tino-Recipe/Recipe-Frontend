import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import axios from "axios";

// 인증요청시 쿠키를 전송하기 위해 설정
axios.defaults.withCredentials = true;
axios.defaults.headers.options = {
  'Content-Type': 'application/json',
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
);
