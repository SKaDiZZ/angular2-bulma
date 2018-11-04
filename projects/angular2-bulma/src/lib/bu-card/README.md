# bu-card - Card

```typescript
import { BuCardModule } from 'angular2-bulma';
```

##### description
Place your content into beautiful card components. Card component can contain few other subcomponents which can be mixed or leftout completely to achieve interesting designs and configurations.

Card can have all subcomponents like on example bellow:
##### example
```html
<bu-card>

    <bu-card-header>

      <bu-card-header-title>
          This is card
      </bu-card-header-title>

      <bu-card-header-icon>
        <bu-icon></bu-icon>
      </bu-card-header-icon>

      </bu-card-header>

      <bu-card-image>
        <bu-image image="https://loremflickr.com/320/240?random=1"></bu-image>
      </bu-card-image>

      <bu-card-content>
        <bu-content>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem minus quibusdam architecto
                dignissimos temporibus quaerat totam laborum! At nesciunt architecto similique tempora ipsam, a quae
                sequi praesentium natus dolorum.</p>
        </bu-content>
      </bu-card-content>

      <bu-card-footer>
        <bu-card-footer-item>
              Like
        </bu-card-footer-item>
        <bu-card-footer-item>
              Comment
        </bu-card-footer-item>
      </bu-card-footer>

</bu-card>
  ```
Card can have only content or image if you dont need anything else:
##### example
```html
<bu-card>
  <bu-card-content>
    <bu-content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem minus quibusdam architecto dignissimos temporibus quaerat totam laborum! At nesciunt architecto similique tempora ipsam, a quae sequi praesentium natus dolorum.
      </p>
    </bu-content>
  </bu-card-content>
</bu-card>
```
