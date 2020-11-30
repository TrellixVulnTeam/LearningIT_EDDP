import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

const COURSES = [
  {id: 1 , title: 'C#', description: 'DESCRIPTION C#' , img: '../../../img/107-script.png'},
  {id: 2 , title: 'Java', description: 'DESCRIPTION Java'},
  {id: 3 , title: 'C++', description: 'DESCRIPTION C++'},
  {id: 4 , title: 'C', description: 'DESCRIPTION C'},
  {id: 5 , title: 'Python', description: 'DESCRIPTION Python'},
  {id: 6 , title: 'ASP.NET', description: 'DESCRIPTION ASP.NET'},
  {id: 7 , title: 'Angular', description: 'DESCRIPTION Angular'},
  {id: 8 , title: 'Go', description: 'DESCRIPTION Go'},
  {id: 9 , title: 'Retele', description: 'DESCRIPTION Retele'}
];

@Component({
  selector: 'app-home , courses',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses = COURSES;

}
