import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Genre } from '../../models/genre.model';
import { Movie } from '../../movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  apiKey='137091abb19fa8f8e3ef90c795605693';
  baseUrl = 'https://api.themoviedb.org/3';
  apiUrl = this.baseUrl +'/discover/movie?sort_by=popularity.desc&api_key=137091abb19fa8f8e3ef90c795605693';
  searchUrl = this.baseUrl + '/search/movie?api_key=' + this.apiKey;
  genresUrl = this.baseUrl + '/genre/movie/list?api_key=' + this.apiKey;
  movies: Movie[];
  form: FormGroup;
  loading: boolean = false;
  genres: Genre[]=[];
  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl('',[Validators.required]),
    })
    this.getMovies(this.apiUrl);
    this.getGenres(this.genresUrl);
  }
  onSubmit(){
    if(this.form.value.search){
      this.getMovies(this.searchUrl+'&query='+this.form.value.search)
    }
    else {
      this.getMovies(this.apiUrl);
    }
  }

  getMovies(url){
    this.loading = true;
    this.moviesService.getMovies(url).subscribe(movies=>{
      this.movies = movies['results'];
      this.loading = false;

    })
  }

  getMoviesByPage(page: number) {
    this.loading = true;
    this.moviesService.getMovies(this.baseUrl + '/movie/popular?api_key=' + this.apiKey + '&page='+page).subscribe(movies=> {
      this.movies = movies['results'];
      this.loading = false;
    })
  }

  getGenres(genresUrl){
    this.loading= true;
    this.moviesService.getGenres(genresUrl).subscribe((genres: Genre[])=>{
      this.genres = genres['genres'];
      this.loading= false;
    })
  }
  getMovieByGenres(value: number){
    this.loading= true;
    this.moviesService.getMoviesByGenres(this.apiUrl + '&with_genres='+ value).subscribe((movies: Movie[])=>{
      this.movies = movies['results'];
      this.loading= false;
    })
  }

}
