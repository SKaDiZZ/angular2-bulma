import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-card-footer-item',
  template: `<ng-content></ng-content>`
})
export class BuCardFooterItemComponent {
  @HostBinding('class.card-footer-item') isFooterItem = true;
}
