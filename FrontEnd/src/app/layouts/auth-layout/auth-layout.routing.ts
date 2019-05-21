import {Routes} from '@angular/router';

import {LoginComponent} from '../../pages/login/login.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {BookingDetailsComponent} from '../../pages/booking/booking-details/booking-details.component';
import {AuthViewBookingsComponent} from '../../pages/booking/auth-view-bookings/auth-view-bookings.component';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {AuthGuard} from '../../gaurds/auth.guard';
import {ErrorComponent} from '../../pages/error/error.component';
import {ClientAuthGuard} from '../../gaurds/client-auth.guard';
import {BookAPackageComponent} from '../../pages/booking/bookAPackage/book-a-package.component';

export const AuthLayoutRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [ClientAuthGuard]},
  {path: 'booking-details', component: BookingDetailsComponent, canActivate: [ClientAuthGuard]},
  {path: 'auth-view-bookings', component: AuthViewBookingsComponent, canActivate: [ClientAuthGuard]},
  {path: 'error', component: ErrorComponent},
  {path: 'book-a-package', component: BookAPackageComponent, canActivate: [ClientAuthGuard]}
];
