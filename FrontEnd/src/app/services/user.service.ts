import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import {PackageService} from './package.service';
import {PackageModel} from '../models/package.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  packages: PackageModel[];
  uri='http://localhost:4000';
  constructor(private http:HttpClient, private packageService:PackageService) { }

  getUsers() {
    return this.http.get(`${this.uri}/users/api/`);
  }

  getUserById(id) {
      return this.http.get(`${this.uri}/users/api/${id}`);
  }

  addUser(first_name,last_name,email,phone_number,username,password,state,city,zipcode) {
    const user= {
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone_number:phone_number,
      username:username,
      password:password,
      address:{
        state : state,
        city : city,
        zipcode : zipcode
      }
    };
    return this.http.post(`${this.uri}/users/api/add`,user);
  }

  updateUser(id,first_name,last_name,email,phone_number,username,password,state,city,zipcode,role) {
    const user= {
      first_name:first_name,
      last_name:last_name,
      email:email,
      phone_number:phone_number,
      username:username,
      password:password,
      address:{
        state : state,
        city : city,
        zipcode : zipcode
      },
      role:role
    };
    return this.http.post(`${this.uri}/users/api/update/${id}`,user);
  }

  deleteUser(id) {
    return this.http.delete(`${this.uri}/users/api/delete/${id}`);
  }

  getUsersCount() {
    const count = this.getUsers();
    count.subscribe( (data:User[]) => {
      this.users = data;
      console.log('users',this.users);
      return this.users.length;
    });
  }
  getPackageCount() {
    const count = this.packageService.getPackages().subscribe((data:PackageModel[]) => {
      this.packages=data;
      return this.packages.length;
    });
  }

}
