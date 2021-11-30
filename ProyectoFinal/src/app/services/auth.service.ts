import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { User } from '../model/user-interface';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
=======
>>>>>>> 523c5388bf5638f60a3d0b74337ce1fe6c2d4e69

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
