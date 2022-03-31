import {IMovie} from '../model/movie';

export default interface Props {
  navigation: any;
  starCount?: number;
  item: IMovie;
  movieList: IMovie[];
}
