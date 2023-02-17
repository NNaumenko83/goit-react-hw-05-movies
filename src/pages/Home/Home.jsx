import TrendingList from 'components/TrendingList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovie } from 'services';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await fetchTrendingMovie();
        console.log(data.results);
        const movieArray = data.results.map(({ id, title }) => ({ id, title }));
        setTrendingMovies(movieArray);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingList movies={trendingMovies} />
    </main>
  );
};

export default Home;
