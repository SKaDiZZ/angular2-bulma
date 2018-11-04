import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMenuComponent } from './bu-menu.component';

describe('BuMenuComponent', () => {
  let component: BuMenuComponent;
  let fixture: ComponentFixture<BuMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
