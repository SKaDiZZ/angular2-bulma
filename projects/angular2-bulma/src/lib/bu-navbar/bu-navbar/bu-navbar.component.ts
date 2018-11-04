import { Component, OnInit, AfterViewInit, Input, ElementRef, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { BU_NAVBAR_COLORS } from './bu-navbar.attributes';

@Component({
  selector: 'bu-navbar',
  template: `
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div [class.container]="wrap">

    <div class="navbar-brand">
    <ng-content select="bu-navbar-brand"></ng-content>

    <a role="button" class="navbar-burger" (click)="toggleNavBar()" [class.is-active]="isActive" aria-label="menu" aria-expanded="isActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

  </div>

  <div class="navbar-menu" [class.is-active]="isActive">
    <ng-content></ng-content>
  </div>

  </div>

  </nav>`
})
export class BuNavbarComponent implements OnInit, AfterViewInit {

  @Input() color: string;
  @Input() fixed: 'top' | 'bottom' | null = null;
  @Input() wrap: false;
  isActive = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document
  ) { }

  ngOnInit() {

    const buNavBar = this._el.nativeElement.children[0];

    if (this.color) {
      if (BU_NAVBAR_COLORS.some(attr => this.color === attr)) {
        this._renderer.addClass(buNavBar, `is-${this.color}`);
      }
    }
  }

  ngAfterViewInit() {
    if (this.fixed) {
      if (this.fixed === 'top') {
        this._renderer.addClass(this._document.body, `has-navbar-fixed-top`);
        this._renderer.addClass(this._el.nativeElement.children[0], `is-fixed-top`);
      }
      if (this.fixed === 'bottom') {
        this._renderer.addClass(this._document.body, `has-navbar-fixed-bottom`);
        this._renderer.addClass(this._el.nativeElement.children[0], `is-fixed-bottom`);
      }
    }
  }

  toggleNavBar() {
    this.isActive = !this.isActive;
  }

}
