import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from 'services';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
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
        console.log(error.message);
      }
    };

    fetchMovieById();
  }, [movieId]);

  const { genres, vote_average, overview, original_title, poster_path } =
    movieInfo;

  console.log(genres, vote_average, overview, original_title, poster_path);

  console.log(!!movieInfo.original_title);

  return (
    <>
      {Object.keys(movieInfo).length > 0 && (
        <>
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
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
