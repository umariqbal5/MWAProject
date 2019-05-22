import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../../services/package.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './createPackage.component.html',
  styleUrls: ['./createPackage.component.scss']
})
export class CreatePackageComponent implements OnInit {

  createForm:FormGroup;

  constructor(private packageService:PackageService, private router:Router, private fb:FormBuilder) {}

   addPackage(name, type, image_url,
              description, destination,
              hotel, price) {
    const x = destination.split(',');
    // console.log('**** ', name, ' ', type, ' ', image_url, ' ', description, ' ', x, ' ', hotel, ' ', price);
     this.packageService
         .addPackage(name, type, image_url,
                     description, x, hotel, price)
         .subscribe(()=> {
        this.router.navigate(['/packages']);
     });
   }

  ngOnInit() {
    this.tocreateForm();
  }

  tocreateForm() {
    this.createForm=this.fb.group({
      name: [''],
      type: [''],
      description: [''],
      image_url: [''],
      destination: [''],
      hotel: [''],
      price: ['', Validators.required]
    });
  }
}
