import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMessageHeaderComponent } from './bu-message-header.component';

describe('BuMessageHeaderComponent', () => {
  let component: BuMessageHeaderComponent;
  let fixture: ComponentFixture<BuMessageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMessageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMessageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
