import { Observable } from 'rxjs';
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
  currentUser: IUser = {
    FirstName: null,
    LastName: null,
    Email: null,
    isSuccess: null,
  };
  constructor( private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  login(model: any): Observable<IUser> {
    return this.http.post(this.appUrl + 'api/auth/login', model).pipe(
      map((response: any) => {
        const decodedToken = this.helper.decodeToken(response.message);
        this.currentUser.Email = decodedToken.Email;
        this.currentUser.isSuccess = response.isSuccess;
        localStorage.setItem('message', response.message);

        return this.currentUser;
      })
    );
  }
  loggedIn(): boolean{
    const message = localStorage.getItem('message');
    return !this.helper.isTokenExpired(message);
  }

  // tslint:disable-next-line: typedef
  logout() {
    this.currentUser = {
      FirstName: null,
      LastName: null,
      Email: null,
      isSuccess: null,
    };
    localStorage.removeItem('message');
  }

  // tslint:disable-next-line: typedef
  register(model: any){
    return  this.http.post(this.appUrl + 'api/auth/register', model);
  }
}
