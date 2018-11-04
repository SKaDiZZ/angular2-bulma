import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuIconComponent } from './bu-icon.component';

describe('BuIconComponent', () => {
  let component: BuIconComponent;
  let fixture: ComponentFixture<BuIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
