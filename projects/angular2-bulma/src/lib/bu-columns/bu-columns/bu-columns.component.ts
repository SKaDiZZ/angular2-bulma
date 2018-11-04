import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-columns',
  template: `<ng-content></ng-content>`
})
export class BuColumnsComponent implements OnInit {

  @Input() gap: number;
  @Input() gapMobile: number;
  @Input() gapDesktop: number;
  @Input() gapWidescreen: number;
  @Input() gapFullhd: number;
  @Input() position: 'centered' | null = null;
  @Input() multiline = false;
  @Input() from: 'mobile' | 'desktop' | 'tablet' | 'widescreen' | 'fullhd' | null = null;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const columns = this._el.nativeElement;
    this._renderer.addClass(columns, 'columns');

    if (this.position) {
      this._renderer.addClass(columns, `is-${this.position}`);
    }

    if (this.gap || this.gapMobile || this.gapDesktop || this.gapWidescreen || this.gapFullhd) {
      this._renderer.addClass(columns, `is-variable`);
    }

    if (this.gap) {
      this._renderer.addClass(columns, `is-${this.gap}`);
    }

    if (this.gapMobile) {
      this._renderer.addClass(columns, `is-${this.gapMobile}-mobile`);
    }

    if (this.gapDesktop) {
      this._renderer.addClass(columns, `is-${this.gapDesktop}-desktop`);
    }

    if (this.gapWidescreen) {
      this._renderer.addClass(columns, `is-${this.gapWidescreen}-desktop`);
    }

    if (this.gapFullhd) {
      this._renderer.addClass(columns, `is-${this.gapFullhd}-desktop`);
    }

    if (this.multiline) {
      this._renderer.addClass(columns, `is-multiline`);
    }

    if (this.from) {
      this._renderer.addClass(columns, `is-${this.from}`);
    }

  }

}
