import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDropdownComponent } from './bu-dropdown.component';

describe('BuDropdownComponent', () => {
  let component: BuDropdownComponent;
  let fixture: ComponentFixture<BuDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
