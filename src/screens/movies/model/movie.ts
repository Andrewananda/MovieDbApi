export interface IMovie {
  page: number;
  results?: results[];
}

export interface results {
  poster_path: string;
  name: string;
  id: number;
  original_name: string;
  origin_country: string[];
  vote_count: string;
  backdrop_path: string;
  vote_average: any;
  first_air_date: string;
  overview: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  media_type: string;
  release_date: string;
}
