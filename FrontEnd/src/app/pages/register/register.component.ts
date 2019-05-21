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

  user = {
    username: '',
    email: '',
    password: '',
    name: ''
  };

  register(form){
    form.value
  }

  ngOnInit() {
  }

}
