import { NgModule } from '@angular/core';
import { BuTileComponent } from './bu-tile/bu-tile.component';
import { BuIsChildDirective } from './bu-tile-modifiers/bu-is-child.directive';
import { BuIsParentDirective } from './bu-tile-modifiers/bu-is-parent.directive';
import { BuIsAncestorDirective } from './bu-tile-modifiers/bu-is-ancestor.directive';
import { BuIsVerticalDirective } from './bu-tile-modifiers/bu-is-vertical.directive';

@NgModule({
  imports: [],
  declarations: [
    BuTileComponent,
    BuIsChildDirective,
    BuIsParentDirective,
    BuIsAncestorDirective,
    BuIsVerticalDirective
  ],
  exports: [
    BuTileComponent,
    BuIsChildDirective,
    BuIsParentDirective,
    BuIsAncestorDirective,
    BuIsVerticalDirective
  ]
})
export class BuTileModule { }
