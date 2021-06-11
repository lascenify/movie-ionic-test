import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { MovieListResult } from '../models/movie';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

describe('MovieService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPopularMovies', () => {
    let expectedMovies: MovieListResult;
    beforeEach(() => {
      expectedMovies = {
        page: 1,
        total_pages: 1,
        total_results: 3,
        results: [
          {
            title: 'Película 1',
            overview: 'overview película 1',
            poster_path: 'N/A',
            release_date: '10/11/2010',
            vote_average: 8.64,
            vote_count: 230,
          },
          {
            title: 'Película 2',
            overview: 'overview película 2',
            poster_path: 'N/A',
            release_date: '10/11/2011',
            vote_average: 8.65,
            vote_count: 231,
          },
          {
            title: 'Película 3',
            overview: 'overview película 3',
            poster_path: 'N/A',
            release_date: '10/11/2015',
            vote_average: 8.8,
            vote_count: 20,
          },
        ],
      };
    });
    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });
    it('should return expected movies (called once)', () => {
      service
        .getPopularMovies(1)
        .subscribe((popularMovies: MovieListResult) => {
          console.log(
            '🚀 ~ file: movie.service.spec.ts ~ line 68 ~ .subscribe ~ popularMovies',
            popularMovies
          );
          expect(popularMovies).toEqual(
            expectedMovies,
            'should return expected heroes'
          );
          expect(popularMovies.results).toHaveSize(3);
          expect(popularMovies.total_results).toBe(3);
        }, fail);
      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(
        `${environment.theMovieDbConfig.baseURL}/3/movie/popular?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES&page=1`
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(expectedMovies);
    });
  });

  describe('get search', () => {
    let resultOfSearch: MovieListResult;
    beforeEach(() => {
      resultOfSearch = {
        page: 1,
        total_pages: 1,
        total_results: 1,
        results: [
          {
            title: 'Película 1',
            overview: 'overview película 1',
            poster_path: 'N/A',
            release_date: '10/11/2010',
            vote_average: 8.64,
            vote_count: 230,
          },
        ],
      };
    });
    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });
    it('should return searched movies (called once)', () => {
      service.search('1', 1).subscribe((popularMovies: MovieListResult) => {
        expect(popularMovies).toEqual(
          resultOfSearch,
          'should return result of search'
        );
        expect(popularMovies.results).toHaveSize(1);
        expect(popularMovies.total_results).toBe(1);
      }, fail);
      // HeroService should have made one request to GET heroes from expected URL
      const req = httpTestingController.expectOne(
        `${environment.theMovieDbConfig.baseURL}/3/search/movie?api_key=${environment.theMovieDbConfig.apiKey}&language=es-ES&query=1&page=1&include_adult=true`
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock heroes
      req.flush(resultOfSearch);
    });
  });
});
