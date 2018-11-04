import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuFooterComponent } from './bu-footer.component';

describe('BuFooterComponent', () => {
  let component: BuFooterComponent;
  let fixture: ComponentFixture<BuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
