
# bu-columns - Columns
```typescript
import { BuColumnsModule } from 'angular2-bulma';
```
##### description
The power of Flexbox in a simple interface.

##### inputs

- **gap** - number : size of gap on all devices can be set to 0 for gapless
- **gapMobile** - number : size of gap on mobile devices
- **gapDesktop** - number : size of gap on desktop
- **gapWidescreen** - number : size of gap on widescreen
- **gapFullhd** - number : size of gap in fullhd
- **position** - string : [centered] : center your columns
- **multiline** - boolean : [true | **false**] - wrap columns in multiple lines
- **from** - string : [mobile | desktop | tablet | widescreen | fullhd]

##### example
```html
<bu-columns gap="1" from="mobile">

  <bu-column>
    <bu-notification color="link">
      Notification text....
    </bu-notification>
  </bu-column>

  <bu-column>
    <bu-notification color="success">
      Success notification text....
    </bu-notification>
  </bu-column>

</bu-columns>
```
All columns will have equal width unless you define differently.

# bu-column - Column

##### inputs

- **size** - number : width of column
- **sizeMobile** - number : width of column on mobile devices
- **sizeDesktop** - number : width of column on desktop
- **sizeWidescreen** - number : width of column gap on widescreen
- **sizeFullhd** - number : width of column gap in fullhd
- **offset** - number : horizontal column offset
- **narrow** - boolean : [true | **false**] - column is narrow

##### example
```html
<bu-columns>

  <bu-column size="4">
    <bu-notification color="link">
      Notification text....
    </bu-notification>
  </bu-column>

  <bu-column size="4" offset="2">
    <bu-notification color="success">
      Success notification text....
    </bu-notification>
  </bu-column>

  <bu-column size="2">
    <bu-notification color="success">
      Success notification text....
    </bu-notification>
  </bu-column>

</bu-columns>
```
