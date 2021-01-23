import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  appUrl: string = environment.appUrl;
  articles: any;

  constructor(private http: HttpClient) {
    this.http.get<any>(this.appUrl + 'api/articles').subscribe((data) => {
      this.articles = data;
    });
   }

  ngOnInit(): void {  }

  onclick(clickedid): void{
    localStorage.setItem('ArticleId', clickedid);
    return clickedid;
  }

}
