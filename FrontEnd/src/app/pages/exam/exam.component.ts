import { ExamDetalis } from './../utils/ExamDetails';
import { Component, OnInit } from '@angular/core';
import { QuestionDetails } from '../utils/QuestionDetails';
import { SecretService } from 'src/app/services/secret.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  apare = false;
  public questions: QuestionDetails[];
  appUrl: string = environment.appUrl;
  public numarRaspunsuriCorecte = 0;
  public mapAnswers = new Map();

  constructor(private secretService: SecretService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<QuestionDetails[]>(this.appUrl + 'api/exams/questionsExam/' + localStorage.getItem('ExamId')).subscribe((data) => {
      this.questions = data;

      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.questions.length; i++) {
        this.mapAnswers.set(this.questions[i].id, 1);
      }

      console.log(this.mapAnswers);
    });

  }

  verificaRaspunsCorect(id, raspuns): void {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.questions.length; i++){
      if (this.questions[i].id === id) {
          if (this.questions[i].raspunsCorect === 1 ) {
            if (raspuns === 'A' ) {
              if (this.mapAnswers.get(this.questions[i].id) === 1) {
                this.mapAnswers.set(this.questions[i].id, 0);
                break;
              }
            }
            else {
              this.mapAnswers.set(this.questions[i].id, 1);
            }
          }
          else if ( this.questions[i].raspunsCorect === 2) {
            if (raspuns === 'B' ) {
              if (this.mapAnswers.get(this.questions[i].id) === 1) {
                this.mapAnswers.set(this.questions[i].id, 0);
                break;
              }
            }
            else {
              this.mapAnswers.set(this.questions[i].id, 1);
            }
          }
          else if ( this.questions[i].raspunsCorect === 3) {
            if ( raspuns === 'C' ) {
              if (this.mapAnswers.get(this.questions[i].id) === 1) {
                this.mapAnswers.set(this.questions[i].id, 0);
                break;
              }
            } else {
              this.mapAnswers.set(this.questions[i].id, 1);
            }
          }
          else if ( this.questions[i].raspunsCorect === 4) {
            if ( raspuns === 'D' ) {
              if (this.mapAnswers.get(this.questions[i].id) === 1) {
                this.mapAnswers.set(this.questions[i].id, 0);
                break;
              }
            } else {
              this.mapAnswers.set(this.questions[i].id, 1);
            }
          }
      }
    }

    console.log(this.mapAnswers);

  }

  verificaToateRaspunsurile(): any {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.questions.length; i++)
    {
      if (this.mapAnswers.get (this.questions[i].id) !== 0) {
        return 0;
      }
    }
    return 1;
  }

  verificaRezultat(): void {
    // tslint:disable-next-line:prefer-for-of
    if (this.verificaToateRaspunsurile() === 1) {
      console.log('Badge castigat');
      this.apare = true;
    }
    else {
      console.log('Catre Homeee');
      this.apare = false;
    }

  }


}
