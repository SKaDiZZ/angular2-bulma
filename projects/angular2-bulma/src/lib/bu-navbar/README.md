# bu-navbar - NavBar
```typescript
import { BuNavbarModule } from 'angular2-bulma';
```

##### description
A responsive horizontal navbar that can support images, links, buttons, and dropdowns.

##### inputs
- **color** - string : [ white, light, dark, black, text, primary, link, info, success, warning, danger, transparent ] same colors supported with addition of transparent
- **fixed** - string : [top | bottom] fix your navbar to top or bottom of page
- **wrap** - boolean [true | **false**] wrap items in container

##### example
```html
<bu-navbar color="transparent" bu-has-shadow bu-is-spaced wrap="true">

  <bu-navbar-brand>
    <a bu-navbar-item>
      <bu-image image="./assets/images/logo.svg"></bu-image>
    </a>
  </bu-navbar-brand>

  <bu-navbar-start>
    <bu-navbar-dropdown-item>
      <bu-icon icon="fa-book" color="primary"></bu-icon>
      Documentation
      <div dropdown-items>
        <a bu-navbar-item>
          Components
        </a>
        <hr bu-navbar-divider>
        <a bu-navbar-item>
          Examples
        </a>
      </div>
    </bu-navbar-dropdown-item>
    <a bu-navbar-item>
      <bu-icon icon="fa-rss" color="warning"></bu-icon>
      Blog
    </a>
  </bu-navbar-start>

  <bu-navbar-end>
    <a bu-button color="dark" href="http://github.com">
      <bu-icon package="fab" icon="fa-github" color="white"></bu-icon>
      GitHub
    </a>
  </bu-navbar-end>

</bu-navbar>
```
