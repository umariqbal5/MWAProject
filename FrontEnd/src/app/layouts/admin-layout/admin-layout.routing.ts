import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {UserListComponent} from '../../pages/UserList/UserList.component';
import {CreateUserComponent} from '../../pages/CreateUser/CreateUser.component';
import {AuthGuard} from '../../gaurds/auth.guard';
import {BookingsComponent} from 'src/app/pages/bookings/bookings.component';
import {EditUserComponent} from '../../pages/users/editUser/editUser.component';
import {PackageListComponent} from '../../pages/packageList/packageList.component';
import {AdminViewBookingsComponent} from '../../pages/booking/admin-view-bookings/admin-view-bookings.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'editUser/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'tables', component: TablesComponent},
  {path: 'userList', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'createUser', component: CreateUserComponent, canActivate: [AuthGuard]},
  {path: 'bookings', component: BookingsComponent},
  {path: 'packages', component: PackageListComponent},
  {path: 'view-bookings', component: AdminViewBookingsComponent}

];
