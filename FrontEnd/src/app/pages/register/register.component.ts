import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }
  public error: string;
  user = {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: ''
  };

  register(form){
    console.log(form.value.userData)
    this.auth.register(form.value.userData).subscribe(result => {
      if(result == true){
        this.router.navigate(['login']);
      }else{
        this.error = "Signup Failed!";
      }
    },
      error => this.error = "Signup Failed!"
    )
  }

  ngOnInit() {
  }

}
