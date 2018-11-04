import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuHeroBodyComponent } from './bu-hero-body.component';

describe('BuHeroBodyComponent', () => {
  let component: BuHeroBodyComponent;
  let fixture: ComponentFixture<BuHeroBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuHeroBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuHeroBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
