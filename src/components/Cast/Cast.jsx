import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services';

import CastItem from '../CastItem';

import styles from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await getMovieCast(movieId);
        console.log(response.cast);
        setCast(
          response.cast.map(({ profile_path, name, character, id }) => ({
            profile_path,
            name,
            character,
            id,
          }))
        );
      } catch (error) {}
    };

    fetchCast();
  }, []);
  return (
    cast.length > 0 && (
      <ul>
        {cast.map(({ profile_path, name, character, id }) => (
          <CastItem
            key={id}
            profile_path={profile_path}
            name={name}
            character={character}
          />
        ))}
      </ul>
    )
  );
};

export default Cast;

// profile_path;
// character;
// name;
// id
