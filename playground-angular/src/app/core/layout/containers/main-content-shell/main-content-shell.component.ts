import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidenavService } from 'src/app/core/sidenav/services';

@Component({
  selector: 'pg-main-content-shell',
  templateUrl: './main-content-shell.component.html',
  styleUrls: ['./main-content-shell.component.scss']
})
export class MainContentShellComponent implements OnInit, OnDestroy {
  menuIconClicked$ = new Subject();
  endSubscriptions$ = new Subject();

  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    this.menuIconClicked$
      .pipe(
        takeUntil(this.endSubscriptions$),
      )
      .subscribe(() => {
        this.sidenavService.toggleSidenav();
      });
  }

  ngOnDestroy() {
    this.endSubscriptions$.next();
    this.endSubscriptions$.complete();
  }
}
