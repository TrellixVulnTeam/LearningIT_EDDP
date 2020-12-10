import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { IUser } from './IUser';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appUrl: string = environment.appUrl;
  helper = new JwtHelperService();
  /*
  currentUser: IUser = {
    FirstName: null,
    LastName: null,
    Email: null,
    isSuccess: null
  };
  */
  constructor( private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any){ // : Observable<IUser>
    return this.http.post(this.appUrl + 'api/auth/login', model).pipe(
      map((response: any) => {
        const decodedToken = this.helper.decodeToken(response.message);
        // this.currentUser.Email = decodedToken.Email;
        // this.currentUser.FirstName = decodedToken.FirstName;
        // this.currentUser.LastName = decodedToken.LastName;
        // this.currentUser.isSuccess = response.isSuccess;
        localStorage.setItem('Email', decodedToken.Email);
        localStorage.setItem('FirstName', decodedToken.FirstName);
        localStorage.setItem('LastName', decodedToken.LastName);
        localStorage.setItem('message', response.message);

        // return this.currentUser;
      })
    );
  }

  loggedIn(): boolean{
    const message = localStorage.getItem('message');
    return !this.helper.isTokenExpired(message);
  }

  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('Email');
    localStorage.removeItem('FirstName');
    localStorage.removeItem('LastName');
    localStorage.removeItem('message');
  }
  // tslint:disable-next-line: typedef
  register(model: any){
    return  this.http.post(this.appUrl + 'api/auth/register', model);
  }
}
