import { Component, OnInit } from '@angular/core';
import {Movie} from '../Movie';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  movie: Movie = new Movie();
  submitted = false;

  constructor( private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  newGame(): void {
    this.submitted = false;
    this.movie = new Movie();
  }


  save() {
    this.movieService.createMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/movie']);
  }


}
