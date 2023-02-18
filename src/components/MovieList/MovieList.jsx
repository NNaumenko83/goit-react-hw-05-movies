import React from 'react';

// import styles from './TrendingList.module.css';
import MovieItem from 'components/MovieItem';

const MovieList = ({ movies, state }) => {
  return movies.map(({ id, title }) => (
    <MovieItem key={id} id={id} title={title} state={state} />
  ));
};

export default MovieList;
