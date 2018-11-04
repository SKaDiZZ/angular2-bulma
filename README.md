# Angular2-Bulma

Angular2-Bulma is providing Bulma CSS Framework components to Angular developers for fast and easy development.

# Content
- Installation and setup
  - [Install](#buinstall)
  - [Import Bulma CSS](#buimportbulma)
  - [Add Font Awesome Icons](#bufontawesome)
  - [Import Angular2BulmaModule](#buimportmodule)

- Components
    - [bu-columns](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-columns) : Columns
    - [bu-section](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-section) : Section
    - [bu-hero](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-hero) : Hero
    - [bu-container](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-container) : Container
    - [bu-conent](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-content) : Content
    - [bu-footer](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-footer) : Footer
    - [bu-box](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-box) : Box
    - [bu-button](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-button) : Button
    - [bu-delete](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-delete) : Delete
    - [bu-icon](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-icon) : Icon
    - [bu-image](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-image) : Image
    - [bu-notification](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-notification) : Notification
    - [bu-progress](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-progress) : Progress
    - [bu-tag](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-tag) : Tag
    - [bu-breadcrumb](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-breadcrumb) : Breadcrumb
    - [bu-card](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-card) : Card
    - [bu-dropdown](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-dropdown) : Dropdown
    - [bu-menu](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-menu) : Menu
    - [bu-message](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-message) : Message
    - [bu-navbar](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-navbar) : Navbar
    - [bu-tabs](https://github.com/SKaDiZZ/angular2-bulma/tree/master/projects/angular2-bulma/src/lib/bu-tabs) : Tabs

## <a name="buinstall"></a> Installation and setup

```bash
npm install bulma angular2-bulma --save
```

## <a name="buimportbulma"></a> Import Bulma CSS
In your main style.css file import Bulma CSS styles:

```css
@import '~bulma';
```

If you want to change values for some of bulma css variables define them before **@import**.

```css
$menu-item-color: #3573D6;
$menu-item-radius: 7px;

@import '~bulma';
```

## <a name="bufontawesome"></a> Font Awesome Icons
If you want to use icons add into your index.html file.
```html
<!-- Add fontawesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
```


## <a name="buimportmodule"></a> Import Angular2BulmaModule

Import Angular2BulmaModule in your app.module.ts file and add it into imports array.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Angular2BulmaModule } from 'angular2-bulma';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2BulmaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
This will import all of the Angular2-Bulma component modules. But you can also import any of the individual component modules. Maybe you need only Tabs for your application so you can import only BuTabsModule without any other.
