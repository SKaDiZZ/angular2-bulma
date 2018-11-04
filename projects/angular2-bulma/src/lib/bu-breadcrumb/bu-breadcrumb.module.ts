import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuBreadcrumbItemComponent } from './bu-breadcrumb-item/bu-breadcrumb-item.component';
import { BuBreadcrumbComponent } from './bu-breadcrumb/bu-breadcrumb.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuBreadcrumbItemComponent,
    BuBreadcrumbComponent
  ],
  exports: [
    BuBreadcrumbItemComponent,
    BuBreadcrumbComponent
  ]
})
export class BuBreadcrumbModule { }
