import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KaroStatusComponent } from './containers/karo-status/karo-status.component';
import { KaroStatusRoutes } from './karo-status.routing';

@NgModule({
  imports: [CommonModule, KaroStatusRoutes],
  declarations: [KaroStatusComponent]
})
export class KaroStatusModule {}
