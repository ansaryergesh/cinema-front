import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  getMovie(id: string): Observable<any> {
    return this.http.get('http://localhost:8088/request/' + id);
  }
  getMovieList(): Observable<any> {
    return this.http.get('http://localhost:8081/api/all');
  }
  getBookingList(): Observable<any> {
    return this.http.get('http://localhost:8083/booking/all');
  }
  createMovie(movie: Object): Observable<Object> {
    return this.http.post('http://localhost:8081/api/add/movie', movie);
  }
  deleteMovie(id: string): Observable<any> {
    return this.http.delete('http://localhost:8081/api/movie/' + id, { responseType: 'text' });
  }
  updateMovie(id: string, value: any): Observable<Object> {
    return this.http.put('http://localhost:8082/movie/' + id, value);
  }

  createBooking(movie: Object): Observable<Object> {
    return this.http.post('http://localhost:8083/booking/add', movie);
  }
}
