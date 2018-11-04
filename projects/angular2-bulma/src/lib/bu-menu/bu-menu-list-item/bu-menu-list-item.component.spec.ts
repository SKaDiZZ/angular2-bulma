import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMenuListItemComponent } from './bu-menu-list-item.component';

describe('BuMenuListItemComponent', () => {
  let component: BuMenuListItemComponent;
  let fixture: ComponentFixture<BuMenuListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMenuListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMenuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
