import { Component } from '@angular/core';

@Component({
  selector: 'li[bu-breadcrumb-item]',
  template: `<a><ng-content></ng-content></a>`
})
export class BuBreadcrumbItemComponent {}
