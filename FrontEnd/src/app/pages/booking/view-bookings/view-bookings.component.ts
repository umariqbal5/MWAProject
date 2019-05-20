import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.scss']
})
export class ViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService) {
  }

  bookingList: any = {};

  ngOnInit() {
    // View all bookings
    this.bookingService.getAllBooking().subscribe(data => {
      console.log(data);
      this.bookingList = data;
    });
  }

}
