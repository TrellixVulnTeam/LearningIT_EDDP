import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  clickEventsubscription: Subscription;
  FirstName: string;
  LastName: string;
  Email: string;
  constructor(
    public authService: AuthService,
    private sharedService: SharedService,
    private router: Router,
    private toastr: ToastrService
    ) {
    this.FirstName = localStorage.getItem('FirstName');
    this.LastName = localStorage.getItem('LastName');
    this.Email = localStorage.getItem('Email');
    this.clickEventsubscription = this.sharedService.getClickEvent().subscribe( () => {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    });
  }

  ngOnInit(): void {  }

  isloggedIn(): boolean{
    return this.authService.loggedIn() === true ? true : false;
  }
}
