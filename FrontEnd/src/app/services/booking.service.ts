import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'http://localhost:4000/booking';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }
  getAllBooking() {
    return this.http.get(URL);
  }
  getBookingByBookingRef(pnr) {
    return this.http.get(URL+`/${pnr}`);
  }
  insertBooking() {
  }
}
