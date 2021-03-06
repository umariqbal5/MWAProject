import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URI = 'http://localhost:4000/api/';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) {
  }

  // get all bookings for admin
  getAllBookings() {
    return this.http.get(URI + 'all-bookings');
  }

  // get all bookings for a user
  getAllBookingsByUser() {
    return this.http.get(URI + `user-bookings`);
  }

  // get a booking details
  getBookingByBookingRef(pnr) {
    return this.http.get(URI + `booking/${pnr}`);
  }

  // insert a new booking
  insertBooking(body) {
    return this.http.post(URI + `booking`, body);
  }

  // cancel a booking
  cancelBooking(pnr) {
    return this.http.get(URI + `booking/cancel/${pnr}`);
  }

  // delete a booking
  deleteBooking(pnr) {
    return this.http.get(URI + `booking/delete/${pnr}`);
  }

  // count all booking per day per week
  getTotalBookingPerDay() {
    return this.http.get(URI + 'count-bookings');
  }

  // Filter booking by departureDate or booking date (createdAt) for admin
  getBookingsFilteredByDate(start, end, type) {
    return this.http.get(URI + `filter/${start}/${end}/${type}`);
  }
}
