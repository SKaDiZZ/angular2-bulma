import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuHeroFootComponent } from './bu-hero-foot.component';

describe('BuHeroFootComponent', () => {
  let component: BuHeroFootComponent;
  let fixture: ComponentFixture<BuHeroFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuHeroFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuHeroFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
