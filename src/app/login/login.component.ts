import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../Movie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  error = '';
  username = '';
  password = '';
  constructor( private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  newGame(): void {
    this.submitted = false;
  }


  save() {
    localStorage.setItem('currentUser', this.username);
    this.router.navigate(['movie']);
  }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.save();
    } else if (this.username === 'ansar' && this.password === 'ansar') {
      this.save();
    } else {
      this.error = 'error';
      this.submitted = false;
    }
  }



}
