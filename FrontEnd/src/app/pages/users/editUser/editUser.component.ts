import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
@Component({
  selector: 'app-edit',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  id:String;
  user:any={};
  updateForm: FormGroup;
  

  constructor(private userService: UserService, private router:Router, private route:ActivatedRoute, private fb:FormBuilder ) {

   }



  ngOnInit() {
      // this.userService.getUsers().subscribe((users)=>{
      //   console.log(users);
      // })
      this.toupdateForm();
      this.route.params.subscribe((params)=>{
          this.id=params.id;
          this.userService.getUserById(this.id).subscribe((res)=>{
            this.user=res;
            this.updateForm.get('first_name').setValue(this.user.first_name);
            this.updateForm.get('last_name').setValue(this.user.last_name);
            this.updateForm.get('email').setValue(this.user.email);
            this.updateForm.get('phone_number').setValue(this.user.phone_number);
            this.updateForm.get('username').setValue(this.user.username);
            this.updateForm.get('password').setValue(this.user.password);
            this.updateForm.get('state').setValue(this.user.state);
            this.updateForm.get('city').setValue(this.user.city);
            this.updateForm.get('zipcode').setValue(this.user.zipcode);
            this.updateForm.get('role').setValue(this.user.role);
          })
      });
  }

  updateUser(first_name,last_name,email,phone_number,username,password,state,city,zipcode,role){
      this.userService.updateUser(this.id, first_name,last_name,email,phone_number,username,password,state,city,zipcode,role).subscribe(()=>{
        this.router.navigate(['/userList']);
      });
  }

  toupdateForm(){
    this.updateForm=this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone_number: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      state: [''],
      city: [''],
      zipcode: [''],
      role:['']
    })
  }
}
