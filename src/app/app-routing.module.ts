import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie-list',
    pathMatch: 'full',
  },
  {
    path: 'movie-list',
    loadChildren: () =>
      import('./pages/movie-list/movie-list.module').then(
        (m) => m.MovieListPageModule
      ),
  },
  {
    path: 'movie-detail',
    loadChildren: () =>
      import('./pages/movie-detail/movie-detail.module').then(
        (m) => m.MovieDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
