import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-is-mobile]'
})
export class BuIsMobileDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    const level = this._el.nativeElement.children[0];
    this._renderer.addClass(level, 'is-mobile');
  }

}
