import { NgModule } from '@angular/core';
import { BuMediaComponent } from './bu-media/bu-media.component';
import { BuMediaLeftComponent } from './bu-media-left/bu-media-left.component';
import { BuMediaRightComponent } from './bu-media-right/bu-media-right.component';
import { BuMediaContentComponent } from './bu-media-content/bu-media-content.component';

@NgModule({
  imports: [],
  declarations: [
    BuMediaComponent,
    BuMediaLeftComponent,
    BuMediaRightComponent,
    BuMediaContentComponent
  ],
  exports: [
    BuMediaComponent,
    BuMediaLeftComponent,
    BuMediaRightComponent,
    BuMediaContentComponent
  ]
})
export class BuMediaModule { }
