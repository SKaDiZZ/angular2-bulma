
# bu-tabs - Tabs
```typescript
import { BuTabsModule } from 'angular2-bulma';
```

##### description
Organize your content into beautiful tabs.

##### inputs

- **position** - string : [ centered | right ]
- **size** - string : [ small | medium | large ]
- **type** - string : [ boxed | toggle ] 
- **shape** - string : [ rounded ]
- **expand** - string : [ full ]

##### example
```html
<bu-tabs position="centered" type="boxed">

  <bu-tab title="Tab 1" icon="home">
    First tab content.
  </bu-tab>

  <bu-tab title="Tab 2">
    Second tab content.
  </bu-tab>

</bu-tabs>
```
