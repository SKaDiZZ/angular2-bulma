import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMediaComponent } from './bu-media.component';

describe('BuMediaComponent', () => {
  let component: BuMediaComponent;
  let fixture: ComponentFixture<BuMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
