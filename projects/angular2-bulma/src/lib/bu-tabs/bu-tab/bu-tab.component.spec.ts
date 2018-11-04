import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTabComponent } from './bu-tab.component';

describe('BuTabComponent', () => {
  let component: BuTabComponent;
  let fixture: ComponentFixture<BuTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
