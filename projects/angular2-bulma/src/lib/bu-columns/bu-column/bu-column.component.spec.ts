import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuColumnComponent } from './bu-column.component';

describe('BuColumnComponent', () => {
  let component: BuColumnComponent;
  let fixture: ComponentFixture<BuColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
