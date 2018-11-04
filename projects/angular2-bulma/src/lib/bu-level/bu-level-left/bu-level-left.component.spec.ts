import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLevelLeftComponent } from './bu-level-left.component';

describe('BuLevelLeftComponent', () => {
  let component: BuLevelLeftComponent;
  let fixture: ComponentFixture<BuLevelLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuLevelLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuLevelLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
