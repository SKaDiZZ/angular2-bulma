import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-level-item',
  template: `<ng-content></ng-content>`
})
export class BuLevelItemComponent {
  @HostBinding('class') classes = 'level-item';
}
