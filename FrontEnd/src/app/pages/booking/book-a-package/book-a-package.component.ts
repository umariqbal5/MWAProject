import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookingService} from '../../../services/booking.service';
import {PackageService} from '../../../services/package.service';
import {PackageModel} from '../../../models/package.model';

@Component({
  selector: 'app-book-a-package',
  templateUrl: './book-a-package.component.html',
  styleUrls: ['./book-a-package.component.scss']
})
export class BookAPackageComponent implements OnInit {

  packageInfo: PackageModel;
  packageName = '';
  bookingForm: FormGroup;
  submitted = false;
  arrayItems: FormArray;

  constructor(private bookingServices: BookingService, private formBuilder: FormBuilder,
              private packageService: PackageService, private route: ActivatedRoute, private router: Router) {

    this.bookingForm = this.formBuilder.group({
      departureDate: ['', Validators.required],
      duration: [0, Validators.required],
      no_adult: [0, Validators.required],
      no_child: 0,
      travelers: this.formBuilder.array([this.addTravallerFormGroup()]),
      createdAt: new Date()
    });
  }

  addTravallerFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      phone: ''
    });
  }

  ngOnInit() {
    this.arrayItems = <FormArray>this.bookingForm.get('travelers');
    this.route.params.subscribe(params => this.packageName = params['name']);
    this.packageService.getPackageByName(this.packageName).subscribe((data) => {
      this.packageInfo = data[0];
      console.log('pck ', this.packageInfo);
    });
  }

  addATraveller() {
    this.arrayItems.push(this.addTravallerFormGroup());
  }

  removeATraveller() {
    if (this.arrayItems.length !== 1) {
      this.arrayItems.removeAt(this.arrayItems.length - 1);
    }
  }

  buildBookingData(formValue, packageData, totalPrice): any {
    const data = Object.assign({package: packageData}, formValue, {totalPrice: totalPrice});
    return data;
  }

  public bookATrip() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.bookingForm.invalid) {
      return;
    }
    console.log('this.bookingForm.value: ', this.bookingForm.value);
    const data: any = this.bookingForm.value;
    console.log('duration ', data.duration);
    const totalPrice = data.duration * (data.no_adult + data.no_child) * this.packageInfo.price;
    const bookingData = this.buildBookingData(data, this.packageInfo, totalPrice);
    console.log('bookingData: ', bookingData);
    this.bookingServices.insertBooking(bookingData).subscribe((result) => {
      console.log('add booking result: ', result);
      this.router.navigate(['/auth-view-bookings']);
    });
  }

}
