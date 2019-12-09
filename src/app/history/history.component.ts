import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../Movie';
import {Booking} from '../Booking';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  bookings: Observable<Booking[]>;
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.reloadData();
  }


  private reloadData() {
    this.bookings = this.movieService.getBookingList();
  }
}
