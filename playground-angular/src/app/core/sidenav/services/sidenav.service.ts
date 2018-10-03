import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isSidenavOpen$: Observable<boolean>;
  private isSidenavOpenSubject: BehaviorSubject<boolean>;

  constructor(router: Router) {
    this.isSidenavOpenSubject = new BehaviorSubject(false);
    this.isSidenavOpen$ = this.isSidenavOpenSubject.asObservable();
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.closeSidebar());
  }

  openSidebar() {
    this.isSidenavOpenSubject.next(true);
  }

  closeSidebar() {
    this.isSidenavOpenSubject.next(false);
  }

  toggleSidenav() {
    const toggleState = this.isSidenavOpenSubject.value;
    if (toggleState) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }
}
