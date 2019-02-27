

import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/model/movie';
// Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFormService();
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.log(`this.route.snapshot.paraMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // this.movieService.getMovieFormID(id).subscribe(movie => this.movie = movie);
  }

  getMovieFormService(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paraMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    this.movieService.getMovieFormID(id).subscribe(movie => this.movie = movie);
  }

  save(): void {
    this.movieService.updateMovie(this.movie).subscribe(() => this.goBack()) ;
  }

  goBack(): void {
    this.location.back();
  }

}
