import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../services/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})
export class ViewBookingComponent implements OnInit {

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    const result = this.bookingService.getAllBooking();
    console.log('viewbooking ', result);
  }

}
