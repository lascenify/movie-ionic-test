import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MovieDetailGuard } from './shared/guards/movie-detail.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    loadChildren: () =>
      import('./pages/movie-list/movie-list.module').then(
        (m) => m.MovieListPageModule
      ),
  },
  {
    path: 'movies/:id',
    loadChildren: () =>
      import('./pages/movie-detail/movie-detail.module').then(
        (m) => m.MovieDetailPageModule
      ),
    canActivate: [MovieDetailGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
