import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.userService.getUsers().subscribe((users)=>{
        console.log(users);
      })
  }
}
