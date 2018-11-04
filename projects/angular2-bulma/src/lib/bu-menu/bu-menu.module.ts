import { NgModule } from '@angular/core';
import { BuMenuComponent } from './bu-menu/bu-menu.component';
import { BuMenuLabelComponent } from './bu-menu-label/bu-menu-label.component';
import { BuMenuListComponent } from './bu-menu-list/bu-menu-list.component';
import { BuMenuListItemComponent } from './bu-menu-list-item/bu-menu-list-item.component';
import { BuIsSubmenuDirective } from './bu-menu-modifiers/bu-is-submenu.directive';

@NgModule({
  imports: [],
  declarations: [
    BuMenuComponent,
    BuMenuLabelComponent,
    BuMenuListComponent,
    BuMenuListItemComponent,
    BuIsSubmenuDirective
  ],
  exports: [
    BuMenuComponent,
    BuMenuLabelComponent,
    BuMenuListComponent,
    BuMenuListItemComponent,
    BuIsSubmenuDirective
  ]
})
export class BuMenuModule { }
