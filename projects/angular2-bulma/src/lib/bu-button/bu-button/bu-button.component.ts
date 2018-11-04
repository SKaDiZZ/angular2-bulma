import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { BU_BUTTON_COLORS, BU_BUTTON_SIZES, BU_BUTTON_STATES } from './bu-button.attributes';

@Component({
  selector: 'button[bu-button], a[bu-button]',
  template: `<ng-content></ng-content>`
})
export class BuButtonComponent implements OnInit {

  @Input() color: string;
  @Input() size: string;
  @Input() state: string;
  @Input() shape: 'rounded' | null = null;
  @Input() fill: 'outlined' | null = null;
  @Input() expand: 'full' | null = null;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const button = this._el.nativeElement;
    this._renderer.addClass(button, `button`);

    if (this.color) {
      if (BU_BUTTON_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(button, `is-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_BUTTON_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(button, `is-${this.size}`);
      }
    }

    if (this.state) {
      if (BU_BUTTON_STATES.some(attr => this.state === attr)) {
        this._renderer.addClass(button, `is-${this.state}`);
      }
    }

    if (this.shape === 'rounded') {
      this._renderer.addClass(button, `is-rounded`);
    }

    if (this.fill === 'outlined') {
      this._renderer.addClass(button, `is-outlined`);
    }

    if (this.expand === 'full') {
      this._renderer.addClass(button, `is-fullwidth`);
    }

  }

}
