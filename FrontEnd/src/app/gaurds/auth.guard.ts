import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements  CanActivate{
  constructor(private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      const user = localStorage.getItem('user');

     if(user && JSON.parse(user).role && JSON.parse(user).role=="Admin"){
       return true;
     }

      this.router.navigate(['error']);
      return false;
    }

    this.router.navigate(['login']);
    return false;
  }
}
