# bu-delete - Delete

```typescript
import { BuDeleteModule } from 'angular2-bulma';
```

##### description
The bu-delete component is a stand-alone element that can be used in different contexts.

##### inputs
- **size** - string : [ small | medium | large ] - define component size

##### example
```html
<bu-delete size="small"></bu-delete>
```
Inside **bu-message** component
##### example
```html
<bu-message color="warning">

  <bu-message-header>
      Message title
  <bu-delete></bu-delete>
  </bu-message-header>

  <bu-message-body>
    This is message
  </bu-message-body>

</bu-message>
```
