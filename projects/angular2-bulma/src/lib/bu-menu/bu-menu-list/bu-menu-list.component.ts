import { Component } from '@angular/core';

@Component({
  selector: 'bu-menu-list',
  template: `
  <ul class="menu-list">
    <ng-content></ng-content>
  </ul>`
})
export class BuMenuListComponent {}
