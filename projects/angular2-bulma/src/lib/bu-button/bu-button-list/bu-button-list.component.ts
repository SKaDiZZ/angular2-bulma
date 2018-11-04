import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-button-list',
  template: `<ng-content></ng-content>`
})
export class BuButtonListComponent implements OnInit {

  @Input() position: string;
  @Input() addons = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const buttonList = this._el.nativeElement;
    this._renderer.addClass(buttonList, 'buttons');

    if (this.position) {
      this._renderer.addClass(buttonList, `is-${this.position}`);
    }

    if (this.addons) {
      this._renderer.addClass(buttonList, `has-addons`);
    }

  }

}
