import { Component } from '@angular/core';

@Component({
  selector: 'bu-media-content',
  template: `
  <div class="media-content">
    <ng-content></ng-content>
  </div>`
})
export class BuMediaContentComponent {}
