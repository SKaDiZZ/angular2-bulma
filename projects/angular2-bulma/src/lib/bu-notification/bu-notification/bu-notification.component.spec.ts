import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuNotificationComponent } from './bu-notification.component';

describe('BuNotificationComponent', () => {
  let component: BuNotificationComponent;
  let fixture: ComponentFixture<BuNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
