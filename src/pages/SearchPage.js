import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search-results');
  };

  return (
    <div className="search-container">
      <p className="recipe-title">검색</p>
      <div className="search-input-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="요리명을 입력하세요"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">🔍︎</button>
      </div>

      <div className="category-section">
        <h3 className="category-title">최근 검색어</h3> 
        <div className="category-grid">
          <div className="category-item">-</div>
          <div className="category-item">-</div>
          <div className="category-item">-</div>
          <div className="category-item">-</div>
          <div className="category-item">-</div>
          <div className="category-item">-</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
