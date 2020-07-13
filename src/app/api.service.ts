import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  post(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/login', c)
      .pipe(catchError(this.errorHandler))
  }



  forgotpassword(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/ForgotPassword', c)
      .pipe(catchError(this.errorHandler))
  }

  resetpassword(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/ResetPassword', c)
      .pipe(catchError(this.errorHandler))
  }

  logout(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/LogOut', c)
      .pipe(catchError(this.errorHandler))
  }

  Registration(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/Register', c)
      .pipe(catchError(this.errorHandler))
  }

  AccountVerify(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/AccountVerify', c)
      .pipe(catchError(this.errorHandler))
  }

  ActivateAccount(c) {
    debugger;
    return this.http.post('https://localhost:44353/api/Login/ActivateAccount', c)
      .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
