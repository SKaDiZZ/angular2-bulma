import { Component } from '@angular/core';

@Component({
  selector: 'bu-card-footer',
  template: `
  <footer class="card-footer">
    <ng-content></ng-content>
  </footer>`
})
export class BuCardFooterComponent {}
