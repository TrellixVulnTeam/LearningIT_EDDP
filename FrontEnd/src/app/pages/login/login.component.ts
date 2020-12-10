import { AlertService } from 'ngx-alerts';
import { ProgressbarService } from './../../services/progressbar.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    // private alertService: AlertService,
    private authService: AuthService,
    private router: Router
    // private progressService: ProgressbarService
  ) { }


  // tslint:disable-next-line: typedef
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  Login(f: NgForm) {
    // this.alertService.info('Check login information');
    // this.progressService.startLoading();

    const loginObserver = {
      next: (x) => {
        alert('Welcome back ' + localStorage.getItem('FirstName') + ' ' + localStorage.getItem('LastName'));
        this.router.navigate(['home']);
        // this.progressService.setSuccess();
        // this.alertService.success('Welcome back' + x.username);
        // this.progressService.completeLoading();
      },
      error: (err) => {
        alert('Fail');
        console.log(err);
        // this.progressService.setFailure();
        // this.alertService.danger('Unable to Login');
        // this.progressService.completeLoading();
      },
    };

    this.authService.login(f.value).subscribe(loginObserver);
  }

}
