import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMediaRightComponent } from './bu-media-right.component';

describe('BuMediaRightComponent', () => {
  let component: BuMediaRightComponent;
  let fixture: ComponentFixture<BuMediaRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMediaRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMediaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
