import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//import { ReactiveFormsModule}
import {ClipboardModule} from 'ngx-clipboard';
import{NgxPaginationModule} from 'ngx-pagination';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserListComponent} from '../../pages/users/userList/UserList.component';
import {CreateUserComponent} from '../../pages/users/createUser/CreateUser.component';
import {AdminViewBookingsComponent} from '../../pages/booking/admin-view-bookings/admin-view-bookings.component';
import {EditUserComponent} from '../../pages/users/editUser/editUser.component';
import {PackageListComponent} from '../../pages/packages/packageList/packageList.component';
import {CreatePackageComponent} from '../../pages/packages/createPackage/createPackage.component';
import {EditPackageComponent} from '../../pages/packages/editPackage/editPackage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule

  ],
  declarations: [
    DashboardComponent,
    EditUserComponent,
    TablesComponent,
    UserListComponent,
    CreateUserComponent,
    AdminViewBookingsComponent,
    PackageListComponent,
    CreatePackageComponent,
    EditPackageComponent
  ]
})

export class AdminLayoutModule {
}
