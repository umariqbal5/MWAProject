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
  selectedFile: File;
  fileChange = false;
  imagePath = '';

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

     // if(this.fileChange) {
     //   const formData = new FormData();
     //   formData.append('image', this.selectedFile, name);
     //   console.dir('inside file is changed ');
     //   console.dir(formData.getAll('image'));
     //   this.packageService
     //     .addImage(formData)
     //     .subscribe(() => {
     //       console.log('image upload resolved');
     //     });
     // }
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
      image_file: [''],
      destination: [''],
      hotel: [''],
      price: ['', Validators.required]
    });
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    this.fileChange = true;
    this.imagePath= `assets/img/places/${event.target.files[0].name}`;
  }
}
