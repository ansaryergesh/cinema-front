import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../Movie';
import {Booking} from '../Booking';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any = {};
  booking: Booking = new Booking();
  private submitted: boolean;
  cinema = localStorage.getItem('cinema');
  price = localStorage.getItem('price')
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.movieService.getMovie(localStorage.getItem('movieId')).subscribe((data: {}) => {
      this.movie = data;
    });
  }


  private reloadData() {
    this.movie = this.movieService.getMovie(localStorage.getItem('movieId'));
  }

  save() {
    this.booking.price = localStorage.getItem('price');
    this.booking.movieID = localStorage.getItem('movieId');
    this.booking.cinema = localStorage.getItem('cinema');
    this.booking.userID = localStorage.getItem('currentUser');
    this.movieService.createBooking(this.booking)
      .subscribe(data => console.log(data), error => console.log(error));
    this.booking = new Booking();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/detail']);
  }
}
