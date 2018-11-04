import { NgModule } from '@angular/core';
import { BuCardComponent } from './bu-card/bu-card.component';
import { BuCardHeaderComponent } from './bu-card-header/bu-card-header.component';
import { BuCardHeaderTitleComponent } from './bu-card-header-title/bu-card-header-title.component';
import { BuCardHeaderIconComponent } from './bu-card-header-icon/bu-card-header-icon.component';
import { BuCardImageComponent } from './bu-card-image/bu-card-image.component';
import { BuCardContentComponent } from './bu-card-content/bu-card-content.component';
import { BuCardFooterComponent } from './bu-card-footer/bu-card-footer.component';
import { BuCardFooterItemComponent } from './bu-card-footer-item/bu-card-footer-item.component';

@NgModule({
  imports: [],
  declarations: [
    BuCardComponent,
    BuCardHeaderComponent,
    BuCardHeaderTitleComponent,
    BuCardHeaderIconComponent,
    BuCardImageComponent,
    BuCardContentComponent,
    BuCardFooterComponent,
    BuCardFooterItemComponent
  ],
  exports: [
    BuCardComponent,
    BuCardHeaderComponent,
    BuCardHeaderTitleComponent,
    BuCardHeaderIconComponent,
    BuCardImageComponent,
    BuCardContentComponent,
    BuCardFooterComponent,
    BuCardFooterItemComponent
  ]
})
export class BuCardModule { }
