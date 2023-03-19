import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieComponent } from './components/movie/movie.component';
import { RouterModule } from '@angular/router';
import { MoviesRoutingModule } from './movies-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MoviesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class MoviesModule { }
