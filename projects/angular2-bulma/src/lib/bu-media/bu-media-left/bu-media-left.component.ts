import { Component } from '@angular/core';

@Component({
  selector: 'bu-media-left',
  template: `
  <figure class="media-left">
    <ng-content></ng-content>
  </figure>`
})
export class BuMediaLeftComponent {}
