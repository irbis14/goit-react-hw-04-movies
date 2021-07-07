import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "7266df9091fd13eed25fcf0ecb9f570b";
// const CORS_URL = "https://newsuperserver.herokuapp.com/";

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => response.data.results);
};

const fetchMovieByName = ({ searchQuery = "", page = 1 }) => {
  return axios
    .get(
      `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false`
    )
    .then((response) => response.data.results);
};

const fetchMovieById = (movieId) => {
  return axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then((response) => response.data);
};

const fetchCastById = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then((response) => response.data);
};

const fetchReviews = (movieId) => {
  return axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then((response) => response.data.results);
};

export {
  fetchTrendingMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviews,
  fetchMovieByName,
};
