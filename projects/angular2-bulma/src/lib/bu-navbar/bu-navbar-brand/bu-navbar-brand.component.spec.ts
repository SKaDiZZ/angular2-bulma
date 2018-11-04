import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarBrandComponent } from './bu-navbar-brand.component';

describe('BuNavbarBrandComponent', () => {
  let component: BuNavbarBrandComponent;
  let fixture: ComponentFixture<BuNavbarBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
