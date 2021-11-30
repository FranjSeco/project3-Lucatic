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
  private apiUrl = 'localhost:27017/proyectoFinal';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    const url = `${this.apiUrl}/signup`;
    console.log('Hemos llegado aqui');
    return this.http.post<User>(url, user, httpOptions);
  }

  // register(user: User) {
  //   return fetch(`${this.BASE_URL}/signup`, {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ user }),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       return res;
  //     });
  // }
}
