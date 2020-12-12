import { HttpClient } from '@angular/common/http';
import { SecretService } from './../../services/secret.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home , courses',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appUrl: string = environment.appUrl;
  courses: string;
  constructor(private secretService: SecretService, private http: HttpClient) {  }


  ngOnInit(): void {
    this.http.get<string>(this.appUrl + 'api/courses').subscribe((data) => {
      this.courses = data;
      // console.log(this.courses);
    });
  }

  // tslint:disable-next-line: typedef
  onclick(clickedid){
    localStorage.setItem('courseId', clickedid);
  }
}
