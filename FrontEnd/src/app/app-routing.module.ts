import { ExamComponent } from './pages/exam/exam.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { CourseComponent } from './pages/course/course.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChapterComponent } from './pages/chapter/chapter.component';
import { ArticlesComponent } from './pages/articles/articles.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'course', component: CourseComponent },
  { path: 'chapter', component: ChapterComponent},
  { path: 'exams', component: ExamComponent},
  { path: 'chapter/:id', component: ChapterComponent },
  { path: 'exams/:id', component: ExamComponent },
  { path: 'team', component: TeamComponent},
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
