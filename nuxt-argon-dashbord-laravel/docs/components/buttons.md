# Buttons

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

<hr>

### Examples

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

:::demo
```html
<div>
 <base-button type="primary">Button</base-button>
 <base-button type="primary">
  <i class="ni ni-bag-17"></i>With icon
  </base-button>
 <base-button type="primary">
  <i class="ni ni-atom"></i>
</base-button>
</div>
```
:::


:::demo
```html
<div>
 <base-button type="default">Default</base-button>
 <base-button type="primary">Primary</base-button>
 <base-button type="secondary">Secondary</base-button>
 <base-button type="info">Info</base-button>
 <base-button type="success">Success</base-button>
 <base-button type="danger">Danger</base-button>
 <base-button type="warning">Warning</base-button>
</div>
```
:::


### Outline buttons

In need of a button, but not the hefty background colors they bring?
Add `outline` prop together with the button `type` remove all background images and colors on any button.


:::demo
```html
<div>
 <base-button outline type="default">Default</base-button>
 <base-button outline type="primary">Primary</base-button>
 <base-button outline type="secondary">Secondary</base-button>
 <base-button outline type="info">Info</base-button>
 <base-button outline type="success">Success</base-button>
 <base-button outline type="danger">Danger</base-button>
 <base-button outline type="warning">Warning</base-button>
</div>
```
:::

### Sizes

Fancy larger or smaller buttons? Add `size="lg"` or "size="sm" for additional sizes.

:::demo
```html
<div>
 <base-button size="lg" type="primary">Large button</base-button>
 <base-button size="lg" type="secondary">Large button</base-button>
</div>
```
:::

:::demo
```html
<div>
 <base-button size="sm" type="primary">Small button</base-button>
 <base-button size="sm" type="secondary">Small button</base-button>
</div>
```
:::

<br>
Create block level buttons—those that span the full width of a parent—by adding `block` prop


:::demo
```html
<div>
 <base-button block type="primary">Primary</base-button>
 <base-button block type="secondary">Secondary</base-button>
</div>
```
:::


### Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active.
There’s no need to add a class to `<button>`s as they use a pseudo-class.
However, you can still force the same active appearance with `.active`
(and include the aria-pressed="true" attribute) should you need to replicate the state programmatically.

:::demo
```html
<div>
  <base-button tag="a" type="primary" size="lg" href="#" class="active" role="button" aria-pressed="true">Primary link</base-button>
  <base-button tag="a" type="secondary" size="lg" href="#" class="active" role="button" aria-pressed="true">Link</base-button>
</div>
```
:::


### Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to the component

:::demo
```html
<div>
  <base-button size="lg" type="primary" disabled>Primary button</base-button>
  <base-button size="lg" type="secondary" disabled>Button</base-button>
</div>
```
:::


### Checkbox and radio groups

Bootstrap’s `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling.
Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable their toggling behavior via JavaScript and add `.btn-group-toggle` to style the `<input>`s within your buttons.
Note that you can create single input-powered buttons or groups of them.

The checked state for these buttons is only updated via click event on the button.
If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input’s checked property—you’ll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input’s `<label>`.

:::demo
```html
<template>
  <button-checkbox v-model="buttonCheckbox" button-classes="btn-secondary">Checked</button-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        buttonCheckbox: false
      }
    }
  }
</script>
```
:::

:::demo
```html
<template>
  <button-radio-group :options="radioOptions"
                      button-classes="btn-secondary"
                      v-model="buttonRadioGroup">
  </button-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        radioOptions: [{value: 'option1', label: 'Option 1'}, {value: 'option2', label: 'Option 2'}, {value: 'option3', label: 'Option 3'}],
        buttonRadioGroup: 'option1'
      }
    }
  }
</script>
```
:::


### BaseButton Props

<props-table component-name="base-button"></props-table>

### BaseButton Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content for the badge'}
          ]"/>
          
### BaseButton events
<events-table :events="[
{name: 'click', description: 'Button click event', params: '(evt) browser event'}
]"/>
          
### ButtonCheckbox Props

<props-table component-name="button-checkbox"></props-table>

### ButtonCheckbox Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content for the badge'}
          ]"/>

### ButtonRadioGroup Props

<props-table component-name="button-radio-group"></props-table>

<script>
  export default {
    data() {
      return {
        buttonCheckbox: false,
        radioOptions: [{value: 'option1', label: 'Option 1'}, {value: 'option2', label: 'Option 2'}, {value: 'option3', label: 'Option 3'}],
        buttonRadioGroup: 'option1'
      }
    }
  }
</script>
