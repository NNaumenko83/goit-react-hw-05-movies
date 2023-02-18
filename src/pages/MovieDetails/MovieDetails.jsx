import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieById } from 'services';
import { Bars } from 'react-loader-spinner';
import Error from 'components/Error';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const backLinkHref = location.state?.from ?? '/goit-react-hw-05-movies';

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
          <Link to={backLinkHref}>Go back</Link>
          <div>
            <h2>{original_title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={original_title}
            />
            <p>Overview</p>
            <p>{overview}</p>
            <p>Genres</p>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </div>
          <div>
            <p>Additional information</p>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          {errorMessage && <Error errorMessage={errorMessage} />}

          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
