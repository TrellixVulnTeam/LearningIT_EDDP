import { HomeComponent } from './../home/home.component';
import { IChapter } from './../../services/IChapter';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SecretService } from 'src/app/services/secret.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course , chapters',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  capitole: any;
  appUrl: string = environment.appUrl;
  selectedChapter = '';
  currenttitle = localStorage.getItem('coursetitle');

  constructor(private secretService: SecretService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.appUrl + 'api/chapters/title/' + this.currenttitle).subscribe((data) => {
      this.capitole = data;
    });
  }
  // tslint:disable-next-line: typedef
  onclick(clickedid) {
    // tslint:disable-next-line: prefer-const
    for (let item of this.capitole)
    {
      if (item.id === clickedid){
        this.selectedChapter = item.content;
      }
    }
  }
}



