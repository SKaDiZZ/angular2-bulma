import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-card-header-icon',
  template: `<ng-content></ng-content>`
})
export class BuCardHeaderIconComponent {
  @HostBinding('class.card-header-icon') isHeaderIcon = true;
}
