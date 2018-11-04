import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuButtonListComponent } from './bu-button-list.component';

describe('BuButtonListComponent', () => {
  let component: BuButtonListComponent;
  let fixture: ComponentFixture<BuButtonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuButtonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
