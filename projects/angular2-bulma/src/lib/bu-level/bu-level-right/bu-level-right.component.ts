import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-level-right',
  template: `<ng-content></ng-content>`
})
export class BuLevelRightComponent  {
  @HostBinding('class') classes = 'level-right';
}
