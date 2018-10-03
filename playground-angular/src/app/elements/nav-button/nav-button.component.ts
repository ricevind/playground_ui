import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pg-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  @Input() routerLink: any[] | string = [];

  constructor() { }

  ngOnInit() {
  }

}
