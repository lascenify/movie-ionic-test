import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: Movie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(id);
  }

  private getMovieDetails(id: string) {
    this.movieService.getDetail(id).subscribe(
      (movie) => {
        this.movie = movie;
      },
      () => {
        this.navCtrl.navigateRoot('');
      }
    );
  }
}
