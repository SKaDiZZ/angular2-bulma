import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuBoxComponent } from './bu-box.component';

describe('BuBoxComponent', () => {
  let component: BuBoxComponent;
  let fixture: ComponentFixture<BuBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
