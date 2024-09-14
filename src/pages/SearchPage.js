import React, { useState } from 'react';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search-container">
      <h2>레시피 검색</h2>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="레시피를 입력하세요"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">검색</button>

      <div className="category-section">
        <h3>카테고리로 검색</h3>
        <div className="category-grid">
          <div className="category-item">한식</div>
          <div className="category-item">양식</div>
          <div className="category-item">중식</div>
          <div className="category-item">일식</div>
          <div className="category-item">퓨전</div>
          <div className="category-item">디저트</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
