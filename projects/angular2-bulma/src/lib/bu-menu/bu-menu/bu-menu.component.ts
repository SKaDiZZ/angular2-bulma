import { Component } from '@angular/core';

@Component({
  selector: 'bu-menu',
  template: `
  <aside class="menu">
  <ng-content></ng-content>
  </aside>`
})
export class BuMenuComponent {}
