import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { observable, Subscriber } from 'rxjs';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { UserDetail } from 'src/app/services/UserDetails';
import { UserDetailPut } from 'src/app/services/UserDetailsPut';
import { environment } from 'src/environments/environment';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  myimage;
  myimage2;
  userId = localStorage.getItem('Id');
  appUrl: string = environment.appUrl;
  myUser: UserDetail[] = [];
  myUser2: UserDetail[] = [];
  myUserPut: UserDetailPut = {
    Id: null,
    IdentityId: null,
    FirstName: null,
    LastName: null,
    Score: null,
    Image: null
  };

  constructor(private authUser: AuthService, private http: HttpClient) {

   }

  ngOnInit(): void {
    this.http.get<UserDetail>(this.appUrl + 'api/User/' + this.userId).subscribe((data) => {
      this.myimage2 = data.image;
    });
  }

  // tslint:disable-next-line: typedef
  onFileChanged($event: Event){
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
    this.http.get<UserDetail>(this.appUrl + 'api/User/' + this.userId).subscribe((data) => {
      this.myUserPut.Id = data.id;
      this.myUserPut.IdentityId = data.identityId;
      this.myUserPut.FirstName = data.firstName;
      this.myUserPut.LastName = data.lastName;
      this.myUserPut.Score = data.score;
      this.myUserPut.Image = this.myimage;
    });
  }

  // tslint:disable-next-line: typedef
  convertToBase64(file: File){
    // tslint:disable-next-line: no-shadowed-variable
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      this.myimage = d;
    });

  }

  // tslint:disable-next-line: typedef
  readFile(file: File, subscriber: Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }


  // tslint:disable-next-line: typedef
  onSubmit(){
    return  this.http.put(this.appUrl + 'api/User/' + this.userId, this.myUserPut).subscribe();
  }
}

