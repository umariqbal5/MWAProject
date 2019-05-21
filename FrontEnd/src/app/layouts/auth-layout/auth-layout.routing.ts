import {Routes} from '@angular/router';

import {LoginComponent} from '../../pages/login/login.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {BookingDetailsComponent} from '../../pages/booking/booking-details/booking-details.component';
import {AuthViewBookingsComponent} from '../../pages/booking/auth-view-bookings/auth-view-bookings.component';
import {BookAPackageComponent} from '../../pages/booking/book-a-package/book-a-package.component';
import {AuthGuard} from '../../gaurds/auth.guard';

export const AuthLayoutRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'booking-details', component: BookingDetailsComponent, canActivate: [AuthGuard]},
  {path: 'auth-view-bookings', component: AuthViewBookingsComponent, canActivate: [AuthGuard]},
  {path: 'book-a-package', component: BookAPackageComponent, canActivate: [AuthGuard]}
];
