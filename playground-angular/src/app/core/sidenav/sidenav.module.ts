import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";

import { SidenavPageComponent } from "./containers/sidenav-page/sidenav-page.component";

@NgModule({
  imports: [CommonModule, RouterModule.forChild([]), MatSidenavModule],
  declarations: [SidenavPageComponent],
  exports: [SidenavPageComponent]
})
export class SidenavModule {}
