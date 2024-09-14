import React, { useState } from 'react';
import '../styles/WritingRecipePage.css';

const WritingRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = () => {
    console.log('레시피 등록:', { title, description, category, ingredients, steps });
  };

  return (
    <div className="writing-recipe-container">
      <h2>레시피 작성</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="레시피 제목"
        className="input"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="요리 소개"
        className="input"
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
        <option value="">카테고리 선택</option>
        <option value="한식">한식</option>
        <option value="양식">양식</option>
      </select>
      <textarea
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="재료 입력"
        className="input"
      ></textarea>
      <textarea
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        placeholder="요리 순서 입력"
        className="input"
      ></textarea>
      <button onClick={handleSubmit} className="submit-button">등록</button>
    </div>
  );
};

export default WritingRecipePage;
