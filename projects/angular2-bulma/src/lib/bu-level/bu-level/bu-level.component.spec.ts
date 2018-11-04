import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuLevelComponent } from './bu-level.component';

describe('BuLevelComponent', () => {
  let component: BuLevelComponent;
  let fixture: ComponentFixture<BuLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
