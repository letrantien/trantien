


import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../movie.service';
// import { fakeMovies } from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {

  }

  movies: Movie[];
  // movie: Movie = {
  //   id: 1,
  //   name: "Trạng Quỳnh",
  //   releaseYear: 2019
  // }
  // movies = fakeMovies;

  // selectedMovie: Movie;
  // getMovieFormService(): void {
  //   this.movies = this.movieService.getMovies();
  // }

  getMovieFormService(): void {
    this.movieService.getMovies().subscribe(
      (updatedMovies) => {
        this.movies = updatedMovies;
        // console.log(`this.movie = ${JSON.stringify(this.movies)}`);
      }
    );
  }

  ngOnInit() {
    this.getMovieFormService();
  }
  // onSelect (movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  // }

  add(name: string, releaseYear: string): void {
    name = name.trim();
    if (Number.isNaN(Number(releaseYear)) || !name || Number(releaseYear) === 0) {
      alert('Name must not be blank, Relese year must be a number');
      return;
    }
    const newMovie: Movie = new Movie();
    newMovie.name = name;
    newMovie.releaseYear = Number(releaseYear);
    this.movieService.addMovie(newMovie).subscribe(insertedMovie => {
      this.movies.push(insertedMovie);
    });
  }

  delete(id: number): void {
    this.movieService.deleteMovie(id).subscribe(_ => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== id);
      // this.movies.splice(this.movies, 1);
    });
  }
}
