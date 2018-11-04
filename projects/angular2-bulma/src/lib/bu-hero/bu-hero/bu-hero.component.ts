import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BU_HERO_COLORS, BU_HERO_SIZES } from './bu-hero.attributes';

@Component({
  selector: 'bu-hero',
  template: `
  <section class="hero">
    <ng-content></ng-content>
  </section>`
})
export class BuHeroComponent implements OnInit {

  @Input() color: string;
  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const hero = this._el.nativeElement.children[0];

    if (this.color) {
      if (BU_HERO_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(hero, `is-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_HERO_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(hero, `is-${this.size}`);
      }
    }

  }

}
