import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { SidenavModule } from '../sidenav/sidenav.module';

import { LayoutManagerComponent } from './components/layout-manager/layout-manager.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentShellComponent } from './containers/main-content-shell/main-content-shell.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, SidenavModule,RouterModule.forChild([]) ],
  declarations: [
    LayoutManagerComponent,
    HeaderComponent,
    MainContentShellComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
