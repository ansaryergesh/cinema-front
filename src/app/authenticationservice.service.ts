import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationserviceService {
  constructor(private http: HttpClient) { }

  getUserByUserNameAndPassword(userName: string, password: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8085/user/user?userName=' + userName + '&password=' + password);
  }
  createGame(user: Object): Observable<Object> {
    return this.http.post('http://localhost:8085/user/add', user);
  }
  getUser(userName: string): Observable<boolean> {
    return this.http.get<boolean>('http://localhost:8085/user/user/' + userName);
  }
}
