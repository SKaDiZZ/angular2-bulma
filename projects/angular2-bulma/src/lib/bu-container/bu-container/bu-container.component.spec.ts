import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuContainerComponent } from './bu-container.component';

describe('BuContainerComponent', () => {
  let component: BuContainerComponent;
  let fixture: ComponentFixture<BuContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
