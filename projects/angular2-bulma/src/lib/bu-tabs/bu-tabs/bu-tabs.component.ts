import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  ContentChildren,
  AfterContentInit,
  QueryList,
  AfterViewInit } from '@angular/core';
import { BuTab } from '../bu-tab.class';
import { BuTabComponent } from '../bu-tab/bu-tab.component';

@Component({
  selector: 'bu-tabs',
  template: `
    <div class="tabs">
    <ul>
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.is-active]="tab.active">
        <a>
          <span *ngIf="tab.icon" class="icon is-small">
            <i [class]="'fas ' + tab.icon" aria-hidden="true"></i>
          </span>
          <span *ngIf="tab.title">
            {{ tab.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
  <ng-content></ng-content>`
})
export class BuTabsComponent implements AfterContentInit, AfterViewInit {

  @ContentChildren(BuTabComponent) tabs: QueryList<BuTab>;
  @Input() position: 'centered' | 'right' | null = null;
  @Input() size: 'small' | 'medium' | 'large' | null = null;
  @Input() type: 'boxed' | 'toggle' | null = null;
  @Input() shape: 'rounded' | null = null;
  @Input() expand: 'full' | null = null;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngAfterViewInit() {

    const tabContainer = this._el.nativeElement.children[0];

    if (this.position) {
      this._renderer.addClass(tabContainer, `is-${this.position}`);
    }

    if (this.size) {
      this._renderer.addClass(tabContainer, `is-${this.size}`);
    }

    if (this.type) {
      this._renderer.addClass(tabContainer, `is-${this.type}`);
    }

    if (this.shape && this.type === 'toggle') {
      this._renderer.addClass(tabContainer, `is-toggle-${this.shape}`);
    }

    if (this.expand === 'full') {
      this._renderer.addClass(tabContainer, `is-fullwidth`);
    }

  }

  ngAfterContentInit() {

      // get all active tabs
    const activeTabs = this.tabs.filter((tab) => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }

  }

  selectTab(tab: BuTab) {
    // deactivate all tabs
    this.tabs.toArray().forEach(butab => butab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
