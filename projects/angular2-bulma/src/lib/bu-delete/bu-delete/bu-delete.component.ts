import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { BU_DELETE_SIZES } from './bu-delete.attributes';

@Component({
  selector: 'bu-delete',
  template: `<ng-content></ng-content>`
})
export class BuDeleteComponent implements OnInit {

  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const del = this._el.nativeElement;
    this._renderer.addClass(del, 'delete');

    if (this.size) {
      if (BU_DELETE_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(del, `is-${this.size}`);
      }
    }
  }

}
