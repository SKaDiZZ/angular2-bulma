import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BU_IMAGE_SIZES, BU_IMAGE_RATIOS } from './bu-image.attributes';

@Component({
  selector: 'bu-image',
  template: `
  <figure class="image">
    <img [class.is-rounded]="shape === 'rounded'" [src]="image">
  </figure>`
})
export class BuImageComponent implements OnInit {

  @Input() image: string;
  @Input() size: string;
  @Input() ratio: string;
  @Input() shape: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const figure = this._el.nativeElement.children[0];

    if (this.size) {
      for (const item of BU_IMAGE_SIZES) {
        if (item === this.size) {
          this._renderer.addClass(figure, `is-${item}`);
        }
      }
    }

    if (this.ratio) {
      for (const item of BU_IMAGE_RATIOS) {
        if (item === this.ratio) {
          this._renderer.addClass(figure, `is-${item}`);
        }
      }
    }

  }

}
