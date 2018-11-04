import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[bu-navbar-divider]'
})
export class BuNavbarDividerDirective {
  @HostBinding('class') addclass = 'navbar-divider';
}
