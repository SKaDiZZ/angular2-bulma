import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-card-content',
  template: `
  <div class="card-content">
    <ng-content></ng-content>
  </div>`
})
export class BuCardContentComponent {}
