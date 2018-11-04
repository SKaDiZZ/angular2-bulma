import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-tile',
  template: `<ng-content></ng-content>`
})
export class BuTileComponent implements OnInit {

  @Input() size: number;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const tile = this._el.nativeElement;

    this._renderer.addClass(tile, 'tile');

    if (this.size && this.size > 0 && this.size < 13) {
      this._renderer.addClass(tile, `is-${this.size}`);
    }

  }
}
