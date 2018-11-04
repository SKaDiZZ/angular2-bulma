import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTagComponent } from './bu-tag.component';

describe('BuTagComponent', () => {
  let component: BuTagComponent;
  let fixture: ComponentFixture<BuTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
