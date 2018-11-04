import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardFooterItemComponent } from './bu-card-footer-item.component';

describe('BuCardFooterItemComponent', () => {
  let component: BuCardFooterItemComponent;
  let fixture: ComponentFixture<BuCardFooterItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardFooterItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardFooterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
