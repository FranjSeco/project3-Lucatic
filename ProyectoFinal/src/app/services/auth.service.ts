import { Injectable } from '@angular/core';

import { UserInterface } from '../model/user-interface';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  REST_API: string = 'http://localhost:8080/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  adduser(user: UserInterface): Observable<any> {
    let API_URL = `${this.REST_API}/adduser`;
    return this.httpClient
      .post(API_URL, user)
      .pipe(catchError(this.handleError));
  }

  login(email: string, password: any) {
    let API_URL = `${this.REST_API}/login`;
    return this.httpClient
      .post(API_URL, { email, password })
      .pipe(catchError(this.handleError));
  }

  updateUser(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/updateUser/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  // authorize(email: string, password: any) {
  //   let API_URL = `${this.REST_API}/login`;
  //   return this.httpClient.post(API_URL, );
  // }

  //   authorize = (email, password) => {
  //     return fetch(`${BASE_URL}/signin`, {
  //         method: 'POST',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ email, password })
  //     })
  //         .then((res) => {
  //             return res.json()
  //         })
  //         .then((data) => {
  //             localStorage.setItem('jwt', data.token);
  //             return data;
  //         })
  //         .catch((err) => console.log(err));
  // }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
