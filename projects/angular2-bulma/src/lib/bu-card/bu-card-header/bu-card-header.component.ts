import { Component } from '@angular/core';

@Component({
  selector: 'bu-card-header',
  template: `
  <header class="card-header">
    <ng-content></ng-content>
  </header>`
})
export class BuCardHeaderComponent {}
