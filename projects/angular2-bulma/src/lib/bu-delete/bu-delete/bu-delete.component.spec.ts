import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuDeleteComponent } from './bu-delete.component';

describe('BuDeleteComponent', () => {
  let component: BuDeleteComponent;
  let fixture: ComponentFixture<BuDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
