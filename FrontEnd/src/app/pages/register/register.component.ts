import { AlertService } from 'ngx-alerts';
import { Component, forwardRef, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { ProgressbarService } from 'src/app/services/progressbar.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {
    FirstName: null,
    LastName: null,
    Email: null,
    Password: null,
    ConfirmPassword: null
  };

  constructor(
    // public alertService: AlertService,
    private authService: AuthService,
    private progressService: ProgressbarService

  ) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {}

  // tslint:disable-next-line: typedef
  onSubmit() {
    // this.progressService.startLoading();
    const registerObserver = {
      next: (x) => {
        alert('Account Created');
        // this.progressService.setSuccess();
        // this.alertService.success('Account Created');
        // this.progressService.completeLoading();
      },
      error: (err) => {
        alert('Fail');
        // this.progressService.setFailure();
        // this.alertService.danger(err.error.errors[0].description);
        // this.progressService.completeLoading();
      },
    };


    this.authService.register(this.model).subscribe(registerObserver);
  }

}
