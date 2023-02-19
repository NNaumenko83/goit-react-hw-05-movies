import PropTypes from 'prop-types';
import React from 'react';

import MovieItem from 'components/MovieItem';

const MovieList = ({ movies, state }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <MovieItem key={id} id={id} title={title} state={state} />
      ))}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
  state: PropTypes.any,
};
