import { IChapter } from './../../services/IChapter';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SecretService } from 'src/app/services/secret.service';

const CHAPTERS = [
  {id: 1, title: 'Angular 1', content: 'Content Angular 1', courseId: 8},
  {id: 2, title: 'C# 1', content: 'Content C# 1', courseId: 9},
  {id: 3, title: 'Angular 2', content: 'Content Angular 2', courseId: 8},
  {id: 4, title: 'Angular 3', content: 'Content Angular 3', courseId: 8},
  {id: 5, title: 'Angular 4', content: 'Content Angular 4', courseId: 8},
  {id: 6, title: 'C# 2', content: 'Content C# 2', courseId: 9},
];


@Component({
  selector: 'app-course , chapters',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  chapters = CHAPTERS;
  selectedChapter = '';
  clickedCourse = localStorage.getItem('courseId');
  currentChapterList: IChapter = {
    id: null,
    title: null,
    content: null,
    courseId: null
  };

  constructor(private secretService: SecretService, private http: HttpClient) {
    for (const chapter of this.chapters){
      if (Number(this.clickedCourse) === chapter.courseId){
        this.currentChapterList = chapter;
        console.log(this.currentChapterList);
      }
    }
  }

  ngOnInit(): void {  }

  // tslint:disable-next-line: typedef

  // tslint:disable-next-line: typedef
  onclick(clickedid) {
    for (const chapter of this.chapters)
    {
      if (this.currentChapterList.id === clickedid && this.currentChapterList.courseId === Number(this.clickedCourse)) {
        this.selectedChapter = this.currentChapterList.content;
      }
    }
  }
}



