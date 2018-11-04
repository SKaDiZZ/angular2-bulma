# bu-tag

```typescript
import { BuTagModule } from 'angular2-bulma';
```

##### description
Small tag labels to insert anywhere.

##### inputs
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger ]
- **size** - string : [ small | medium | large ]
- **shape** - string : [ rounded ]
- **delete** - boolean : [ true | **false** ]

##### example
```html
<bu-tag>Love</bu-tag>
<bu-tag color="success" size="large" shape="rounded">Code</bu-tag>
<bu-tag color="danger" size="small" danger="true"></bu-tag>
```

# bu-tag-list

##### description
Organize your tags into nice lists.

##### inputs
- **addons** - boolean : [ true | **false** ]

##### example
```html
<bu-tag-list>
  <bu-tag>Love</bu-tag>
  <bu-tag>Family</bu-tag>
  <bu-tag>Friends</bu-tag>
  <bu-tag>Home</bu-tag>
</bu-tag-list>
```
