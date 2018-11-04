import { Component } from '@angular/core';

@Component({
  selector: 'bu-hero-head',
  template: `
  <div class="hero-head">
    <ng-content></ng-content>
  </div>`
})
export class BuHeroHeadComponent {}
