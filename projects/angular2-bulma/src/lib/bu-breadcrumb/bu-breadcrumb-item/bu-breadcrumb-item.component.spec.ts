import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuBreadcrumbItemComponent } from './bu-breadcrumb-item.component';

describe('BuBreadcrumbItemComponent', () => {
  let component: BuBreadcrumbItemComponent;
  let fixture: ComponentFixture<BuBreadcrumbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuBreadcrumbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
