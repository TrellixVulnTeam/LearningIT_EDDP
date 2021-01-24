import { getTestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appUrl: string = environment.appUrl;
  img: any;
  clickEventsubscription: Subscription;
  FirstName: string;
  LastName: string;
  Email: string;
  constructor(
    public authService: AuthService,
    private sharedService: SharedService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
    ) {
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe( () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    // this.FirstName = localStorage.getItem('FirstName');
    // this.LastName = localStorage.getItem('LastName');
    // this.Email = localStorage.getItem('Email');
    this.http.get<any>(this.appUrl + 'api/User/' + localStorage.getItem('UserId')).subscribe((data) => {
      this.img = data.image;
    });
  }

  isloggedIn(): boolean{
    return this.authService.loggedIn() === true ? true : false;
  }
}
