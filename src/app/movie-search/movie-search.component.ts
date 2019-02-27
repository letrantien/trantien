import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Movie } from 'src/model/movie';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movie$: Observable<Movie[]>;
  private searchedSubject = new Subject<string>();

  constructor(private moviveServive: MovieService) { }

  search(searchString: string): void {
    console.log(`searchString = ${searchString}`);
    this.searchedSubject.next(searchString);
  }
  ngOnInit() {
    this.movie$ = this.searchedSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchMovie: string) => this.moviveServive.searchMovie(searchMovie))
    );
  }

}
