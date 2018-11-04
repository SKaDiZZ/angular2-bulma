import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-card-header-title',
  template: `<ng-content></ng-content>`
})
export class BuCardHeaderTitleComponent {
  @HostBinding('class.card-header-title') isHeaderTitle = true;
}
