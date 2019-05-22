import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
//import { Observable } from "rxjs";
@Component({
  selector: 'app-register',
  templateUrl: './createUser.component.html',
  styleUrls: ['./createUser.component.scss']
})
export class CreateUserComponent implements OnInit {

  createForm:FormGroup;

  constructor(private userService:UserService, private router:Router, private fb:FormBuilder) {
    
   }

   addUser(first_name,last_name,email,phone_number,username,password,state,city,zipcode){
     this.userService.addUser(first_name,last_name,email,phone_number,username,password,state,city,zipcode).subscribe(()=>{
        this.router.navigate(['/userList']);
     });
   }

  ngOnInit() {
    this.tocreateForm();
    // this.createForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // )
    // this.userService.getUsers().subscribe((users)=>{
    //   console.log(users);
    // });
  }

  tocreateForm(){
    this.createForm=this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      phone_number: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      state: [''],
      city: [''],
      zipcode: ['']
    })
  }
  // debouncer: any;
  // exampleValidator(control: FormControl): Promise<any> | Observable<any> {
  //   clearTimeout(this.debouncer);
  //   const promise = new Promise<any>(
  //     (resolve, reject) => {
  //       this.debouncer = setTimeout(() => {
  //         if (control.value === 'hong') {
  //           resolve({ 'username in use': true });
  //         } else {
  //           resolve(null);
  //         }
  //       }, 3000);
  //     }
  //   );
  //   return promise;
  // }

}
