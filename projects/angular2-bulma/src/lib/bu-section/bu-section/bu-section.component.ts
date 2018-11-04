import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BU_SECTION_SIZES } from './bu-section.attributes';

@Component({
  selector: 'bu-section',
  template: `
  <section class="section">
    <ng-content></ng-content>
  </section>`
})
export class BuSectionComponent implements OnInit {

  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {}

    ngOnInit() {

      const section = this._el.nativeElement.children[0];

      if (this.size) {
        if (BU_SECTION_SIZES.some(attr => this.size === attr)) {
          this._renderer.addClass(section, `is-${this.size}`);
        }
      }

    }

}
