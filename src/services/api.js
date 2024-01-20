import axios from 'axios';

const AUTHORIZATION =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVkODUxMzQxMDY3YmQ1NjVlY2VkN2IzMWUzMmFjMCIsInN1YiI6IjY1YWFiNzg5ZDk1NDIwMDBjNjIxNWUyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SuKtMD1Cn2_-nHGHgUykclDXuZiTXI9zSkgi4ql7D_Y';
const API_KEY = '56ed851341067bd565eced7b31e32ac0';

export async function showTrendingMovies() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
    headers: {
      accept: 'application/json',
      Authorization: AUTHORIZATION,
    },
  };

  const response = await axios(options);

  return response.data.results;
}

export async function searchMovieByQuery(query) {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      api_key: API_KEY,
      query: query,
      language: 'en-US',
      page: 1,
    },
    headers: {
      accept: 'application/json',
      Authorization: AUTHORIZATION,
    },
  };
  const response = await axios(options);

  return response.data.results;
}

// export async function showMovieDetails(id) {

// }
