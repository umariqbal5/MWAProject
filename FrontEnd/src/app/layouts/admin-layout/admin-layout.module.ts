import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { ReactiveFormsModule}
import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
<<<<<<< HEAD
import {UserListComponent} from '../../pages/UserList/UserList.component';
import {CreateUserComponent} from '../../pages/CreateUser/CreateUser.component';
import { BookingsComponent } from 'src/app/pages/bookings/bookings.component';
import { PackageListComponent } from '../../pages/packageList/packageList.component';
=======
import {UserListComponent}from '../../pages/UserList/UserList.component';
import {CreateUserComponent} from '../../pages/CreateUser/CreateUser.component';
import { BookingsComponent } from 'src/app/pages/bookings/bookings.component';
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
=======
import {UserListComponent}from '../../pages/UserList/UserList.component';
import {CreateUserComponent} from '../../pages/CreateUser/CreateUser.component';
import { BookingsComponent } from 'src/app/pages/bookings/bookings.component';
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    // UserProfileComponent,
    TablesComponent,
    UserListComponent,
    CreateUserComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    BookingsComponent,
    PackageListComponent
=======
    BookingsComponent
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
=======
    BookingsComponent
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
  ]
})

export class AdminLayoutModule {}
