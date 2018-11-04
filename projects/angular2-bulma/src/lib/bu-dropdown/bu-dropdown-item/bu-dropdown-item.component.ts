import { Component } from '@angular/core';

@Component({
  selector: 'bu-dropdown-item',
  template: `
  <a class="dropdown-item">
    <ng-content></ng-content>
  </a>`
})
export class BuDropdownItemComponent {}
