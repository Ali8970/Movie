import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movieapp-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() { }
  imgUrl = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie: Movie;


  ngOnInit(): void {
  }

}
