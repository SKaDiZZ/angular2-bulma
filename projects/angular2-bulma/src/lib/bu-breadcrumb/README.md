# bu-breadcrumb - Breadcrumb

```typescript
import { BuBreadcrumbModule } from 'angular2-bulma';
```

##### description
A simple breadcrumb component to improve your navigation experience.

##### inputs
- **size** - string : [ small | medium | large ]
- **position** - string : [ centered | right ]
- **separator** - string : [arrow | bullet | dot | succeeds ]

##### example
```html
   <bu-breadcrumb size="large" separator="arrow" position="centered">
      <li bu-breadcrumb-item>
        Bulma
      </li>
      <li bu-breadcrumb-item>
        Components
      </li>
      <li bu-breadcrumb-item>
        Navbar
      </li>
    </bu-breadcrumb>
  ```
