import {Component, Input, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {BookingModel} from '../../../models/booking.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute) {
  }

  booking: BookingModel;
  pnr: any;

  ngOnInit() {
    this.route.params.subscribe(params => this.pnr = params.pnr);
    // View a booking with pnr
    this.bookingService.getBookingByBookingRef(this.pnr).subscribe((resutl: any) => {
      this.booking = resutl.data;
    });
  }

}
