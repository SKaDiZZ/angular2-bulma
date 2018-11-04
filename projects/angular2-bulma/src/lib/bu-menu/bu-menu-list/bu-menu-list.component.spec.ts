import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMenuListComponent } from './bu-menu-list.component';

describe('BuMenuListComponent', () => {
  let component: BuMenuListComponent;
  let fixture: ComponentFixture<BuMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
