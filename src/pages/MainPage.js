import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <Link to="/search" className="search-button">검색</Link>

      <section className="section">
        <h2>Today's</h2>
        <div className="content-grid">
          <div className="content-item">Content 1</div>
          <div className="content-item">Content 2</div>
          <div className="content-item">Content 3</div>
        </div>
      </section>

      <section className="section">
        <h2>HOT</h2>
        <div className="content-grid">
          <div className="content-item">Content 1</div>
          <div className="content-item">Content 2</div>
          <div className="content-item">Content 3</div>
        </div>
      </section>

      <section className="section">
        <h2>최근 내가 본 게시물</h2>
        <div className="content-grid">
          <div className="content-item">Recent Content 1</div>
        </div>
      </section>

      <section className="section">
        <h2>Topic</h2>
        <div className="content-grid">
          <div className="content-item">Topic 1</div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
