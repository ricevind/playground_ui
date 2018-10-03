import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainContentShellComponent } from 'app/core/layout/containers/main-content-shell/main-content-shell.component';
import { NavRoutes } from './nav-routes.enum';

const routes: Routes = [
  {
    path: '',
    component: MainContentShellComponent,
    children: [
      {
        path: NavRoutes.KaroStatus,
        loadChildren:
          'app/features/karo-status/karo-status.module#KaroStatusModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
