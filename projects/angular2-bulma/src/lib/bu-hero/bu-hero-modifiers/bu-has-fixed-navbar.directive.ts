import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-has-fixed-navbar]'
})
export class BuHasFixedNavbarDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const hero = this._el.nativeElement.children[0];
    this._renderer.addClass(hero, 'is-fullheight-with-navbar');

  }

}
