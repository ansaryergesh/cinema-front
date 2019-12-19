import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AddMovieComponent } from './add-movie/add-movie.component';
import {FormsModule} from '@angular/forms';
import { BookMovieComponent } from './book-movie/book-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {HistoryComponent} from './history/history.component';
import { RegistrationComponent } from './registration/registration.component';
import {Auth} from './AUTH';
import { CinemaComponent } from './cinema/cinema.component';

const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full', canActivate: [Auth]},
  {path: 'movie', component: MovieComponent, canActivate: [Auth]},
  {path: 'add', component: AddMovieComponent, canActivate: [Auth]},
  {path: 'detail', component: MovieDetailComponent, canActivate: [Auth]},
  {path: 'login', component: LoginComponent},
    {path: 'history', component: HistoryComponent, canActivate: [Auth]},
  {path: 'register', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieComponent,
    PaymentComponent,
    HomeComponent,
    AddMovieComponent,
    BookMovieComponent,
    MovieDetailComponent,
    HistoryComponent,
    RegistrationComponent,
    CinemaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
