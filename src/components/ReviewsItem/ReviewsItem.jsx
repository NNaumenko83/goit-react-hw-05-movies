import PropTypes from 'prop-types';
import React from 'react';

const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default ReviewsItem;

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
