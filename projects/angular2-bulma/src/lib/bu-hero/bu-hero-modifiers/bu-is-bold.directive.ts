import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-is-bold]'
})
export class BuIsBoldDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const hero = this._el.nativeElement.children[0];
    this._renderer.addClass(hero, 'is-bold');

  }

}
