import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../Movie';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Observable<Movie[]>;
  currentUser = localStorage.getItem('currentUser');
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    if (!this.currentUser) {
      this.router.navigate(['login']);
    }
    this.reloadData();
  }


  private reloadData() {
    this.movies = this.movieService.getMovieList();
  }
  deleteMovie(id: string) {
    this.movieService.deleteMovie(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));

  }

  viewMore(id: string, price: string, cinema: string) {
    localStorage.setItem('movieId', id);
    localStorage.setItem('cinema', cinema);
    localStorage.setItem('price', price);
    this.router.navigate(['detail']);
  }



}
