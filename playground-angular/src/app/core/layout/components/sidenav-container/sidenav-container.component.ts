import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pg-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent {
  @Output()
  backdropClick = new EventEmitter();

  onBackdropClick() {
    this.backdropClick.emit();
  }
}
