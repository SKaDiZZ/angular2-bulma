import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuImageComponent } from './bu-image/bu-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BuImageComponent],
  exports: [BuImageComponent]
})
export class BuImageModule { }
