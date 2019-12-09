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

const routes: Routes = [
  {path: 'movie', component: MovieComponent},
  {path: 'add', component: AddMovieComponent},
  {path: 'detail', component: MovieDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'history', component: HistoryComponent},
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
    HistoryComponent
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
