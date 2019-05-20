import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import {Router} from '@angular/router';
=======
import {Router}from '@angular/router';
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
=======
import {Router}from '@angular/router';
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
import {UserService} from '../../services/user.service';
import {User} from '../../user.model';
@Component({
  selector: 'app-tables',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  displayedcolumns = ['first_name', 'last_name', 'email', 'phone_number', 'username', 'state', 'city','zipcode', 'role'];

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit() {
    //this.UserService.getUsers().subscribe((users)=>console.log(users));
    this.fetchUsers();
  }
  fetchUsers(){
    this.UserService.getUsers().subscribe((data:User[])=>{
      this.users=data;
      console.log('Data requested ...');
      console.log(this.users);
    });
  }

  editUser(id){
    this.router.navigate([`/update/${id}`]);
  }

  deleteUser(id){
    this.UserService.deleteUser(id).subscribe(()=>{
        this.fetchUsers();
    });
  }
}
