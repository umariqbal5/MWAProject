import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {AuthGuard} from '../../gaurds/auth.guard';
import {EditUserComponent} from '../../pages/users/editUser/editUser.component';
import {PackageListComponent} from '../../pages/packages/packageList/packageList.component';
import {AdminViewBookingsComponent} from '../../pages/booking/admin-view-bookings/admin-view-bookings.component';
import {CreateUserComponent} from '../../pages/users/createUser/CreateUser.component';
import {UserListComponent} from '../../pages/users/userList/UserList.component';
import {CreatePackageComponent} from '../../pages/packages/createPackage/createPackage.component';
import {EditPackageComponent} from '../../pages/packages/editPackage/editPackage.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'editUser/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  {path: 'tables', component: TablesComponent},
  {path: 'userList', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'createUser', component: CreateUserComponent, canActivate: [AuthGuard]},
  {path: 'admin-view-bookings', component: AdminViewBookingsComponent, canActivate: [AuthGuard]},
  {path: 'packages', component: PackageListComponent, canActivate: [AuthGuard]},
  {path: 'view-bookings', component: AdminViewBookingsComponent, canActivate: [AuthGuard]},
  {path: 'createPackage', component: CreatePackageComponent, canActivate: [AuthGuard]},
  {path: 'editPackage/:id', component: EditPackageComponent, canActivate: [AuthGuard]},

];
