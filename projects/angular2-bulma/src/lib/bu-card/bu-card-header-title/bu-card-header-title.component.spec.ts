import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuCardHeaderTitleComponent } from './bu-card-header-title.component';

describe('BuCardHeaderTitleComponent', () => {
  let component: BuCardHeaderTitleComponent;
  let fixture: ComponentFixture<BuCardHeaderTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuCardHeaderTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuCardHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
