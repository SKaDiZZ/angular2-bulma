# bu-hero - Hero

```typescript
import { BuHeroModule } from 'angular2-bulma';
```

##### description
The bu-hero component allows you to add a full width banner to your app, which can optionally cover the full height of the page as well.

##### inputs
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [medium | large | fullheight]

#### modifiers
- **bu-is-bold** - by adding the bu-is-bold modifier, you can generate a subtle gradient
- **bu-has-fixed-navbar** - If you are using a fixed **bu-navbar**, you can use this modifier on the **bu-hero** for it to occupy the viewport height minus the navbar height.

##### example
```html
<bu-hero color="primary" size="large" bu-is-bold>

  <bu-hero-head>
    <bu-container>
      This is hero header
    </bu-container>
  </bu-hero-head>

  <bu-hero-body>
    <bu-container>
      <h1 class="title">Bulma</h1>
      <h3 class="subtitle">I'm your hero</h3>
    </bu-container>
  </bu-hero-body>

  <bu-hero-foot>
    <bu-container>
      This is hero foot
    </bu-container>
  </bu-hero-foot>

</bu-hero>
```
