import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public auth: AuthService, private router: Router) {}

  public user: string ="";
  public pass: string ="";
  public error: string;

  public submit() {
    this.auth.login(this.user, this.pass)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['home']),
        err => this.error = 'Could not authenticate'
      );
  }

  // login() {
  //   this.auth.login(this.user, this.pass).subscribe(data => {
  //     let json = JSON.stringify(data);
  //     localStorage.setItem(`access_token`,json);
  //
  //     if(data['success'] == 1){
  //       alert(`Welcome ${data['user'].name}`);
  //     }
  //   });
  // }



  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
