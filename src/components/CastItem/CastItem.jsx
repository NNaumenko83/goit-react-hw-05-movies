import React from 'react';

// import styles from './CastItem.module.css';

const CastItem = ({ profile_path, name, character }) => {
  return (
    <li>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${profile_path}`}
          alt={name}
        />
      )}
      <p> {name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;
