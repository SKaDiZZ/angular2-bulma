import { NgModule } from '@angular/core';
import { BuMessageComponent } from './bu-message/bu-message.component';
import { BuMessageHeaderComponent } from './bu-message-header/bu-message-header.component';
import { BuMessageBodyComponent } from './bu-message-body/bu-message-body.component';

@NgModule({
  imports: [],
  declarations: [
    BuMessageComponent,
    BuMessageHeaderComponent,
    BuMessageBodyComponent
  ],
  exports: [
    BuMessageComponent,
    BuMessageHeaderComponent,
    BuMessageBodyComponent
  ]
})
export class BuMessageModule { }
