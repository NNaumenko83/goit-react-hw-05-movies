import axios from 'axios';

const API_KEY = '6251e629c61bceaf56a3d45f05637256';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieApi = axios.create({
  baseURL: BASE_URL,
});

const config = { params: { api_key: API_KEY } };

export const fetchTrendingMovie = async () => {
  const response = await movieApi('/trending/movie/day', config);
  return response;
};

export const getMovieById = async id => {
  console.log(id);
  const response = await movieApi(`/movie/${id}`, config);
  return response.data;
};

// Функція отримання даних про акторський склад
export const getMovieCast = async id => {
  console.log(id);
  const response = await movieApi(`/movie/${id}/credits`, config);
  return response.data;
};
// Треба такі дані для картки акторів
// profile_path;
// character;
// name;
// =============================================

// Функція отримання даних Reviews
export const getMovieReviews = async id => {
  console.log('getMovieReviews:', id);
  const response = await movieApi(`/movie/${id}/reviews`, config);
  console.log('getMovieReviews:', response.data.results);
  return response.data.results;
};

// МАСИВ ЖАНРІВ ПОДУМАТИ ЯК ВИКОРИСТАТИ І КУДИ ВНЕСТИ ДАНІ
// https://api.themoviedb.org/3/genre/movie/list?api_key=6251e629c61bceaf56a3d45f05637256

// genres;
// vote_average;
// overview;
// original_title;
// poster_path;

// /movie/{movie_id}/credits

// /movie/{movie_id}/reviews
