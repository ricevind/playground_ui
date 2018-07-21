import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSidenavModule } from "@angular/material/sidenav";

import { LayoutManagerComponent } from "./containers/layout-manager/layout-manager.component";
import { SidenavContentComponent } from "./components/sidenav-content/sidenav-content.component";
import { SidenavContainerComponent } from "./components/sidenav-container/sidenav-container.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [
    LayoutManagerComponent,
    SidenavContainerComponent,
    SidenavContentComponent,
    SidenavComponent
  ],
  exports: [
    LayoutManagerComponent,
    SidenavContainerComponent,
    SidenavContentComponent,
    SidenavComponent
  ]
})
export class LayoutModule {}
