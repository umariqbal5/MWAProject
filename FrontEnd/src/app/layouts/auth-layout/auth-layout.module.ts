import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import { PackageDetailComponent } from '../../pages/packageDetail/packageDetail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserProfileComponent,
    PackageDetailComponent
  ]
})
export class AuthLayoutModule { }
