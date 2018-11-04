import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNavbarComponent } from './bu-navbar.component';

describe('BuNavbarComponent', () => {
  let component: BuNavbarComponent;
  let fixture: ComponentFixture<BuNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
