import React, { useState } from 'react';
import '../styles/ContentsPage.css';

const ContentsPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentSubmit = () => {
    if (rating > 0 && comment.trim()) {
      setComments([{ rating, comment }, ...comments]);
      setRating(0);
      setComment('');
    }
  };

  return (
    <div className="contents-container">
      <h2 className="recipe-title">레시피 타이틀</h2>
      <p className="author">작성자: 홍길동</p>

      <div className="recipe-content">
        <img src="/recipe-image.jpg" alt="Recipe" className="recipe-image" />
        <p>레시피 내용이 여기에 표시됩니다...</p>
      </div>

      <div className="rating-section">
        <h3>평점 남기기</h3>
        <div className="stars">
          ★★★★★
        </div>
        <textarea
          placeholder="댓글을 작성하세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="comment-input"
        />
        <button className="submit-button" onClick={handleCommentSubmit}>
          제출
        </button>
      </div>

      <div className="related-recipes">
        <h3>관련 레시피</h3>
        <div className="related-recipe-item">레시피 1</div>
        <div className="related-recipe-item">레시피 2</div>
        <div className="related-recipe-item">레시피 3</div>
      </div>
    </div>
  );
};

export default ContentsPage;
