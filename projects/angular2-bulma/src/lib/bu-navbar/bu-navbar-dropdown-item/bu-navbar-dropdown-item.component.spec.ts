import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarDropdownItemComponent } from './bu-navbar-dropdown-item.component';

describe('BuNavbarDropdownItemComponent', () => {
  let component: BuNavbarDropdownItemComponent;
  let fixture: ComponentFixture<BuNavbarDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
