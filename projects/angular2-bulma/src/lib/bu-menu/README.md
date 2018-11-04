# bu-menu - Menu

```typescript
import { BuMenuModule } from 'angular2-bulma';
```

##### description
A simple menu, for any type of vertical navigation

##### example
```html
<bu-menu>

  <bu-menu-label>
    Example Menu Label
  </bu-menu-label>

  <bu-menu-list>
    <bu-menu-list-item>
      Home
    </bu-menu-list-item>
    <bu-menu-list-item>
      Contact
    </bu-menu-list-item>
    <bu-menu-list-item>
      About Us
    </bu-menu-list-item>
  </bu-menu-list>

  <bu-menu-label>
    Example Menu Label 2
  </bu-menu-label>

  <bu-menu-list>
    <bu-menu-list-item>
      Home
      <bu-menu-list bu-is-submenu>
        <bu-menu-list-item>
          Nested item 1
        </bu-menu-list-item>
        <bu-menu-list-item>
          Nested item 2
        </bu-menu-list-item>
        <bu-menu-list-item>
          Nested item 3
        </bu-menu-list-item>
      </bu-menu-list>
    </bu-menu-list-item>
    <bu-menu-list-item>
      Contact
    </bu-menu-list-item>
    <bu-menu-list-item>
      About Us
    </bu-menu-list-item>
  </bu-menu-list>

</bu-menu>
```
