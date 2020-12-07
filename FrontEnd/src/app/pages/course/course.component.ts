import { Component } from '@angular/core';

const CHAPTERS = [
  {id: 1, title: 'Chapter 1', content: 'Content chapter 1'},
  {id: 2, title: 'Chapter 2', content: 'Content chapter 2'},
  {id: 3, title: 'Chapter 3', content: 'Content chapter 3'},
  {id: 4, title: 'Chapter 4', content: 'Content chapter 4'},
  {id: 5, title: 'Chapter 5', content: 'Content chapter 5'},
  {id: 6, title: 'Chapter 6', content: 'Content chapter 6'},
  {id: 7, title: 'Chapter 7', content: 'Content chapter 7'},
  {id: 8, title: 'Chapter 8', content: 'Content chapter 8'}
];


@Component({
  selector: 'app-course , chapters',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  chapters = CHAPTERS;
  selectedChapter = '';

  // tslint:disable-next-line: typedef
  onclick(clickedid) {
    for (const item of this.chapters)
    {
      // tslint:disable-next-line: triple-equals
      if (item.id == clickedid) {
        this.selectedChapter = item.content;
      }
    }

  }
}


