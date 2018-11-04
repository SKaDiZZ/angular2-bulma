import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLevelItemComponent } from './bu-level-item.component';

describe('BuLevelItemComponent', () => {
  let component: BuLevelItemComponent;
  let fixture: ComponentFixture<BuLevelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuLevelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuLevelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
