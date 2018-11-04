import { Component } from '@angular/core';

@Component({
  selector: 'bu-message-body',
  template: `
  <div class="message-body">
    <ng-content></ng-content>
  </div>`
})
export class BuMessageBodyComponent {}
