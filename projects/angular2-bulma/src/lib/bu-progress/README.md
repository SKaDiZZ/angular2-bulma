# bu-progress - Progress

```typescript
import { BuProgressModule } from 'angular2-bulma';
```

##### description
Show progress with style.

##### inputs
- **value** - number : current progress
- **max** - number : max progress value 100 by default
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [small | medium | large]

##### example
```html
<bu-progress color="primary" size="large" value="15" max="100"></bu-progress>
```
