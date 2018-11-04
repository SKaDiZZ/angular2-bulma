import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';


@Directive({
  selector: '[bu-is-spaced]'
})
export class BuIsSpacedDirective implements OnInit {

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {
    const buNavBar = this._el.nativeElement.children[0];
    this._renderer.addClass(buNavBar, 'is-spaced');
  }

}
