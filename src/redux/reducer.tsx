import {AnyAction} from 'redux';
import {ADD_MOVIE_LIST, ADD_SELECTED_MOVIE} from './constants';

const INITIAL_STATE = {
  selectedMovie: {},
  movieList: [],
};

export default function (state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case ADD_SELECTED_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case ADD_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
}
