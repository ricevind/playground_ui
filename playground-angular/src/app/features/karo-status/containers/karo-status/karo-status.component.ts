import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pg-karo-status',
  templateUrl: './karo-status.component.html',
  styleUrls: ['./karo-status.component.scss']
})
export class KaroStatusComponent implements OnInit {
  karo = new FormControl('karo');

  constructor() { }

  ngOnInit() {
  }

}
