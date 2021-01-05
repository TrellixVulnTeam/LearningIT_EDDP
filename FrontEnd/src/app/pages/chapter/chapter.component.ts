import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ChapterDetails } from '../utils/ChapterDetails';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  public chapters: ChapterDetails[];
  public chapter: ChapterDetails;
  appUrl: string = environment.appUrl;
  curentId = localStorage.getItem('ChapterId');
  currentTitleCourse = localStorage.getItem('CurentTitleCourse');
  public position = 0;

  constructor(private http: HttpClient , private router: Router ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('From NgOnit' + this.curentId);

    this.http.get<ChapterDetails[]>(this.appUrl + 'api/chapters/title/' + this.currentTitleCourse).subscribe((data) => {
      this.chapters = data;
    });

    this.http.get<ChapterDetails>(this.appUrl + 'api/chapters/' + this.curentId).subscribe((data) => {
      this.chapter = data;
    });

  }

  switchId(): void{

    console.log(this.curentId);
    console.log(this.position);
    console.log(localStorage.getItem('ChapterId'));

    this.chapters.forEach((chapter, index) => {
      if (this.position === index) {
      localStorage.setItem('ChapterId', String(chapter.id));
      }
    });

    this.position++;

    console.log(this.curentId);
    console.log(this.position);
    console.log(localStorage.getItem('ChapterId'));
    this.curentId = localStorage.getItem('ChapterId');
    this.router.navigate(['/chapter/' + String(localStorage.getItem('ChapterId'))], {skipLocationChange : true});

  }

}
