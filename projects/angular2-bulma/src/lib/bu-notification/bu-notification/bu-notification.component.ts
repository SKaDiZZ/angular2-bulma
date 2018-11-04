import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { BU_NOTIFICATION_COLORS } from './bu-notification.attributes';

@Component({
  selector: 'bu-notification',
  template: `
  <div class="notification">
    <ng-content></ng-content>
  </div>`
})
export class BuNotificationComponent implements OnInit {

  @Input() color: string;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const notification = this._el.nativeElement;

    if (this.color) {
      if (BU_NOTIFICATION_COLORS .some(attr => this.color === attr)) {
        this._renderer.addClass(notification.children[0], `is-${this.color}`);
      }
    }

  }

}
