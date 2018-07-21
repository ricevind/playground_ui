import { Component, Input } from "@angular/core";

@Component({
  selector: "pg-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent {
  @Input() isSidenavOpen = false;
}
