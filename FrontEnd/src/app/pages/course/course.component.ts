import { HomeComponent } from './../home/home.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SecretService } from 'src/app/services/secret.service';
import { environment } from 'src/environments/environment';
import { CourseDetails } from '../utils/CourseDetails';
import { ChapterDetails } from '../utils/ChapterDetails';


@Component({
  selector: 'app-course , chapters',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{

  public capitole: ChapterDetails[];
  public firstChapter: ChapterDetails;
  public course: CourseDetails;
  appUrl: string = environment.appUrl;
  selectedChapter = '';
  currenttitle = localStorage.getItem('CourseTitle');
  curentId = localStorage.getItem('CourseId');

  constructor(private secretService: SecretService, private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<CourseDetails>(this.appUrl + 'api/courses/' + this.curentId).subscribe((data) => {
      this.course = data;
    });

    this.http.get<ChapterDetails[]>(this.appUrl + 'api/chapters/title/' + this.currenttitle).subscribe((data) => {
      this.capitole = data;
      this.firstChapter = data[0];
    });

  }


  saveChaperId(ChaperId): void {
    localStorage.setItem('ChapterId', ChaperId);
    localStorage.setItem('CurentTitleCourse', this.currenttitle);
  }

  // tslint:disable-next-line: typedef

}



