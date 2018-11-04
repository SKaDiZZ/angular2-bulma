import { Component } from '@angular/core';

@Component({
  selector: 'bu-media',
  template: `
  <article class="media">
    <ng-content></ng-content>
  </article>`
})
export class BuMediaComponent {}
