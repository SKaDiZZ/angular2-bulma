# bu-icon - Icon

```typescript
import { BuIconModule } from 'angular2-bulma';
```

##### description
Simple icon container component by default it supports Font Awesome 5 icons but you can provide value for package to add support for other icon fonts. Don't forget to add icons in your project.

##### inputs
- **package** - string : icon package to use for example fas 
- **icon** - string : icon name
- **color** string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [small | medium | large]

##### example
```html
  <bu-icon icon="fa-home" size="large" color="primary"></bu-icon>
  <bu-icon icon="fa-exclamation-circle" size="medium" color="warning"></bu-icon>
  <bu-icon icon="fa-question-circle" size="small" color="info"></bu-icon>
```
