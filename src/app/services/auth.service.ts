import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// Local Server
  private _registerUrl = 'http://localhost:8080/api/auth/signup';
  private _loginUrl = 'http://localhost:8080/api/auth/signin';
  private _userViewUrl = 'http://localhost:8080/api/test/user';
  private _adminViewUrl = 'http://localhost:8080/api/test/admin';
// AWS Server
  // private _registerUrl = 'http://ec2-3-1-222-81.ap-southeast-1.compute.amazonaws.com:8080/api/auth/signup';
  // private _loginUrl = 'http://ec2-3-1-222-81.ap-southeast-1.compute.amazonaws.com:8080/api/auth/signin';
  // private _userViewUrl = 'http://ec2-3-1-222-81.ap-southeast-1.compute.amazonaws.com:8080/api/test/user';
  // private _adminViewUrl = 'http://ec2-3-1-222-81.ap-southeast-1.compute.amazonaws.com:8080/api/test/admin';

  constructor(private http:HttpClient, private _router:Router) { }

  login(userlogin){
    return this.http.post<any>(this._loginUrl,userlogin)
  }
  registerUser(user){
    return this.http.post<any>(this._registerUrl,user)
  }
  loggedIn(){
    return localStorage.getItem('token')
    // return localStorage.getItem('access-token')
  }
  logOutUser(){
    localStorage.removeItem('token');
    // localStorage.removeItem('access-token')
    // localStorage.removeItem('refresh-token')
    this._router.navigate(['/home']);
  }
  getTocken(){
    return localStorage.getItem('token')
    // return localStorage.getItem('access-token');
  }
  getUserView(): Observable<any>{
    return this.http.get<any>(this._userViewUrl).pipe(catchError(this.errorHandler));
       }
  errorHandler(error: HttpErrorResponse){
    // return Observable.throw(error.message || "Server Error");
    return throwError(error);
    
  }
  getAdminView(){
    return this.http.get<any>(this._adminViewUrl);
  }
}
