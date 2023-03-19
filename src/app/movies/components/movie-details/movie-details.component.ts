import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../movie.model';
import { MoviesService } from '../../services/movies.service';
import { Cast } from '../../models/credit.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: number;
  movie: Movie;
  credits: Cast[];
  loading:boolean = false;

  private baseUrl = 'https://api.themoviedb.org/3';
  imgUrl = 'https://image.tmdb.org/t/p/w500/';
  apiKey='137091abb19fa8f8e3ef90c795605693';
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit(): void {
    this.getMovieDetails(this.baseUrl + '/movie/'+this.id+'?api_key=' + this.apiKey);
    this.getActors(this.baseUrl + '/movie/' + this.id +'/credits?api_key=' + this.apiKey)
  }

  getMovieDetails(url){
    this.loading = true;
    this.moviesService.getMovieDetails(url).subscribe(movie=> {
      this.movie = movie;
      this.loading = false;
    })
  }

  getActors(url){
    this.loading = true;
    this.moviesService.getMovieCredits(url).subscribe((data: any) => {
      this.credits = data.cast;
      this.loading = false;

    });
  }
}
