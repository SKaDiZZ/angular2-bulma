import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardComponent } from './bu-card.component';

describe('BuCardComponent', () => {
  let component: BuCardComponent;
  let fixture: ComponentFixture<BuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
