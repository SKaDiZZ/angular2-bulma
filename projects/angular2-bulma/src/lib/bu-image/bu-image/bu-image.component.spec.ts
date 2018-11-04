import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuImageComponent } from './bu-image.component';

describe('BuImageComponent', () => {
  let component: BuImageComponent;
  let fixture: ComponentFixture<BuImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
