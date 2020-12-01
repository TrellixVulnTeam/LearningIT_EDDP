import { UserService } from './services/user.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ArticleComponent } from './pages/article/article.component';
import { CourseComponent } from './pages/course/course.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ArticleComponent,
    LeaderboardComponent,
    CourseComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    // RouterModule.forRoot(
    //   appRoutes
    // )

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
