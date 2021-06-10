import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieListResult } from 'src/app/models/movie';
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

  getDetail() {}

  search(title: string): Observable<MovieListResult> {
    return this.httpClient.get<MovieListResult>(
      `${environment.theMovieDbConfig.baseURL}/3/search/movie?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES&query=${title}&page=1&include_adult=true`
    );
  }
}
