import React from 'react';

// import styles from './ReviewsItem.module.css';

const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h1>Author: {author}</h1>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;
