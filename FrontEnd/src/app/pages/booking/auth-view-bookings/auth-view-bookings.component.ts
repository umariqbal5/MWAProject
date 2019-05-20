import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth-view-bookings',
  templateUrl: './auth-view-bookings.component.html',
  styleUrls: ['./auth-view-bookings.component.scss']
})
export class AuthViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  bookingList: any = [];
  ngOnInit() {
    const userString = localStorage.getItem('user');
    const user: any = JSON.parse(userString);
    this.bookingService.getAllBookingsByUser(user.username).subscribe(data => {
      this.bookingList = data;
      console.log(this.bookingList);
    } );
  }

}
