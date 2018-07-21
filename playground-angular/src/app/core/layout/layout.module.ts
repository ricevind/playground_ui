import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutManagerComponent } from "./components/layout-manager/layout-manager.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutManagerComponent],
  exports: [LayoutManagerComponent]
})
export class LayoutModule {}
