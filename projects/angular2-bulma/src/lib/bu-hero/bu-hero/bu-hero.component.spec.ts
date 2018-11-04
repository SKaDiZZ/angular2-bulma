import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuHeroComponent } from './bu-hero.component';

describe('BuHeroComponent', () => {
  let component: BuHeroComponent;
  let fixture: ComponentFixture<BuHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
