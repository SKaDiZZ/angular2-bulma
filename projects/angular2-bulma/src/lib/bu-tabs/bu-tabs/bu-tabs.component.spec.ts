import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTabsComponent } from './bu-tabs.component';

describe('BuTabsComponent', () => {
  let component: BuTabsComponent;
  let fixture: ComponentFixture<BuTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
