import { NgModule } from '@angular/core';
import { BuButtonComponent } from './bu-button/bu-button.component';
import { BuButtonListComponent } from './bu-button-list/bu-button-list.component';

@NgModule({
  imports: [],
  declarations: [
    BuButtonComponent,
    BuButtonListComponent
  ],
  exports: [
    BuButtonComponent,
    BuButtonListComponent
  ]
})
export class BuButtonModule { }
