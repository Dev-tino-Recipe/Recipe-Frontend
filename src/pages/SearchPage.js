import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = () => {
    if (searchText.trim() === '') return;

    const updatedSearches = [searchText, ...recentSearches.slice(0, 5)];
    setRecentSearches(updatedSearches);
    setSearchText(''); 
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
          {recentSearches.map((search, index) => (
            <div key={index} className="category-item">
              {search}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
