import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTileComponent } from './bu-tile.component';

describe('BuTileComponent', () => {
  let component: BuTileComponent;
  let fixture: ComponentFixture<BuTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
