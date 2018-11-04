# Angular2-Bulma

Angular2-Bulma is providing Bulma CSS Framework components to Angular developers for fast and easy development.

# Content
- Installation and setup
  - [Install](#buinstall)
  - [Import Bulma CSS](#buimportbulma)
  - [Add Font Awesome Icons](#bufontawesome)
  - [Import Angular2BulmaModule](#buimportmodule)

- Components
    - [bu-columns](#bucolumns) : Columns
    - [bu-section](#busection) : Section
    - [bu-hero](#buhero) : Hero
    - [bu-container](#bucontainer) : Container
    - [bu-conent](#bucontent) : Content
    - [bu-footer](#bufooter) : Footer
    - [bu-box](#bubox) : Box
    - [bu-button](#bubutton) : Button
    - [bu-delete](#budelete) : Delete
    - [bu-icon](#buicon) : Icon
    - [bu-image](#buimage) : Image
    - [bu-notification](#bunotification) : Notification
    - [bu-progress](#buprogress) : Progress
    - [bu-tag](#butag) : Tag
    - [bu-breadcrumb](#bubreadcrumb) : Breadcrumb
    - [bu-card](#bucard) : Card
    - [bu-dropdown](#budropdown) : Dropdown
    - [bu-menu](#bumenu) : Menu
    - [bu-message](#bumessage) : Message
    - [bu-navbar](#bunavbar) : Navbar
    - [bu-tabs](#butabs) : Tabs

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
