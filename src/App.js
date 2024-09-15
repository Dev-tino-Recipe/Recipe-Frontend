import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import ContentsPage from "./pages/ContentsPage";
import MyPage from "./pages/MyPage";
import WritingRecipePage from "./pages/WritingRecipePage";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />

        <Route element={<MainLayout />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contents" element={<ContentsPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/write-recipe" element={<WritingRecipePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
