import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuNavbarComponent } from './bu-navbar/bu-navbar.component';
import { BuNavbarStartComponent } from './bu-navbar-start/bu-navbar-start.component';
import { BuNavbarEndComponent } from './bu-navbar-end/bu-navbar-end.component';
import { BuNavbarItemDirective } from './bu-navbar-item/bu-navbar-item.directive';
import { BuNavbarDropdownItemComponent } from './bu-navbar-dropdown-item/bu-navbar-dropdown-item.component';
import { BuHasShadowDirective } from './bu-navbar-modifiers/bu-has-shadow.directive';
import { BuIsSpacedDirective } from './bu-navbar-modifiers/bu-is-spaced.directive';
import { BuNavbarBrandComponent } from './bu-navbar-brand/bu-navbar-brand.component';
import { BuNavbarDividerDirective } from './bu-navbar-modifiers/bu-navbar-divider.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuNavbarComponent,
    BuNavbarStartComponent,
    BuNavbarEndComponent,
    BuNavbarItemDirective,
    BuNavbarDropdownItemComponent,
    BuHasShadowDirective,
    BuIsSpacedDirective,
    BuNavbarBrandComponent,
    BuNavbarDividerDirective
  ],
  exports: [
    BuNavbarComponent,
    BuNavbarStartComponent,
    BuNavbarEndComponent,
    BuNavbarItemDirective,
    BuNavbarDropdownItemComponent,
    BuHasShadowDirective,
    BuIsSpacedDirective,
    BuNavbarBrandComponent,
    BuNavbarDividerDirective
  ]
})
export class BuNavbarModule { }
