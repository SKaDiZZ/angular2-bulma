# bu-message - Message

```typescript
import { BuMessageModule } from 'angular2-bulma';
```

##### description
Colored message blocks, to emphasize part of your page.

##### inputs
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [small | medium | large]

##### example
```html
<!-- message with header and body -->
<bu-message color="warning">

  <bu-message-header>
    Hello this is message
    <bu-delete></bu-delete>
  </bu-message-header>

  <bu-message-body>
    This is warning message ...
  </bu-message-body>

</bu-message>

<!-- message with body only -->
<bu-message color="success">

  <bu-message-body>
    This is success message ...
  </bu-message-body>

</bu-message>
```
