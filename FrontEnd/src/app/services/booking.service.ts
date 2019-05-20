import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URI = 'http://localhost:4000/api/';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  // get all bookings for admin
  getAllBookings() {
    return this.http.get(URI+'bookings');
  }
  // get all bookings for a user
  getAllBookingsByUser(userID) {
    return this.http.get(URI+`bookings/${userID}`);
  }
  // get a booking details
  getBookingByBookingRef(pnr) {
    return this.http.get(URI+`${pnr}`);
  }
  // insert a new booking
  insertBooking(body) {
    return this.http.post(URI+`booking`, body);
  }
  // cancel a booking
  cancelBooking(pnr, body) {
    return this.http.patch(URI+`booking/${pnr}`, body);
  }
  // delete a booking
  deleteBooking(pnr, body) {
    return this.http.patch(URI+`booking/${pnr}`, body);
  }
}
