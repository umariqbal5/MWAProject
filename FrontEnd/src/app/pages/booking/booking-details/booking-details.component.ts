import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private bookingService: BookingService) { }
  @Input() pnr;
  booking: any;
  ngOnInit() {
    // View a booking with pnr
    this.bookingService.getBookingByBookingRef(this.pnr).subscribe(data => this.booking = data );
  }

}
