import { Component, OnInit } from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationserviceService} from '../authenticationservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: any = {};
  user: User = new User();
  submitted = false;
  pass: string;
  error = '';
  private isUScustomer: boolean;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthenticationserviceService) { }

  ngOnInit() {
  }
  save() {
    // this.authService.createGame(this.user)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.user = new User();
  }

  onSubmit() {
    this.submitted = false;
    this.save();
  }

  register() {
    this.authService.getUser(this.user.username)
      .subscribe(x => {
        this.isUScustomer = x;
        console.log(this.isUScustomer); //Its undefined
        console.log(x); //it logs true.
      });
    setTimeout(() => {
        if (this.isUScustomer === false) {
          if (this.user.password === this.pass) {
            this.authService.createGame(this.user)
              .subscribe(data => console.log(data), error => console.log(error));
            this.user = new User();
            this.router.navigate(['/login']);
          } else {
            this.error = 'Passwords are not exist';
          }
        } else {
          this.error = 'UserName already exist';
        }
      },
      300);
    // this.users =  this.authService.getUser(this.user.username);
    // console.log(this.users)
  }

}
