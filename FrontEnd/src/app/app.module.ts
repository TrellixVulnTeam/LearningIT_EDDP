import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ArticleComponent } from './pages/article/article.component';
import { CourseComponent } from './pages/course/course.component';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './pages/team/team.component';
import { UserRankComponent } from './pages/leaderboard/user-rank/user-rank.component';
import { HeaderRankComponent } from './pages/leaderboard/header-rank/header-rank.component';
import { UsersRankListComponent } from './pages/leaderboard/users-rank-list/users-rank-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeComponent,
    ArticleComponent,
    LeaderboardComponent,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    UserRankComponent,
    HeaderRankComponent,
    UsersRankListComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
