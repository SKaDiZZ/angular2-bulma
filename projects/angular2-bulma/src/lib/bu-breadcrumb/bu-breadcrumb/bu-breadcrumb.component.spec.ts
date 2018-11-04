import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuBreadcrumbComponent } from './bu-breadcrumb.component';

describe('BuBreadcrumbComponent', () => {
  let component: BuBreadcrumbComponent;
  let fixture: ComponentFixture<BuBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
