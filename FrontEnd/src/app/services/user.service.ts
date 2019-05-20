import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< HEAD
  uri='http://localhost:4000/api';
=======
  uri='http://localhost:4000';
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.uri}/users`);
  }

  getUserById(id){
<<<<<<< HEAD
      return this.http.get(`${this.uri}/users/${id}`);
=======
      return this.http.get(`${this.uri}/users/${id}`); 
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
  }

  addUser(first_name,last_name,email,phone_number,username,password,state,city,zipcode){
    const user={
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
    return this.http.post(`${this.uri}/users/add`,user);
  }

  updateUser(id,first_name,last_name,email,phone_number,username,password,state,city,zipcode,role){
    const user={
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
    return this.http.post(`${this.uri}/users/update/${id}`,user);
  }

  deleteUser(id){
    return this.http.delete(`${this.uri}/users/delete/${id}`);
  }
}
