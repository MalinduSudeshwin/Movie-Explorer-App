import axios from 'axios';

const API_KEY = '9fc6c61ab8702706daf20e6432379e27';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const fetchTrendingMovies = () =>
  tmdb.get(`/trending/movie/week?api_key=${API_KEY}`);

export const searchMovies = (query, page = 1) =>
  tmdb.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);

export const fetchMovieDetails = (id) =>
  tmdb.get(`/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);

export default tmdb;
