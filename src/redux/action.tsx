import {Result} from './type';
import {ADD_MOVIE_LIST, ADD_SELECTED_MOVIE} from './constants';

export function addSelectedMovie(movie: Result) {
  return {
    type: ADD_SELECTED_MOVIE,
    payload: movie,
  };
}

export function addMovieList(movies: Result[]) {
  return {
    type: ADD_MOVIE_LIST,
    payload: movies,
  };
}
