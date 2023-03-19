import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie.model';
import { Cast } from '../models/credit.model';
import { Genre } from '../models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  getMovies(apiUrl) {
    return this.http.get<Movie[]>(apiUrl);
  }
  getMovieDetails(apiUrl){
    return this.http.get<Movie>(apiUrl);
  }
  getMovieCredits(url) {
    return this.http.get<Cast[]>(url);
  }
  getGenres(url){
    return this.http.get<Genre[]>(url);
  }
  getMoviesByGenres(url){
    return this.http.get<Movie[]>(url);
  }
}
