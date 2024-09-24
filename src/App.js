import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import ContentsPage from "./pages/ContentsPage";
import MyPage from "./pages/MyPage";
import WritingRecipePage from "./pages/WritingRecipePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import NavBarLayout from "./layouts/NavBarLayout";

function App() {
  return (
      <div className={"min-h-screen w-[390px] mx-auto pb-24 relative shadow"}>
        <Router>
          <Routes>
            <Route path="/" element={<SplashPage/>}/>

            <Route element={<AuthLayout/>}>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/signup" element={<SignupPage/>}/>
            </Route>

            <Route element={<NavBarLayout/>}>
              <Route path="/main" element={<MainPage/>}/>
              <Route path="/search" element={<SearchPage/>}/>
              <Route path="/contents" element={<ContentsPage/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
              <Route path="/write-recipe" element={<WritingRecipePage/>}/>
              <Route path="*" element={<MainPage/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
