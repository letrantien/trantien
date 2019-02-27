
import { Injectable } from '@angular/core';
import { Movie } from 'src/model/movie';
import { fakeMovies } from './fake-movies';

// Get data asynchronously with Observable
import { catchError, map, tap } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
import { Observable, of} from 'rxjs';
// MessageService
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { error } from 'util';

const httpOption = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesURL = 'http://localhost:3000/movie';
  getMovies(): Observable<Movie[]> {
    // this.messageService.add(` ${new Date().toLocaleString() }. Get movie list `);
    // return of(fakeMovies);
    return this.http.get<Movie[]>(this.moviesURL).pipe(
      tap(receiveMovies => console.log(`receiveMovies = ${JSON.stringify(receiveMovies)}`)),
      catchError(_error => of([]))
    );
  }
  getMovieFormID(id: number): Observable<Movie> {
    // return of(fakeMovies.find(movie => movie.id === id));
    const url = `${this.moviesURL}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`selected Movie = ${JSON.stringify(selectedMovie)}`)),
      catchError(_error => of (new Movie())
      )
    );
  }
  // PUT: update the movie on the server
  updateMovie(movie: Movie): Observable<any> {

    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOption ).pipe(
      tap(updateMovie => console.log(`update movie = ${JSON.stringify(updateMovie)}`)),
      catchError(_error => of(new Movie()))
    );
  }
  // POST: add a new movie to the server
  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesURL, newMovie, httpOption).pipe(
      tap((movie: Movie) => console.log(`inserted movie = ${JSON.stringify(movie)}`)),
      catchError(_error => of(new Movie()))
    );
  }
  // DELETE: delete the movie from the server
  deleteMovie(movieId: number): Observable<Movie> {
    const url = `${this.moviesURL}/${movieId}`;
    return this.http.delete<Movie>(url, httpOption).pipe(
      tap(_ => console.log(`Delete movie with id = ${movieId}`)),
      catchError(_error => of(null))
    );
  }
  // GET movie whose name contains searched string
  searchMovie(typedString: string): Observable<Movie[]> {
    if (!typedString.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesURL}?name_like=${typedString}`).pipe(
      tap(foundMovie => console.log(`Found Movie = ${JSON.stringify(foundMovie)}`)),
      catchError(_error => of(null))
    );
  }

  constructor(
    private http: HttpClient,
    public messageService: MessageService) { }
}
