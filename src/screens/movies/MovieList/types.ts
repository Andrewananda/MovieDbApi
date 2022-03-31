import {IMovie} from '../model/movie';
import {Result} from '../../../redux/type';

export default interface Props {
  navigation: any;
  starCount?: number;
  item: IMovie;
  movieList: IMovie[];
  addSelectedMovie: (result: Result) => void;
  addMovieList: (movieList: Result[]) => void;
}
