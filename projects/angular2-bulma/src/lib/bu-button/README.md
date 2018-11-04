#  bu-button - Button

```typescript
import { BuButtonModule } from 'angular2-bulma';
```

##### description
The button is an essential element of any design. It's meant to look and behave as an interactive element of your page.

##### inputs
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [ small, medium, large ]
- **state** - string : [ hovered, focused, active, loading, static ]
- **disabled** - boolean : [ true | **false** ]
- **fill** - string : [ outlined ]
- **shape** - string : [ rounded ]
- **expand** - string : [ full ]

##### example
```html
<!-- anchor button -->
<a bu-button color="text" size="large" shape="rounded" href="http://bulma.io">
  Click
</a>
<!-- button -->
<button bu-button color="dark" size="large" shape="rounded" fill="outlined" expand="full">
  Click
</button>
```

# bu-button-list

##### description
You can create a list of buttons with the bu-button-list component container.

##### inputs
- **position** - string : [ centered | right ]
- **addons** - string : [ true | **false** ]

##### example
```html
  <bu-button-list position="centered" addons="true">
    <button bu-button color="dark">Button One</button>
    <button bu-button color="primary">Button Two</button>
    <button bu-button color="success">Button Three</button>
    <button bu-button color="link">Button Four</button>
  </bu-button-list>
  ```
