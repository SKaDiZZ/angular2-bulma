import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMenuLabelComponent } from './bu-menu-label.component';

describe('BuMenuLabelComponent', () => {
  let component: BuMenuLabelComponent;
  let fixture: ComponentFixture<BuMenuLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMenuLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMenuLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
