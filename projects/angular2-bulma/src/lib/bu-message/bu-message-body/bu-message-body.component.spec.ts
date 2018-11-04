import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMessageBodyComponent } from './bu-message-body.component';

describe('BuMessageBodyComponent', () => {
  let component: BuMessageBodyComponent;
  let fixture: ComponentFixture<BuMessageBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMessageBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMessageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
