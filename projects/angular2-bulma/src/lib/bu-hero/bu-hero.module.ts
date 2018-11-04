import { NgModule } from '@angular/core';
import { BuHeroComponent } from './bu-hero/bu-hero.component';
import { BuHeroBodyComponent } from './bu-hero-body/bu-hero-body.component';
import { BuIsBoldDirective } from './bu-hero-modifiers/bu-is-bold.directive';
import { BuHeroHeadComponent } from './bu-hero-head/bu-hero-head.component';
import { BuHeroFootComponent } from './bu-hero-foot/bu-hero-foot.component';
import { BuHasFixedNavbarDirective } from './bu-hero-modifiers/bu-has-fixed-navbar.directive';

@NgModule({
  imports: [],
  declarations: [
    BuHeroComponent,
    BuHeroBodyComponent,
    BuHeroHeadComponent,
    BuHeroFootComponent,
    BuIsBoldDirective,
    BuHasFixedNavbarDirective
  ],
  exports: [
    BuHeroComponent,
    BuHeroBodyComponent,
    BuHeroHeadComponent,
    BuHeroFootComponent,
    BuIsBoldDirective,
    BuHasFixedNavbarDirective
  ]
})
export class BuHeroModule { }
