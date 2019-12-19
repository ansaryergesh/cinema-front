import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Movie} from '../Movie';
import {AuthenticationserviceService} from '../authenticationservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {username: ' '};
  submitted = false;
  userName = '';
  password = '';
  error: string;
  count: number;
  private isUScustomer: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationserviceService) { }

  ngOnInit() {
    // this.authService.getUserByUserNameAndPassword('user', 'user').subscribe((data: {}) => {
    //   this.user = data;
    //   console.log(this.user);
    // });
  }

  save() {
    localStorage.setItem('currentUser', this.userName);
    this.router.navigate(['/']);
  }
  onSubmit() {
    this.canActivate(this.userName, this.password);
    // console.log(this.userName, this.password)
    // if (this.canActivate(this.userName, this.password) === true) {
    //   this.save();
    // }
    // if (!this.canActivate(this.userName, this.password)) {
    //   this.error = 'UserName Or Password is not Correct';
    // } else {
    //   this.save();
    // }
  }

  canActivate(userName: string, password: string) {
    this.authService.getUserByUserNameAndPassword(userName, password)
      .subscribe(x => {
        this.isUScustomer = x;
        console.log(this.isUScustomer); //Its undefined
        console.log(x); //it logs true.
      });
    setTimeout(() => {
        if (this.isUScustomer === true) {
          localStorage.setItem('currentUser', this.userName);
          this.router.navigate(['/']);
        } else {
          this.error = 'UserName Or Password is not Correct';
        }
      },
      300);
    //
    // if (userName === 'ADMIN' && password === 'ADMIN') {
    //   return true;
    // } else if (userName === 'aza' && password === 'aza') {
    //   return true;
    // } else if (userName === 'erlan' && password === 'erlan') {
    //   return true;
    // }
    // not logged in so redirect to login page with the return url
  }

  redir() {
    this.router.navigate(['register']);
  }



}
