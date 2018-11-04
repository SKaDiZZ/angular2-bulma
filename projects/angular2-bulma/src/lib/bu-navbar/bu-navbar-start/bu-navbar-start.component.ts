import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-navbar-start',
  template: `<ng-content></ng-content>`
})
export class BuNavbarStartComponent {
  @HostBinding('class') classes = 'navbar-start';
}
