import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-navbar-end',
  template: `<ng-content></ng-content>`
})
export class BuNavbarEndComponent {
  @HostBinding('class') classes = 'navbar-end';
}
