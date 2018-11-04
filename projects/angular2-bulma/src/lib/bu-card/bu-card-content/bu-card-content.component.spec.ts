import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardContentComponent } from './bu-card-content.component';

describe('BuCardContentComponent', () => {
  let component: BuCardContentComponent;
  let fixture: ComponentFixture<BuCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
