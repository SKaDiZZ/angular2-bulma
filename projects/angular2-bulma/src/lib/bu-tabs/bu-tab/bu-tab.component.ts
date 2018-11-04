import { Component, Input } from '@angular/core';

@Component({
  selector: 'bu-tab',
  template: `
  <div [hidden]="!active" class="pane">
    <ng-content></ng-content>
  </div>`
})
export class BuTabComponent  {

  @Input() title: string;
  @Input() icon: string;
  @Input() active = false;

}
