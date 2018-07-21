import { Component, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { SidenavService } from "../../services/sidenav.service";

@Component({
  selector: "pg-sidenav-page",
  templateUrl: "./sidenav-page.component.html",
  styleUrls: ["./sidenav-page.component.scss"]
})
export class SidenavPageComponent {
  @Output()
  backdropClick = new EventEmitter();
  
  isSidenavOpen$: Observable<boolean>;

  constructor(private sidenavService: SidenavService) {
    this.isSidenavOpen$ = sidenavService.isSidenavOpen;
  }


  onBackdropClick() {
    this.backdropClick.emit();
  }
}
