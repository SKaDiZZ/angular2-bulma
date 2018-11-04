import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarStartComponent } from './bu-navbar-start.component';

describe('BuNavbarStartComponent', () => {
  let component: BuNavbarStartComponent;
  let fixture: ComponentFixture<BuNavbarStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
