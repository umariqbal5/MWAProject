import {Component, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute} from '@angular/router';
import {BookingModel} from '../../../models/booking.model';

@Component({
  selector: 'app-auth-view-bookings',
  templateUrl: './auth-view-bookings.component.html',
  styleUrls: ['./auth-view-bookings.component.scss']
})
export class AuthViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute) {
  }

  bookingList: Array<BookingModel> = [];
  pnr: any;

  ngOnInit() {
    // Get auth user
    this.bookingService.getAllBookingsByUser().subscribe((result: any) => {
      this.bookingList = result.data;
      console.log('getAllBookingsByUser: ', this.bookingList);
    });

    // Create a booking
    // const newBooking = {
    //   'no_adult': 3,
    //   'no_child': 0,
    //   'startDate': 1565154000000,
    //   'endDate': 1565845200000,
    //   'totalPrice': 2222.2
    // };
    //
    // this.bookingService.insertBooking(newBooking).subscribe(result => {
    //   console.log('insertBooking: ', result);
    // });


    // Get auth user
    // this.bookingService.getBookingByBookingRef('etYXuy-AI').subscribe(data => {
    //   console.log('getBookingByBookingRef: ', data);
    // });

    // Cancel booking
    // this.bookingService.cancelBooking('etYXuy-AI').subscribe(data => {
    //   console.log('cancelBooking: ', data);
    // });

    // Delete booking
    // this.bookingService.deleteBooking('vJbEFPRYJ').subscribe(data => {
    //   console.log('deleteBooking: ', data);
    // });
  }

  // Cancel booking
  cancelBooking() {
    this.route.params.subscribe(params => this.pnr = params.pnr);
    this.bookingService.cancelBooking(this.pnr).subscribe(data => {
      console.log('cancelBooking: ', data);
    });
  }
}
