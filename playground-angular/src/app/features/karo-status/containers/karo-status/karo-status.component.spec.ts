import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaroStatusComponent } from './karo-status.component';

describe('KaroStatusComponent', () => {
  let component: KaroStatusComponent;
  let fixture: ComponentFixture<KaroStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaroStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaroStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
