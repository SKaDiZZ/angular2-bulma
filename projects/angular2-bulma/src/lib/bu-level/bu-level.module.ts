import { NgModule } from '@angular/core';
import { BuLevelComponent } from './bu-level/bu-level.component';
import { BuLevelItemComponent } from './bu-level-item/bu-level-item.component';
import { BuLevelLeftComponent } from './bu-level-left/bu-level-left.component';
import { BuLevelRightComponent } from './bu-level-right/bu-level-right.component';
import { BuIsMobileDirective } from './bu-level-modifiers/bu-is-mobile.directive';

@NgModule({
  imports: [],
  declarations: [
    BuLevelComponent,
    BuLevelItemComponent,
    BuLevelLeftComponent,
    BuLevelRightComponent,
    BuIsMobileDirective
  ],
  exports: [
    BuLevelComponent,
    BuLevelItemComponent,
    BuLevelLeftComponent,
    BuLevelRightComponent,
    BuIsMobileDirective
  ]
})
export class BuLevelModule { }
