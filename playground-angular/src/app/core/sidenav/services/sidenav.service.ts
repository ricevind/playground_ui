import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SidenavService {
  isSidenavOpen: Observable<boolean>;
  private isSidenavOpenSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isSidenavOpenSubject = new BehaviorSubject(false);
    this.isSidenavOpen = this.isSidenavOpenSubject.asObservable();

    setInterval(() => this.openSidebar(), 1000)
    setInterval(() => this.closeSidebar(), 10000)
  }

  openSidebar() {
    this.isSidenavOpenSubject.next(true);
  }

  closeSidebar() {
    this.isSidenavOpenSubject.next(false);
  }
}
