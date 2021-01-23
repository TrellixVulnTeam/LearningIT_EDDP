import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  appUrl: string = environment.appUrl;
  articles: any;
  userList = [{}];

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.http.get<any>(this.appUrl + 'api/articles').subscribe((data) => {
      this.articles = data;
    });
  }

  lista(): void{
    // tslint:disable-next-line: prefer-const
    for (let item of this.articles){
      this.http.get<any>(this.appUrl + 'api/user/' + Number(item.userId)).subscribe((data) => {
        this.userList.push(data.firstName + ' ' + data.lastName);
      });
    }
    console.log(this.userList);
  }

  onclick(clickedid): void{
    localStorage.setItem('ArticleId', clickedid);
    return clickedid;
  }

  verificare(user): void{
    if (user === Number(localStorage.getItem('UserId'))){
      this.router.navigate(['/edit-article']);
    }
    else {
      this.toastr.error('Access denied!');
      // this.lista();
    }
  }
}
