import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuSectionComponent } from './bu-section.component';

describe('BuSectionComponent', () => {
  let component: BuSectionComponent;
  let fixture: ComponentFixture<BuSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
