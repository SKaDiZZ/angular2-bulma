import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarItemDirective } from './bu-navbar-item.directive';

describe('BuNavbarItemComponent', () => {
  let component: BuNavbarItemDirective;
  let fixture: ComponentFixture<BuNavbarItemDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarItemDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarItemDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
