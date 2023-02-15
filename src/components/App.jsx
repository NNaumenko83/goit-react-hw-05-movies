import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Movie from 'pages/Movies';
import Home from 'pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
      </Route>
    </Routes>
  );
};
