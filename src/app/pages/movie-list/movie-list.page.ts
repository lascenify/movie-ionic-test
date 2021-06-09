import { Component, OnInit } from '@angular/core';
import { Movie, MovieListResult } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.page.html',
  styleUrls: ['./movie-list.page.scss'],
})
export class MovieListPage implements OnInit {
  movies: Movie[];
  searchQuery: string;
  constructor(private readonly movieService: MovieService) {}

  async ngOnInit() {
    this.getPopularMovies();
  }

  onSearchInputChanged() {
    if (this.searchQuery.length > 0) {
      this.movieService
        .search(this.searchQuery)
        .subscribe((res: MovieListResult) => {
          console.log(
            '🚀 ~ file: movie-list.page.ts ~ line 23 ~ MovieListPage ~ result of movies search',
            res
          );
          this.movies = res.results;
        });
    } else this.getPopularMovies();
  }

  private getPopularMovies() {
    this.movieService.getPopularMovies().subscribe((res: MovieListResult) => {
      console.log(
        '🚀 ~ file: movie-list.page.ts ~ line 33 ~ MovieListPage ~ popular movies',
        res
      );
      this.movies = res.results;
    });
  }
}
