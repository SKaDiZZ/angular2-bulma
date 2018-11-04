import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bu-is-widescreen]'
})
export class BuIsWidescreenDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    const container = this._el.nativeElement.children[0];
    this._renderer.addClass(container, 'is-widescreen');
  }

}
