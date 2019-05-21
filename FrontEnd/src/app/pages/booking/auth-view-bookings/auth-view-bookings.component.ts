import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute} from '@angular/router';
import {BookingModel} from '../../../models/booking.model';

@Component({
  selector: 'app-auth-view-bookings',
  templateUrl: './auth-view-bookings.component.html',
  styleUrls: ['./auth-view-bookings.component.scss'],
})
export class AuthViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute, private changeDetectorRefs: ChangeDetectorRef) {
  }

  bookingList: Array<BookingModel> = [];
  p = 1;

  ngOnInit() {
    this.refresh();
  }

  // Cancel booking
  cancelBooking(pnr) {
    this.bookingService.cancelBooking(pnr).subscribe(data => {
      console.log('cancelBooking: ', data);
      this.refresh();
    });
  }

  refresh() {
    // Get auth user
    this.bookingService.getAllBookingsByUser().subscribe((result: any) => {
      this.bookingList = result.data;
      console.log('getAllBookingsByUser: ', this.bookingList);
      this.changeDetectorRefs.detectChanges();
    });
  }
}
