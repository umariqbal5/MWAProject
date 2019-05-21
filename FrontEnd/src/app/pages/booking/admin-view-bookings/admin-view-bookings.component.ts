import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BookingService} from '../../../services/booking.service';
import {ActivatedRoute} from '@angular/router';
import {BookingModel} from '../../../models/booking.model';

@Component({
  selector: 'app-admin-view-bookings',
  templateUrl: './admin-view-bookings.component.html',
  styleUrls: ['./admin-view-bookings.component.scss'],
})
export class AdminViewBookingsComponent implements OnInit {

  constructor(private bookingService: BookingService, private route: ActivatedRoute, private changeDetectorRefs: ChangeDetectorRef) {
  }

  bookingList: Array<BookingModel> = [];
  p = 1;

  ngOnInit() {
    this.refresh();
  }

  cancelBooking(pnr) {
    this.bookingService.cancelBooking(pnr).subscribe(() => this.refresh());
  }

  deleteBooking(pnr) {
    this.bookingService.deleteBooking(pnr).subscribe(() => this.refresh());
  }

  refresh() {
    this.bookingService.getAllBookings().subscribe((resutl: any) => {
      this.bookingList = resutl.data;
      this.changeDetectorRefs.detectChanges();
      console.log('bookingList ', this.bookingList);
    });
  }
}
