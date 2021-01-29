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

  FirstName: string;
  LastName: string;
  userId = localStorage.getItem('UserId');
  appUrl: string = environment.appUrl;
  myUserPut: UserDetailPut = {
    Id: null,
    IdentityId: null,
    FirstName: null,
    LastName: null,
    Score: null,
    Image: null
  };


  constructor(private authUser: AuthService, private http: HttpClient) { }
  ngOnInit(): void{
    this.http.get<UserDetail>(this.appUrl + 'api/User/' + this.userId).subscribe((data) => {
      this.myUserPut.Id = data.id;
      this.myUserPut.IdentityId = data.identityId;
      this.myUserPut.FirstName = data.firstName;
      this.myUserPut.LastName = data.lastName;
      this.myUserPut.Score = data.score;
      this.myUserPut.Image = data.image;
      this.FirstName = data.firstName;
      this.LastName = data.lastName;
    });
    }

  certificat(){

    return this.http.post(this.appUrl + 'api/certificat/', this.myUserPut).subscribe();
  }
}

