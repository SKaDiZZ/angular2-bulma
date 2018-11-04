import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-navbar-dropdown-item',
  template: `
  <a class="navbar-link" (click)="toggleDropdown()">
    <ng-content></ng-content>
  </a>
  <div class="navbar-dropdown">
    <ng-content select="[dropdown-items]"></ng-content>
  </div>
  `
})
export class BuNavbarDropdownItemComponent implements OnInit {

  @Input() showon = 'hover';
  isActive = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {}

  ngOnInit() {

    const navDropdown = this._el.nativeElement;
    this._renderer.addClass(navDropdown, 'navbar-item');
    this._renderer.addClass(navDropdown, 'has-dropdown');

    if (this.showon === 'hover') {
      this._renderer.addClass(navDropdown, 'is-hoverable');
    }

  }

  toggleDropdown() {
    if (this.showon === 'click') {

      const navDropdown = this._el.nativeElement;

      this.isActive = !this.isActive;

      if (this.isActive) {
        this._renderer.addClass(navDropdown, 'is-active');
      } else {
        this._renderer.removeClass(navDropdown, 'is-active');
      }
    }
  }

}
