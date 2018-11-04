# bu-dropdown - Dropdown

```typescript
import { BuDropdownModule } from 'angular2-bulma';
```

##### description
An interactive dropdown menu component for discoverable content. It can contain **bu-dropdown-item** component if you want to add links or it can have **bu-dropdown-item-content** component for other types of content like in example bellow.

##### inputs
- **title** - string : dropdown title

##### example
```html
<bu-dropdown title="Some items">
  <bu-dropdown-item>
    Item 1
  </bu-dropdown-item>
  <bu-dropdown-item>
    Item 2
  </bu-dropdown-item>
  <bu-dropdown-item>
    Item 3
  </bu-dropdown-item>
  <bu-dropdown-item>
    Item 4
  </bu-dropdown-item>
  <bu-dropdown-item-content>
    Some other interesting content.
  </bu-dropdown-item-content>
</bu-dropdown>
```
