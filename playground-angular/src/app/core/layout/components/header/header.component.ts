import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuIconClick = new EventEmitter<void>();

  onMenuIconClick() {
    this.menuIconClick.emit();
  }
}
