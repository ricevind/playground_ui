import { Component, OnInit } from '@angular/core';

import { NavRoutes } from 'app/routing/nav-routes.enum';

@Component({
  selector: 'pg-sidenav-navigation',
  templateUrl: './sidenav-navigation.component.html',
  styleUrls: ['./sidenav-navigation.component.scss']
})
export class SidenavNavigationComponent implements OnInit {
  navRoutes = NavRoutes;

  constructor() { }

  ngOnInit() {
  }

}
