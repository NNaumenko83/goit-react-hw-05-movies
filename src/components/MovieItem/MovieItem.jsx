import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

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

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  state: PropTypes.object,
};
