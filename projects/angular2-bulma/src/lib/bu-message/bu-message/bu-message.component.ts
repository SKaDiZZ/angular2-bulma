import { Component, Input, OnInit, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { BU_MESSAGE_COLORS, BU_MESSAGE_SIZES } from './bu-message.attributes';

@Component({
  selector: 'bu-message',
  template: `
  <article class="message">
    <ng-content></ng-content>
  </article>`,
  styles: [`
    bu-message-header+bu-message-body .message-body {
      border-width: 0;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class BuMessageComponent implements OnInit {

  @Input() color: string;
  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const message = this._el.nativeElement.children[0];

    if (this.color) {
      if (BU_MESSAGE_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(message, `is-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_MESSAGE_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(message, `is-${this.size}`);
      }
    }

  }

}
