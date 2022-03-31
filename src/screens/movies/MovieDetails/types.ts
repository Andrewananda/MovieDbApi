import {Result} from '../../../redux/type';
import {IMovie} from '../model/movie';

export default interface Props {
  navigation: any;
  addSelectedMovie: (result: Result) => void;
  selectedItem: Result;
  movieList: IMovie[];
};
