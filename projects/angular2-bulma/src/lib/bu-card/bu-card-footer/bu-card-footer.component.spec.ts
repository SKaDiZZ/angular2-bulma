import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardFooterComponent } from './bu-card-footer.component';

describe('BuCardFooterComponent', () => {
  let component: BuCardFooterComponent;
  let fixture: ComponentFixture<BuCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
