import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentShellComponent } from './main-content-shell.component';

describe('MainContentShellComponent', () => {
  let component: MainContentShellComponent;
  let fixture: ComponentFixture<MainContentShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainContentShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
