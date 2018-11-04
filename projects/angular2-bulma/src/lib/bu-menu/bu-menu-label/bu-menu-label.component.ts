import { Component } from '@angular/core';

@Component({
  selector: 'bu-menu-label',
  template: `
  <p class="menu-label">
    <ng-content></ng-content>
  </p>`
})
export class BuMenuLabelComponent {}
