import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TrendingItem.module.css';

const TrendingItem = ({ id, title }) => {
  return (
    <li>
      <Link to={`/goit-react-hw-05-movies/movies/${id}`}> {title}</Link>
    </li>
  );
};

export default TrendingItem;
