import { Component } from '@angular/core';

@Component({
  selector: 'bu-container',
  template: `
  <div class="container">
    <ng-content></ng-content>
  </div>`
})
export class BuContainerComponent {}
