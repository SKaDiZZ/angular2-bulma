import { Component } from '@angular/core';

@Component({
  selector: 'bu-hero-body',
  template: `
  <div class="hero-body">
    <ng-content></ng-content>
  </div>`
})
export class BuHeroBodyComponent {}
