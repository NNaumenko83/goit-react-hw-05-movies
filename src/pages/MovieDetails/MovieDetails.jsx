import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services';
import { Bars } from 'react-loader-spinner';
import { MovieCard, MovieInfo } from './MovieDetails.styled';
import styled from '@emotion/styled';
import { HiArrowSmLeft } from 'react-icons/hi';
import { Suspense } from 'react';

import Error from 'components/Error';

const GoBackLink = styled(Link)`
  display: block;
  width: 100px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;

  text-decoration: none;
  color: currentColor;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  :hover,
  :focus {
    background-color: #f7eded;
    border-color: #0f86c8;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`;

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [backLinkHref, setBackLinkHref] = useState(null);

  useEffect(() => {
    if (backLinkHref) {
      return;
    }
    const state = location.state?.from ?? '/goit-react-hw-05-movies';
    setBackLinkHref(state);
  }, [backLinkHref, location.state]);

  useEffect(() => {
    const fetchMovieById = async () => {
      setIsLoading(true);
      try {
        const movieData = await getMovieById(movieId);
        const { genres, vote_average, overview, original_title, poster_path } =
          movieData;
        setMovieInfo({
          genres,
          vote_average,
          overview,
          original_title,
          poster_path,
        });
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieById();
  }, [movieId]);

  const { genres, vote_average, overview, original_title, poster_path } =
    movieInfo;

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
      {Object.keys(movieInfo).length > 0 && (
        <>
          <GoBackLink to={backLinkHref}>
            <HiArrowSmLeft /> Go back
          </GoBackLink>
          <MovieCard>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={original_title}
                width="200"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                width="200"
                alt={original_title}
              ></img>
            )}
            <MovieInfo>
              <h2>{original_title}</h2>
              <p>User score: {vote_average}</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieCard>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          {errorMessage && <Error errorMessage={errorMessage} />}
          <Suspense
            fallback={
              <Bars
                height="40"
                width="40"
                color="#280232"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
