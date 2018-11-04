import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-card-image',
  template: `<ng-content></ng-content>`
})
export class BuCardImageComponent  {
  @HostBinding('class.card-image') isCardImage = true;
}
