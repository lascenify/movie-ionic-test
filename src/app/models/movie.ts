export interface MovieListResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
}
