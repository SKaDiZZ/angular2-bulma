import { NgModule } from '@angular/core';
import { BuContainerComponent } from './bu-container/bu-container.component';
import { BuIsFluidDirective } from './bu-container-modifiers/bu-is-fluid.directive';
import { BuIsFullhdDirective } from './bu-container-modifiers/bu-is-fullhd.directive';
import { BuIsWidescreenDirective } from './bu-container-modifiers/bu-is-widescreen.directive';


@NgModule({
  imports: [],
  declarations: [
    BuContainerComponent,
    BuIsFluidDirective,
    BuIsFullhdDirective,
    BuIsWidescreenDirective
  ],
  exports: [
    BuContainerComponent,
    BuIsFluidDirective,
    BuIsFullhdDirective,
    BuIsWidescreenDirective
  ]
})
export class BuContainerModule { }
