import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import { PackageDetailComponent } from '../../pages/packageDetail/packageDetail.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    {path: 'home',            component: HomeComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'package-detail',   component: PackageDetailComponent }

];
