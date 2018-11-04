
# bu-image - Image

```typescript
import { BuImageModule } from 'angular2-bulma';
```

##### description
Because images can take a few seconds to load (or not at all), use the bu-image component to specify a precisely sized container so that your layout isn't broken because of image loading or image errors.

##### inputs
- **image** - string : image url
- **size** - string : [ 16x16 | 24x24 | 32x32 | 48x48 | 64x64 | 96x96 | 128x128 ]
- **ratio** - string : [ square | 1by1 | 5by4 | 4by3 | 3by2 | 5by3 | 16by9 | 2by1 | 3by1 | 4by5 |3by4 | 2by3 | 3by5 | 9by16 | 1by2 | 1by3 ]
- **shape** - string : [ rounded ] 

##### example
```html
  <!-- simple image -->
  <bu-image image="https://loremflickr.com/320/240?random=1"></bu-image>
  <!-- rounded avatar -->
  <bu-image image="https://loremflickr.com/320/320" size="48x48" shape="rounded"></bu-image>
```
