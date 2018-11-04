import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'bu-tag-list',
  template: `<ng-content></ng-content>`
})
export class BuTagListComponent implements OnInit {

  @Input() addons = false;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const tagList = this._el.nativeElement;
    this._renderer.addClass(tagList, 'tags');

    if (this.addons) {
      this._renderer.addClass(tagList, 'has-addons');
    }

  }

}
