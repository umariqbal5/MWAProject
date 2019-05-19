import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {HomeComponent} from '../../pages/home/home.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    {path: 'home',            component: HomeComponent},
];
