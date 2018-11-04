import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLevelRightComponent } from './bu-level-right.component';

describe('BuLevelRightComponent', () => {
  let component: BuLevelRightComponent;
  let fixture: ComponentFixture<BuLevelRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuLevelRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuLevelRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
