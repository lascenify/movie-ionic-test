import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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

  private totalOfMovies: number;
  private pageNumber = 1;
  private isSearching = false;

  constructor(
    private readonly movieService: MovieService,
    private readonly navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.getPopularMovies();
  }

  onSearchInputChanged() {
    this.cleanMovies();
    this.isSearchInputFilled() ? this.searchMovies() : this.getPopularMovies();
  }

  loadData(event) {
    this.pageNumber++;
    if (this.isSearchInputFilled()) {
      if (!this.isSearching) this.cleanMovies(event);
      this.searchMovies();
    } else {
      if (this.isSearching) this.cleanMovies(event);
      this.getPopularMovies();
    }
    setTimeout(() => {
      event.target.complete();
      if (this.movies.length == this.totalOfMovies) {
        event.target.disabled = true;
      }
    }, 500);
  }

  private isSearchInputFilled() {
    return this.searchQuery?.length > 0;
  }

  private getPopularMovies() {
    this.isSearching = false;
    this.movieService
      .getPopularMovies(this.pageNumber)
      .subscribe((res: MovieListResult) => {
        console.log(
          '🚀 ~ file: movie-list.page.ts ~ line 55 ~ MovieListPage ~ popular movies',
          res
        );
        this.movies = this.movies.concat(res.results);
        this.totalOfMovies = res.total_results;
      });
  }

  private searchMovies() {
    this.isSearching = true;
    this.movieService
      .search(this.searchQuery, this.pageNumber)
      .subscribe((res: MovieListResult) => {
        console.log(
          '🚀 ~ file: movie-list.page.ts ~ line 69 ~ MovieListPage ~ result of movies search',
          res
        );
        this.movies = this.movies.concat(res.results);
        this.totalOfMovies = res.total_results;
      });
  }

  private cleanMovies(event?: any) {
    if (event) event.target.disabled = false;
    this.movies = [];
    this.pageNumber = 1;
  }

  navToMovieDetail(movie: Movie) {
    this.navCtrl.navigateForward(`/movies/${movie.id}`);
  }
}
