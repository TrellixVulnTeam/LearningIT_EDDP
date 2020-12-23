import { FooterComponent } from './elements/footer/footer.component';
import { ExamsComponent } from './pages/exams/exams.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ArticleComponent,
    LeaderboardComponent,
    CourseComponent,
    LoginComponent,
    RegisterComponent,
    TeamComponent,
    UserRankComponent,
    HeaderRankComponent,
    UsersRankListComponent,
    ExamsComponent,

   ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
