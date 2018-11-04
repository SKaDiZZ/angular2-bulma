import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuProgressComponent } from './bu-progress.component';

describe('BuProgressComponent', () => {
  let component: BuProgressComponent;
  let fixture: ComponentFixture<BuProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
