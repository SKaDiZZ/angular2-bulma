import { Component } from '@angular/core';

@Component({
  selector: 'bu-menu-list-item',
  template: `
  <li>
  <a>
    <ng-content></ng-content>
  </a>
    <ng-content select="[bu-is-submenu]"></ng-content>
  </li>`
})
export class BuMenuListItemComponent {}
