import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchResultsPage.css';
import NavBar from '../components/NavBar';

const SearchResultsPage = () => {
  const navigate = useNavigate();
  
  const results = [
    {
      id: 1,
      image: 'https://example.com/recipe1.jpg',
      title: '간장계란밥',
      user: 'goodgoodman',
      date: '2024-07-30',
      description: '간단한 재료로 뚝딱뚝딱 간편 레시피로 만드는 초간단 맛있는 간장계란밥 비법공개',
    },
    {
      id: 2,
      image: 'https://example.com/recipe2.jpg',
      title: '간장계란밥',
      user: 'hihiman',
      date: '2024-07-30',
      description: '간단한 재료로 뚝딱뚝딱 간편 레시피로 만드는 초간단 맛있는 간장계란밥 비법공개',
    },
    {
      id: 3,
      image: 'https://example.com/recipe3.jpg',
      title: '간장계란밥',
      user: 'heauchi',
      date: '2024-07-30',
      description: '간단한 재료로 뚝딱뚝딱 간편 레시피로 만드는 초간단 맛있는 간장계란밥 비법공개',
    },
  ];

  return (
    <div className="search-results-page">
      <header className="search-header">
        <button onClick={() => navigate(-1)} className="back-button">{'<'} </button>
        <h1>간장계란밥(6)</h1>
      </header>
      <div className="results-container">
        {results.map(result => (
          <div key={result.id} className="result-item">
            <img src={result.image} alt={result.title} className="result-image" />
            <div className="result-details">
              <span className="result-date">{result.date}</span>
              <h2 className="result-title">{result.title}</h2>
              <span className="result-user">{result.user}</span>
              <p className="result-description">{result.description}</p>
            </div>
          </div>
        ))}
      </div>

      <NavBar />
    </div>
  );
};

export default SearchResultsPage;
