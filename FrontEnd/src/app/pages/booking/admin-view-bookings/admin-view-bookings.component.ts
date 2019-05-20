import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../services/booking.service';

@Component({
  selector: 'app-admin-view-bookings',
  templateUrl: './admin-view-bookings.component.html',
  styleUrls: ['./admin-view-bookings.component.scss']
})
export class AdminViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  bookingList: any = [];
  ngOnInit() {
    this.bookingService.getAllBookings().subscribe(data => this.bookingList = data );
  }

}
