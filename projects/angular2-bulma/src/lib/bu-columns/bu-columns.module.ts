import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuColumnsComponent } from './bu-columns/bu-columns.component';
import { BuColumnComponent } from './bu-column/bu-column.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuColumnsComponent,
    BuColumnComponent
  ],
  exports: [
    BuColumnsComponent,
    BuColumnComponent
  ]
})
export class BuColumnsModule { }
