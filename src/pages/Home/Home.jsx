import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'services';
import { useLocation } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

import MovieList from 'components/MovieList';
import Error from 'components/Error';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchTrendingMovie();

        const movieArray = data.results.map(({ id, title }) => ({ id, title }));
        setTrendingMovies(movieArray);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      {isLoading ? (
        <Bars
          height="40"
          width="40"
          color="#280232"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <MovieList movies={trendingMovies} state={{ from: location }} />
      )}
      {errorMessage && <Error errorMessage={errorMessage} />}
    </main>
  );
};

export default Home;
