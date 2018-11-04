import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMediaLeftComponent } from './bu-media-left.component';

describe('BuMediaLeftComponent', () => {
  let component: BuMediaLeftComponent;
  let fixture: ComponentFixture<BuMediaLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMediaLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMediaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
