import { IExam } from './IExam';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretService } from 'src/app/services/secret.service';
import { environment } from 'src/environments/environment';

const TEST = [
  { id: 1, title: 'Comanda pentru a instala Angular CLI:',
    r1: 'npm install -g @angular/cli',
    r2: 'npm install bootstrap',
    r3: 'npm install jquery',
    r4: 'npm install httpclient',
    corect: 'npm install -g @angular/cli',
    chapterId: 3
  },
  { id: 2, title: 'Care este portul default de care asculta Angular?',
    r1: '2400',
    r2: '8080',
    r3: '4200',
    r4: '5000',
    corect: '4200',
    chapterId: 3
  },
  { id: 3,
    title: 'La generarea unei noi componente ce nu se creaza automat',
    r1: 'un fisier css',
    r2: 'un fisier javascript',
    r3: 'un fisier typescript',
    r4: 'un fisier html',
    corect: 'un fisier javascript',
    chapterId: 4
  },
  { id: 4,
    title: 'La generarea unei noi componente ce nu se creaza automat',
    r1: 'un fisier css',
    r2: 'un fisier javascript',
    r3: 'un fisier typescript',
    r4: 'un fisier html',
    corect: 'un fisier javascript',
    chapterId: 6
  },
];

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  test = TEST;
  exam: string;
  appUrl: string = environment.appUrl;
  currentChapter = localStorage.getItem('ChapterChapter');
  x = Number(localStorage.getItem('ChapterId'));

  aux: IExam[] = [];
  rasunsuriCorecte = 0;

  constructor(private secretService: SecretService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>(this.appUrl + 'api/exams/title/' + this.currentChapter).subscribe((data) => {
      this.exam = data;
    });
    // tslint:disable-next-line: prefer-const
    for (let item of this.test){
      if (item.chapterId === this.x) {
       this.aux.push(item);
      }
    }
  }

  next(): void{
    this.router.navigate(['/course']);
  }

  raspuns(r): void{
    // tslint:disable-next-line: prefer-const
    for (let item of this.aux)
    {
      if (item.corect === r) {
        this.rasunsuriCorecte++;
      }

    }
  }

  getRaspunsuri(): void{
    alert('Raspunsuri corecte: ' + this.rasunsuriCorecte);
    this.rasunsuriCorecte = 0;
    this.router.navigate(['/course']);
  }

}
