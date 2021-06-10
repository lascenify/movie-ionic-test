import { Component, OnInit } from '@angular/core';
import { Movie, MovieListResult } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  movies: Movie[] = [];
  searchQuery: string;
  totalOfMovies: number;
  pageNumber = 1;
  pageLimit = 8;
  constructor(private readonly movieService: MovieService) {}

  async ngOnInit() {
    this.getPopularMovies();
  }

  onSearchInputChanged() {
    this.searchQuery.length > 0 ? this.searchMovies() : this.getPopularMovies();
  }

  loadData(event) {
    this.pageNumber++;
    if (this.searchQuery?.length > 0) {
      this.searchMovies();
    } else {
      this.getPopularMovies();
    }
    setTimeout(() => {
      event.target.complete();
      if (this.movies.length == this.totalOfMovies) {
        event.target.disabled = true;
      }
    }, 500);
  }

  private getPopularMovies() {
    this.movieService
      .getPopularMovies(this.pageNumber)
      .subscribe((res: MovieListResult) => {
        console.log(
          '🚀 ~ file: movie-list.page.ts ~ line 33 ~ MovieListPage ~ popular movies',
          res
        );
        this.movies = this.movies.concat(res.results);
      });
  }

  private searchMovies() {
    this.movieService
      .search(this.searchQuery)
      .subscribe((res: MovieListResult) => {
        console.log(
          '🚀 ~ file: movie-list.page.ts ~ line 23 ~ MovieListPage ~ result of movies search',
          res
        );
        this.movies = res.results;
      });
  }
}
