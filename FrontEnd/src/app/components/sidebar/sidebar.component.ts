import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/UserList', title: 'UserList',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/CreateUser', title: 'CreateUser', icon:'ni-single-02 text-yellow', class: '' },
<<<<<<< HEAD
    { path: '/bookings', title: 'Bookings', icon:'ni-single-02 text-yellow', class: '' },
    { path: '/packages', title: 'Packages', icon:'ni-single-02 text-yellow', class: '' }
=======
    { path: '/bookings', title: 'Bookings', icon:'ni-single-02 text-yellow', class: '' }
    
>>>>>>> 84f322c3eead7a1b4352247dd56ccbf59cd33fff
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
