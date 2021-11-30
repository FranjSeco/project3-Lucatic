import { Injectable } from '@angular/core';
import { User } from '../model/user-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'localhost:8080';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/register`;
    console.log(user);
    console.log('Hemos llegado aqui');
    return this.http.post<User>(url, user, httpOptions);
  }
}
