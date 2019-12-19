import { Component } from '@angular/core';
import {MoviesService} from './movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cinema';
  knopka = 'Log out';
  currentUser = localStorage.getItem('currentUser');
  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  loqout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
    // this.knopka = 'Login';
  }
}
