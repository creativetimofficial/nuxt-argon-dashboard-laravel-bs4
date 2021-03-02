# Badge

Documentation and examples for badges, our small count and labeling component.

<hr>

### Example

Badges can be used as part of links or buttons to provide a counter.

:::demo
```html
<div>
<base-button type="default">
  <span>Unread messages</span>
  <badge type="primary">4</badge>
</base-button>
<base-button type="primary">
  <span>Notifications</span>
  <span class="badge badge-md badge-circle badge-floating badge-danger border-white">4</span>
</base-button>
</div>
```
:::

### Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

:::demo
```html
<div>
    <badge type="default">Default</badge>

    <badge type="primary">Primary</badge>

    <badge type="secondary">Secondary</badge>

    <badge type="info">Info</badge>

    <badge type="success">Success</badge>

    <badge type="danger">Danger</badge>

    <badge type="warning">Warning</badge>
</div>
```
:::


### Pill badges

Use the `pill` prop to make badges more rounded (with a larger border-radius and additional horizontal padding).
Useful if you miss the badges from v3.

:::demo
```html
<div>
    <badge rounded type="default">Default</badge>

    <badge rounded type="primary">Primary</badge>

    <badge rounded type="secondary">Secondary</badge>

    <badge rounded type="info">Info</badge>

    <badge rounded type="success">Success</badge>

    <badge rounded type="danger">Danger</badge>

    <badge rounded type="warning">Warning</badge>
</div>
```
:::


### Links

Using the contextual badge component
together with the `tag` prop in order to switch to your desired html element.
Providing `tag="a"` will transform the badge into an `anchor` with hover and focus states.

:::demo
```html
<div>
    <badge rounded tag="a" href="#" type="default">Default</badge>

    <badge rounded tag="a" href="#" type="primary">Primary</badge>

    <badge rounded tag="a" href="#" type="secondary">Secondary</badge>

    <badge rounded tag="a" href="#" type="info">Info</badge>

    <badge rounded tag="a" href="#" type="success">Success</badge>

    <badge rounded tag="a" href="#" type="danger">Danger</badge>

    <badge rounded tag="a" href="#" type="warning">Warning</badge>
</div>
```
:::

### Sizes

Use the `size="md"` or `size="lg"` props to adjust badge sizes.

:::demo
```html
<div>
    <badge rounded type="default">Default</badge>

    <badge rounded type="warning" size="md">Medium</badge>

    <badge rounded type="success" size="lg">Large Badge</badge>
</div>
```
:::


### Props

<props-table component-name="badge"></props-table>

### Badge Slots

<slots-table :slots="[
          {name: 'default', description: 'Default content for the badge'}
          ]"/> 
