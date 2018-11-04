import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTagListComponent } from './bu-tag-list.component';

describe('BuTagListComponent', () => {
  let component: BuTagListComponent;
  let fixture: ComponentFixture<BuTagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
