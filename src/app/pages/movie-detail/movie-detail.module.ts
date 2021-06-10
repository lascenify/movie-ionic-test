import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieDetailPageRoutingModule } from './movie-detail-routing.module';

import { MovieDetailPage } from './movie-detail.page';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  imports: [
    BarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MovieDetailPageRoutingModule,
  ],
  declarations: [MovieDetailPage],
})
export class MovieDetailPageModule {}
