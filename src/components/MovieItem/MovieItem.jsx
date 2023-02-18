import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './TrendingItem.module.css';

const MovieItem = ({ id, title, state }) => {
  return (
    <li>
      <Link to={`/goit-react-hw-05-movies/movies/${id}`} state={state}>
        {title}
      </Link>
    </li>
  );
};

export default MovieItem;
