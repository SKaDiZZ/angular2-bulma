import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardImageComponent } from './bu-card-image.component';

describe('BuCardImageComponent', () => {
  let component: BuCardImageComponent;
  let fixture: ComponentFixture<BuCardImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
