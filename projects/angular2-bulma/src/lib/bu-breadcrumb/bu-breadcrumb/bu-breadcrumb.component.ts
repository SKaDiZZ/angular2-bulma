import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { BuBreadcrumbItemComponent } from '../bu-breadcrumb-item/bu-breadcrumb-item.component';

@Component({
  selector: 'bu-breadcrumb',
  template: `
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <ng-content></ng-content>
    </ul>
  </nav>
  `,
})
export class BuBreadcrumbComponent implements OnInit, AfterContentInit {

  @ContentChildren(BuBreadcrumbItemComponent, { read: ElementRef }) items: QueryList<ElementRef>;

  @Input() size: 'small' | 'medium' | 'large' | null = null;
  @Input() position: 'centered' | 'right' | null = null;
  @Input() separator: 'arrow' | 'bullet' | 'dot' | 'succeeds' | null = null;


  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit() {

    const breadcrumb = this._el.nativeElement.children[0];

    if (this.size) {
      this._renderer.addClass(breadcrumb, `is-${this.size}`);
    }

    if (this.position) {
      this._renderer.addClass(breadcrumb, `is-${this.position}`);
    }

    if (this.separator) {
      this._renderer.addClass(breadcrumb, `has-${this.separator}-separator`);
    }

  }

  ngAfterContentInit() {

    const lastItem = this.items.last.nativeElement;
    this._renderer.addClass(lastItem, 'is-active');

  }

}
