import { Routes, RouterModule } from '@angular/router';

import { KaroStatusComponent } from './containers/karo-status/karo-status.component';

const routes: Routes = [
  { path: '', component: KaroStatusComponent, pathMatch: 'full' },
];

export const KaroStatusRoutes = RouterModule.forChild(routes);
