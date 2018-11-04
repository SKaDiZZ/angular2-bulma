import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardHeaderComponent } from './bu-card-header.component';

describe('BuCardHeaderComponent', () => {
  let component: BuCardHeaderComponent;
  let fixture: ComponentFixture<BuCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
