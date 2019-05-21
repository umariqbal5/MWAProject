import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute} from '@angular/router';
import {BookingModel} from '../../../models/booking.model';

@Component({
  selector: 'app-admin-view-bookings',
  templateUrl: './admin-view-bookings.component.html',
  styleUrls: ['./admin-view-bookings.component.scss']
})
export class AdminViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute) {
  }

  bookingList: Array<BookingModel> = [];
  pnr: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.pnr = params.pnr);
    this.bookingService.getAllBookings().subscribe((resutl: any) => {
      this.bookingList = resutl.data;
      console.log('bookingList ', this.bookingList);
    });
  }

  cancelBooking() {
    this.bookingService.cancelBooking(this.pnr);
  }

  deleteBooking() {
    this.bookingService.deleteBooking(this.pnr);
  }
}
