# bu-level - Level
```typescript
import { BuLevelModule } from 'angular2-bulma';
```

##### description
In a **bu-level-item**, you can then insert almost anything you want: a title, a button, a text input, or just simple text. No matter what elements you put inside a Bulma level container, they will always be vertically centered.

##### modifiers
- **bu-is-mobile** - By default, for space concerns, the level is vertical on mobile. If you want the level to be horizontal on mobile as well, add the **bu-is-mobile** modifier on the level container component.

##### example
```html
<bu-level bu-is-mobile>
  <bu-level-item>
    <div class="has-text-centered">
      <p class="heading">First</p>
      <h1 class="title">Level item</h1>
    </div>
  </bu-level-item>
  <bu-level-item>
    <div class="has-text-centered">
      <p class="heading">Second</p>
      <h1 class="title">Level item</h1>
    </div>
  </bu-level-item>
  <bu-level-item>
    <div class="has-text-centered">
      <p class="heading">Third</p>
      <h1 class="title">Level item</h1>
    </div>
  </bu-level-item>
</bu-level>
```
You can use **bu-level-left** and **bu-level-right** components to align content left or right inside **bu-level** container component.

```html
<bu-level>

  <!-- Left side -->
  <bu-level-left>
    <bu-level-item>
      <p class="subtitle is-5">
        <strong>123</strong> posts
      </p>
    </bu-level-item>
    <bu-level-item>
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a post">
        </p>
        <p class="control">
          <button class="button">
            Search
          </button>
        </p>
      </div>
    </bu-level-item>
  </bu-level-left>

  <!-- Right side -->
  <bu-level-right>
    <bu-level-item>
      <a bu-button color="success">Add New</a>
    </bu-level-item>
    <bu-level-item>
      <a bu-button color="danger">Delete</a>
    </bu-level-item>
    <bu-level-item>
      <a bu-button color="link">Edit</a>
    </bu-level-item>
  </bu-level-right>

</bu-level>
```
