import { Component, Input } from '@angular/core';

@Component({
  selector: 'bu-dropdown',
  templateUrl: './bu-dropdown.component.html'
})
export class BuDropdownComponent {

  isActive = false;
  @Input() title = 'Dropdown Menu';

  toggleDropdown() {
    this.isActive = !this.isActive;
  }

}
