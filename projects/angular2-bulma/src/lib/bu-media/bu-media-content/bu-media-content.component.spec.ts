import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMediaContentComponent } from './bu-media-content.component';

describe('BuMediaContentComponent', () => {
  let component: BuMediaContentComponent;
  let fixture: ComponentFixture<BuMediaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMediaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMediaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
