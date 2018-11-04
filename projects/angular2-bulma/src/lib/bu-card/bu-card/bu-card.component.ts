import { Component } from '@angular/core';

@Component({
  selector: 'bu-card',
  template: `
  <div class="card">
    <ng-content></ng-content>
  </div>`
})
export class BuCardComponent {}
