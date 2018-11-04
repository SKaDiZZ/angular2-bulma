import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-is-submenu]'
})
export class BuIsSubmenuDirective implements AfterViewInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const menuList = this._el.nativeElement.children[0];
    this._renderer.removeClass(menuList, 'menu-list');
  }

}
