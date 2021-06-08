import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: Movie;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    const params = this.router.getCurrentNavigation().extras.state;
    this.movie = params?.movie;
  }
}
