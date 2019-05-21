import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {AuthGuard} from '../../gaurds/auth.guard';
import {EditUserComponent} from '../../pages/users/editUser/editUser.component';
import {PackageListComponent} from '../../pages/packageList/packageList.component';
import {AdminViewBookingsComponent} from '../../pages/booking/admin-view-bookings/admin-view-bookings.component';
import {CreateUserComponent} from '../../pages/users/createUser/CreateUser.component';
import {UserListComponent} from '../../pages/users/userList/UserList.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'editUser/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'tables', component: TablesComponent},
  {path: 'userList', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'createUser', component: CreateUserComponent, canActivate: [AuthGuard]},
  {path: 'packages', component: PackageListComponent},
  {path: 'admin-view-bookings', component: AdminViewBookingsComponent, canActivate: [AuthGuard]}

];
