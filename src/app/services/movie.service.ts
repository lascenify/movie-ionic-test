import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie, MovieListResult } from 'src/app/models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly httpClient: HttpClient) {}

  getPopularMovies(pageNumber: number): Observable<MovieListResult> {
    return this.httpClient.get<MovieListResult>(
      `${environment.theMovieDbConfig.baseURL}/3/movie/popular?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES&page=${pageNumber}`
    );
  }

  getDetail(movieId: string): Observable<Movie> {
    return this.httpClient.get<Movie>(
      `${environment.theMovieDbConfig.baseURL}/3/movie/${movieId}?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES`
    );
  }

  search(title: string, pageNumber: number): Observable<MovieListResult> {
    return this.httpClient.get<MovieListResult>(
      `${environment.theMovieDbConfig.baseURL}/3/search/movie?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES&query=${title}&page=${pageNumber}&include_adult=true`
    );
  }
}
