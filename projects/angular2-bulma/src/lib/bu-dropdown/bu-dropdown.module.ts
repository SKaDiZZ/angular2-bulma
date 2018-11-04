import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuDropdownComponent } from './bu-dropdown/bu-dropdown.component';
import { BuDropdownItemComponent } from './bu-dropdown-item/bu-dropdown-item.component';
import { BuDropdownItemContentComponent } from './bu-dropdown-item-content/bu-dropdown-item-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuDropdownComponent,
    BuDropdownItemComponent,
    BuDropdownItemContentComponent
  ],
  exports: [
    BuDropdownComponent,
    BuDropdownItemComponent,
    BuDropdownItemContentComponent
  ]
})
export class BuDropdownModule { }
