import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentShellComponent } from '../core/layout/containers/main-content-shell/main-content-shell.component';
import { KaroStatusComponent } from '../features/karo-status/containers/karo-status/karo-status.component';
import { NavRoutes } from './nav-routes.enum';

const routes: Routes = [
  {
    path: '',
    component: MainContentShellComponent,
    children: [{ path: NavRoutes.KaroStatus, component: KaroStatusComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
