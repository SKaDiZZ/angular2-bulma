import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[bu-navbar-item]',
})
export class BuNavbarItemDirective {
  @HostBinding('class') classes = 'navbar-item';
}
