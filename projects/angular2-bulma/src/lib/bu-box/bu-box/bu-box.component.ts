import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-box',
  template: `<ng-content></ng-content>`
})
export class BuBoxComponent {
  @HostBinding('class.box') isBox = true;
}
