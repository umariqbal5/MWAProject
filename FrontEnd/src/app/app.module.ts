import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {BookingService} from './services/booking.service';

import {JwtModule} from '@auth0/angular-jwt';
import {AuthGuard} from './gaurds/auth.guard';
import {AuthService} from './services/auth.service';
import {ClientAuthGuard} from './gaurds/client-auth.guard';
// import { SearchPipe } from './search.pipe';
// import { SortPipe } from './pipes/sort.pipe';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"],
        blacklistedRoutes: ["localhost:4000/api/auth/login","localhost:4000/api/auth/register"]
      }
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
    // SearchPipe,
    // SortPipe,
    //UserListComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    BookingService,
    ClientAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
