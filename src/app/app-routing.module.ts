

import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { Movie } from '../model/movie';


const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: MovieDetailComponent}
];
@NgModule({
  // declarations: [],

  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
