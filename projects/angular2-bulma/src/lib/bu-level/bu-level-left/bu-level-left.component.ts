import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-level-left',
  template: `<ng-content></ng-content>`
})
export class BuLevelLeftComponent {
  @HostBinding('class') classes = 'level-left';
}
