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
  constructor() { }
  ngOnInit(): void{  }
}

