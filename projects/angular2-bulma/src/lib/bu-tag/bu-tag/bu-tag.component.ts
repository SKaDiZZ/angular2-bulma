import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { BU_TAG_COLORS, BU_TAG_SIZES } from './bu-tag.attributes';

@Component({
  selector: 'bu-tag',
  template: `<ng-content></ng-content>`
})
export class BuTagComponent implements OnInit {

  @Input() color: string;
  @Input() size: string;
  @Input() shape: string;
  @Input() delete = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const tag = this._el.nativeElement;
    this._renderer.addClass(tag, 'tag');

    if (this.color) {
      if (BU_TAG_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(tag, `is-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_TAG_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(tag, `is-${this.size}`);
      }
    }

    if (this.shape === 'rounded') {
      this._renderer.addClass(tag, 'is-rounded');
    }

    if (this.delete) {
      this._renderer.addClass(tag, 'is-delete');
    }

  }

}
