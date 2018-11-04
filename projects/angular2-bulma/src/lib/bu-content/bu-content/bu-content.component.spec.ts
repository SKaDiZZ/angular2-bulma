import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuContentComponent } from './bu-content.component';

describe('BuContentComponent', () => {
  let component: BuContentComponent;
  let fixture: ComponentFixture<BuContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
