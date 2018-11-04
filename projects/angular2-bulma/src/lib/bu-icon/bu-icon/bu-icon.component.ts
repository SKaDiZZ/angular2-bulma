import { Component, OnInit, AfterViewInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { BU_ICON_COLORS, BU_ICON_SIZES } from './bu-icon.attributes';

@Component({
  selector: 'bu-icon',
  template: `<i></i>`
})
export class BuIconComponent implements OnInit, AfterViewInit {

  @Input() package = 'fas';
  @Input() icon = 'fa-home';
  @Input() color: string;
  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const iconContainer = this._el.nativeElement;
    const iconEl = iconContainer.children[0];

    this._renderer.addClass(iconContainer, 'icon');

    if (this.package) {
      this._renderer.addClass(iconEl, this.package);
    }

    if (this.icon) {
      this._renderer.addClass(iconEl, this.icon);
    }

    if (this.color) {
      if (BU_ICON_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(iconContainer, `has-text-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_ICON_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(iconContainer, `is-${this.size}`);
      }
    }

  }

  ngAfterViewInit() {

    const iconParent = this._el.nativeElement.parentNode;

    if (iconParent.nodeName === 'BU-BUTTON' || iconParent.nodeName === 'A' || iconParent.nodeName === 'BU-TAG') {
      this._renderer.setStyle(this._el.nativeElement, 'margin-right', '.1875em');
    }


  }

}
