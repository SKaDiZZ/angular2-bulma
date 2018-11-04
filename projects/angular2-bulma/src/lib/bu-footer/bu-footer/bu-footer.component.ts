import { Component } from '@angular/core';

@Component({
  selector: 'bu-footer',
  template: `
  <footer class="footer">
    <ng-content></ng-content>
  </footer>`
})
export class BuFooterComponent {}
