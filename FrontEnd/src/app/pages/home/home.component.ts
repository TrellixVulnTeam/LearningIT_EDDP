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
  x: string;
  courses: any;
  filterTerm: string;
  category = [
    {t: '.NET'},
    {t: 'Azure'},
    {t: 'Dynamics 365'},
    {t: 'GitHub'},
    {t: 'Internet Explorer'},
    {t: 'Microsoft 365'},
    {t: 'Microsoft Edge'},
    {t: 'Microsoft Endpoint Manager'},
    {t: 'Microsoft Graph'},
    {t: 'Office'},
    {t: 'Office 365'},
    {t: 'Power Platform'},
    {t: 'Quantum Development Kit'},
    {t: '.SQL Server'},
    {t: 'Surface'},
    {t: 'Teams'},
    {t: 'Visual Studio'},
    {t: 'Windows'}
  ];

  levels = [
    {t: 'Beginner'},
    {t: 'Intermediate'},
    {t: 'Advanced'}
  ];
  constructor(private secretService: SecretService, private http: HttpClient) {
    this.http.get<any>(this.appUrl + 'api/courses').subscribe((data) => {
      this.courses = data;
      console.log(this.courses);
    });

   }


  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  onclick(clickedtitle){
    localStorage.setItem('CourseTitle', clickedtitle);
  }
  saveId(clickedId){
    localStorage.setItem('CourseId', clickedId);
  }
}
