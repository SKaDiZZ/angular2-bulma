import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuButtonComponent } from './bu-button.component';

describe('BuButtonComponent', () => {
  let component: BuButtonComponent;
  let fixture: ComponentFixture<BuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
