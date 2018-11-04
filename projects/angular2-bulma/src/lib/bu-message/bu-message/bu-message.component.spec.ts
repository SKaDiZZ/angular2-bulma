import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMessageComponent } from './bu-message.component';

describe('BuMessageComponent', () => {
  let component: BuMessageComponent;
  let fixture: ComponentFixture<BuMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
