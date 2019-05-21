import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  API_URL: string = "http://localhost:4000";

  login(user: string, pass: string): Observable<boolean> {
    return this.http.post<{token: string, user: string}>(`${this.API_URL}/api/auth/login` , {username: user, password: pass})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('user', JSON.stringify(result.user));
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  getUser(){
    const user = localStorage.getItem("user");
    const userJson = JSON.parse(user);
    return userJson.name;
  }
  getUserRole(){
    const user = localStorage.getItem("user");
    const userJson = JSON.parse(user);
    return userJson.role;
  }
  public get userRole(): string {
    const user = localStorage.getItem("user");
    const userJson = JSON.parse(user);
    return userJson.role;
  }

  register(userData): Observable<boolean> {
    const userObj={
      username: userData.username,
      password: userData.password,
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email
    }
    return this.http.post<{success: number, msg: string}>(`${this.API_URL}/api/auth/register` , {user: userObj})
      .pipe(
        map(result => {
          if(result.success == 1)
          return true;
          else{
            console.log(result.msg)
            return false;
          }
        })
      );
  }
}
