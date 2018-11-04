import { NgModule } from '@angular/core';
import { BuTagComponent } from './bu-tag/bu-tag.component';
import { BuTagListComponent } from './bu-tag-list/bu-tag-list.component';

@NgModule({
  imports: [],
  declarations: [BuTagComponent, BuTagListComponent],
  exports: [BuTagComponent, BuTagListComponent]
})
export class BuTagModule { }
