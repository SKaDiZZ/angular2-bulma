import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardHeaderIconComponent } from './bu-card-header-icon.component';

describe('BuCardHeaderIconComponent', () => {
  let component: BuCardHeaderIconComponent;
  let fixture: ComponentFixture<BuCardHeaderIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardHeaderIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardHeaderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
