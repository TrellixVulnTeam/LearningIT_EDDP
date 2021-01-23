import { getTestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  FirstName: string;
  LastName: string;
  Email: string;
  Score: number;
  constructor(public authService: AuthService) {
    this.FirstName = localStorage.getItem('FirstName');
    this.LastName = localStorage.getItem('LastName');
    this.Email = localStorage.getItem('Email');
    this.Score = 30

   }

   

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.FirstName = localStorage.getItem('FirstName');
    // this.LastName = localStorage.getItem('LastName');
    // this.Email = localStorage.getItem('Email');
  }

  isloggedIn(): boolean{
    return this.authService.loggedIn() === true ? true : false;
  }
}
