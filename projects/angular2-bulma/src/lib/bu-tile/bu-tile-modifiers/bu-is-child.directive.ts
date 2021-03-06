import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-tile-is-child]'
})
export class BuIsChildDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const tile = this._el.nativeElement;
    this._renderer.addClass(tile, 'is-child');

  }

}
