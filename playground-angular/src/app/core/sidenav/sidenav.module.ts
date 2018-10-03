import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { SidenavPageComponent } from './containers/sidenav-page/sidenav-page.component';
import { SidenavNavigationComponent } from './containers/sidenav-navigation/sidenav-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],
  declarations: [SidenavPageComponent, SidenavNavigationComponent],
  exports: [SidenavPageComponent, SidenavNavigationComponent]
})
export class SidenavModule {}
