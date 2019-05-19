import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public apiService: AuthService) {}

  public user: string ="";
  public pass: string ="";
  login() {

    this.apiService.login(this.user, this.pass).subscribe(data => {
      let json = JSON.stringify(data);
      localStorage.setItem(`access_token`,json);
      debugger
      if(data['success'] == 1){
        alert(`Welcome ${data['user'].name}`);
      }
    });
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
