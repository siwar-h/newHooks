import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({ setKeyword, setRating }) => {
    const handleKeywordChange = (e) => {
      setKeyword(e.target.value);
    };
  
    const onStarClick = (nextValue) => {
      setRating(nextValue); 
    };
  
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Search by title"
          onChange={handleKeywordChange}
        />
        <StarRatingComponent 
          name="rating" 
          starCount={5} 
          onStarClick={onStarClick} 
        />
      </div>
    );
  };
  

export default Filter
