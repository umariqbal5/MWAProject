import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'app-edit',
  templateUrl: './editPackage.component.html',
  styleUrls: ['./editPackage.component.css']
})
export class EditPackageComponent implements OnInit {

  id:String;
  pkg:any={};
  updateForm: FormGroup;
  selectedFile: File;
  fileChange = false;
  imagePath = '';

  constructor(private packageService: PackageService,
              private router:Router,
              private route:ActivatedRoute,
              private fb:FormBuilder ) {}


  ngOnInit() {
      this.toupdateForm();
      this.route.params.subscribe((params)=> {
          this.id=params.id;
          this.packageService.getPackageById(this.id).subscribe((res)=> {
            // console.dir(res[0]);
            this.pkg=res[0];
            this.updateForm.get('name').setValue(this.pkg.package.name);
            this.updateForm.get('type').setValue(this.pkg.package.package_type);
            this.updateForm.get('description').setValue(this.pkg.package.description);
            this.imagePath = this.pkg.package.image_url;
            this.updateForm.get('image_url').setValue(this.pkg.package.image_url);
            this.updateForm.get('destination').setValue(this.pkg.destination);
            this.updateForm.get('hotel').setValue(this.pkg.hotel);
            this.updateForm.get('price').setValue(this.pkg.price);
          });
      });
  }

  updatePackage(name, type, image_url, description,
                destination, hotel, price) {
      const x = destination.split(',');
      // console.log('**** ', name, ' ', type, ' ', image_url, ' ', description, ' ', x, ' ', hotel, ' ', price);
      this.packageService
      .updatePackageById(this.id, name, type, description,
        image_url, x, hotel, price)
      .subscribe(() => {
        this.router.navigate(['/packages']);
      });
  }

  toupdateForm() {
    this.updateForm=this.fb.group({
      name: [''],
      type: [''],
      description: [''],
      image_url: [''],
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
