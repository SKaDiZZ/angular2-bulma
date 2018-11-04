import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BU_CONTENT_SIZES } from './bu-content.attributes';

@Component({
  selector: 'bu-content',
  template: `
  <div class="content">
    <ng-content></ng-content>
  </div>`
})
export class BuContentComponent implements OnInit {

  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const content = this._el.nativeElement.children[0];

    if (this.size) {
      if (BU_CONTENT_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(content, `is-${this.size}`);
      }
    }

  }

}
