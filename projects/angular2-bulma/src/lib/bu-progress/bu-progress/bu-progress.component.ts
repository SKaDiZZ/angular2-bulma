import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { BU_PROGRESS_COLORS, BU_PROGRESS_SIZES } from './bu-progress.attributes';

@Component({
  selector: 'bu-progress',
  template: `
  <progress class="progress" [value]="value" [max]="max">
    <ng-content></ng-content>
  </progress>`
})
export class BuProgressComponent implements OnInit {

  @Input() value = 0;
  @Input() max = 100;
  @Input() color: string;
  @Input() size: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const progress = this._el.nativeElement.children[0];

    if (this.color) {
      if (BU_PROGRESS_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(progress, `is-${this.color}`);
      }
    }

    if (this.size) {
      if (BU_PROGRESS_SIZES.some(attr => this.size === attr)) {
        this._renderer.addClass(progress, `is-${this.size}`);
      }
    }

  }

}
