import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDropdownItemContentComponent } from './bu-dropdown-item-content.component';

describe('BuDropdownItemContentComponent', () => {
  let component: BuDropdownItemContentComponent;
  let fixture: ComponentFixture<BuDropdownItemContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDropdownItemContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDropdownItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
