import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuHeroHeadComponent } from './bu-hero-head.component';

describe('BuHeroHeadComponent', () => {
  let component: BuHeroHeadComponent;
  let fixture: ComponentFixture<BuHeroHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuHeroHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuHeroHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
