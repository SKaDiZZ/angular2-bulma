import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarEndComponent } from './bu-navbar-end.component';

describe('BuNavbarEndComponent', () => {
  let component: BuNavbarEndComponent;
  let fixture: ComponentFixture<BuNavbarEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
