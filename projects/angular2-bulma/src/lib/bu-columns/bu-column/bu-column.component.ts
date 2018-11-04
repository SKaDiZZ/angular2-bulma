import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-column',
  template: `<ng-content></ng-content>`
})
export class BuColumnComponent implements OnInit {

  @Input() size: number;
  @Input() sizeMobile: number;
  @Input() sizeTablet: number;
  @Input() sizeDesktop: number;
  @Input() sizeWidescreen: number;
  @Input() sizeFullhd: number;
  @Input() offset: number;
  @Input() narrow = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const column = this._el.nativeElement;
    this._renderer.addClass(column, 'column');

    if (this.size) {
      this._renderer.addClass(column, `is-${this.size}`);
    }

    if (this.sizeMobile) {
      this._renderer.addClass(column, `is-${this.sizeMobile}-mobile`);
    }

    if (this.sizeTablet) {
      this._renderer.addClass(column, `is-${this.sizeTablet}-tablet`);
    }

    if (this.sizeDesktop) {
      this._renderer.addClass(column, `is-${this.sizeDesktop}-desktop`);
    }

    if (this.sizeWidescreen) {
      this._renderer.addClass(column, `is-${this.sizeWidescreen}-widescreen`);
    }

    if (this.sizeFullhd) {
      this._renderer.addClass(column, `is-${this.sizeFullhd}-fullhd`);
    }

    if (this.offset) {
      this._renderer.addClass(column, `is-offset-${this.offset}`);
    }

    if (this.narrow) {
      this._renderer.addClass(column, `is-narrow`);
    }

  }

}
