import { AlertService } from 'ngx-alerts';
import { ProgressbarService } from './../../services/progressbar.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  // tslint:disable-next-line: typedef
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  Login(f: NgForm) {
    const loginObserver = {
      next: (x) => {
        // this.toastr.success('Welcome back ' + localStorage.getItem('FirstName') + ' ' + localStorage.getItem('LastName'));
        this.toastr.success('Welcome back ' + this.authService.FirstName + ' ' + this.authService.LastName);
        setTimeout(() => {
          this.router.navigate(['/home']);
      });
      },
      error: (err) => {
        this.toastr.error('Fail');
      },
    };

    this.authService.login(f.value).subscribe(loginObserver);
  }

}
