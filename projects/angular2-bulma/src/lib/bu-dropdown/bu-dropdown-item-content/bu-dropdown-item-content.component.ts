import { Component } from '@angular/core';

@Component({
  selector: 'bu-dropdown-item-content',
  template: `
  <div class="dropdown-item">
    <ng-content></ng-content>
  </div>`
})
export class BuDropdownItemContentComponent {}
