import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Email = this.authService.currentUser.Email;
  constructor(public authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  isloggedIn(): boolean{
    return this.authService.loggedIn() === true ? true : false;
  }
}
