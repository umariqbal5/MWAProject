import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user, pass) {
    return this.http.post(`http://localhost:4000/auth/login`, {username: user, password: pass});
  }
}
