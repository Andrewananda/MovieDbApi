import axios from 'axios';
import {IMovie} from '../screens/movies/model/movie';

export function fetchMovies() {
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=62d9f01114bbcb2818f3f6e1e42ef1ef';
  return axios.get<IMovie>(url);
}
