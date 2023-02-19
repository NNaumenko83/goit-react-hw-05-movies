import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services';
import { Bars } from 'react-loader-spinner';
import Error from 'components/Error';
import { CastList } from './Cast.styled';

import CastItem from '../CastItem';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      try {
        const response = await getMovieCast(movieId);

        setCast(
          response.cast.map(({ profile_path, name, character, id }) => ({
            profile_path,
            name,
            character,
            id,
          }))
        );
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <Bars
          height="40"
          width="40"
          color="#280232"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ profile_path, name, character, id }) => (
            <CastItem
              key={id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))}
        </CastList>
      )}
      {errorMessage && <Error />}
    </>
  );
};

export default Cast;
