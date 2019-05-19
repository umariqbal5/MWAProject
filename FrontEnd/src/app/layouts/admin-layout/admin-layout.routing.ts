import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UserListComponent} from '../../pages/UserList/UserList.component';
import { CreateUserComponent} from '../../pages/CreateUser/CreateUser.component';
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'UserList',         component: UserListComponent },
    { path: 'CreateUser', component: CreateUserComponent}

];
