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

  constructor(private readonly movieService: MovieService) {}

  async ngOnInit() {
    this.movieService.getPopularMovies().subscribe((res: MovieListResult) => {
      console.log(
        '🚀 ~ file: movie-list.page.ts ~ line 14 ~ MovieListPage ~ movies ~ res',
        res
      );
      this.movies = res.results;
    });
  }
}
