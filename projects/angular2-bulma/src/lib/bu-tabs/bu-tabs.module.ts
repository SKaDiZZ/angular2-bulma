import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuTabsComponent } from './bu-tabs/bu-tabs.component';
import { BuTabComponent } from './bu-tab/bu-tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuTabComponent,
    BuTabsComponent,
  ],
  exports: [
    BuTabComponent,
    BuTabsComponent
  ]
})
export class BuTabsModule { }
