import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "7266df9091fd13eed25fcf0ecb9f570b";

const fetchTrendingMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
    .then((response) => response.data.results);
};

export { fetchTrendingMovies };
