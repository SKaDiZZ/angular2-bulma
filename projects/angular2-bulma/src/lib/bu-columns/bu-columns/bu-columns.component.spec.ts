import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuColumnsComponent } from './bu-columns.component';

describe('BuColumnsComponent', () => {
  let component: BuColumnsComponent;
  let fixture: ComponentFixture<BuColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
