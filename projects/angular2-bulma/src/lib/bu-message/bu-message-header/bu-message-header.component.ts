import { Component } from '@angular/core';

@Component({
  selector: 'bu-message-header',
  template: `
  <div class="message-header">
    <ng-content></ng-content>
  </div>`
})
export class BuMessageHeaderComponent {}
