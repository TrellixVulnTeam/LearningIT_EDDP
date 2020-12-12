import { Component, OnInit } from '@angular/core';

const CHAPTERS = [
  {id: 1, title: 'Angular 1', content: 'Content Angular 1', CourseId: 8},
  {id: 8, title: 'C# 4', content: 'Content C# 4', CourseId: 9}
];


@Component({
  selector: 'app-course , chapters',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit{
  chapters = CHAPTERS;
  selectedChapter = '';
  public ok = false;
  clickedCourse = localStorage.getItem('CourseId');

  ngOnInit(): void {  }

  // tslint:disable-next-line: typedef
  deschidere(){

    console.log(this.chapters);

    for (const chapter of this.chapters){
      if (chapter.CourseId === Number(this.clickedCourse)) {

        console.log(chapter.CourseId);
        console.log(Number(this.clickedCourse));
        console.log(chapter.CourseId === Number(this.clickedCourse));
        console.log(chapter.CourseId);
        return true;
      }
      else {
        console.log(chapter.CourseId);
        console.log(Number(this.clickedCourse));
        console.log(chapter.CourseId === Number(this.clickedCourse));
        console.log(chapter.CourseId);
        return false;
      }
    }
  }

  // tslint:disable-next-line: typedef
  onclick(clickedid) {
    for (const chapter of this.chapters)
    {
      if (chapter.id === clickedid && chapter.CourseId === Number(this.clickedCourse)) {
        this.selectedChapter = chapter.content;
      }
    }
  }

}



