import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDropdownItemComponent } from './bu-dropdown-item.component';

describe('BuDropdownItemComponent', () => {
  let component: BuDropdownItemComponent;
  let fixture: ComponentFixture<BuDropdownItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDropdownItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
