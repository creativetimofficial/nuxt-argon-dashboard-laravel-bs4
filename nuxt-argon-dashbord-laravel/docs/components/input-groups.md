# Input groups

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

<hr>  

### Example

:::demo
```html
<div>
  <base-input placeholder="Username">
      <template slot="prepend">@</template>
  </base-input>
  
  <base-input placeholder="Recipient's username">
      <template slot="append">@example.com</template>
  </base-input>
  
  <base-input label="Your vanity URL">
      <template slot="prepend">https://example.com/users/</template>
  </base-input>
  
  <base-input>
      <template slot="prepend">$</template>
      <template slot="append">.00</template>
  </base-input>
  
  <base-input>
      <template slot="prepend">With textarea</template>
      <textarea class="form-control" aria-label="With textarea"></textarea>
  </base-input>
</div>
```
:::

### Merged

You can choose to merge input group elements by removing the border between them using the `.input-group-merge` modifier class.

:::demo
```html
<div>
  <base-input input-group-classes="input-group-merge" placeholder="Username">
      <template slot="prepend">@</template>
  </base-input>
  
  <base-input input-group-classes="input-group-merge" placeholder="Recipient's username">
      <template slot="append">@example.com</template>
  </base-input>
  
  <base-input input-group-classes="input-group-merge" label="Your vanity URL">
      <template slot="prepend">https://example.com/users/</template>
  </base-input>
  
  <base-input input-group-classes="input-group-merge">
      <template slot="prepend">$</template>
      <template slot="append">.00</template>
  </base-input>
  
  <base-input input-group-classes="input-group-merge">
      <template slot="prepend">With textarea</template>
      <textarea class="form-control" aria-label="With textarea"></textarea>
  </base-input>
</div>
```
:::

### Sizing

:::demo
```html
<div>
  <base-input input-group-classes="input-group-sm">
      <template slot="prepend">Small</template>
  </base-input>
  
  <base-input>
      <template slot="prepend">Default</template>
  </base-input>
  
  <base-input input-group-classes="input-group-lg">
      <template slot="prepend">Large</template>
  </base-input>
</div>
```
:::

### Checkboxes and radios

:::demo
```html
<div>
  <base-input>
       <input slot="prepend" type="checkbox" aria-label="Checkbox for following text input">
  </base-input>
  
  <base-input>
      <input slot="prepend" type="radio" aria-label="Radio button for following text input">
  </base-input>
</div>
```
:::

### Multiple inputs

:::demo
```html
<div>
  <base-input>
       <template slot="prepend">
        First and last name
       </template>
       
       <input type="text" aria-label="First name" class="form-control">
       <input type="text" aria-label="Last name" class="form-control">
  </base-input>
</div>
```
:::


### Multiple addons

:::demo
```html
<div>
  <base-input group>
     <div class="input-group-prepend">
       <span class="input-group-text">$</span>
       <span class="input-group-text">0.00</span>
     </div>
     <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
  </base-input>
  <base-input group>
     <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
     <div class="input-group-append">
       <span class="input-group-text">$</span>
       <span class="input-group-text">0.00</span>
     </div>
  </base-input>
</div>
```
:::


### Button addons

:::demo
```html
<div>
  <base-input group class="mb-3">
    <div class="input-group-prepend">
      <button class="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
    </div>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
  </base-input>
  <base-input group class="mb-3">
    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
    </div>
  </base-input>
  
  <base-input group class="mb-3">
     <div class="input-group-prepend" id="button-addon3">
       <button class="btn btn-outline-primary" type="button">Button</button>
       <button class="btn btn-outline-primary" type="button">Button</button>
     </div>
     <input type="text" class="form-control" placeholder="" aria-label="Example text with two button addons" aria-describedby="button-addon3">
  </base-input>
    
    <base-input group class="mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
      <div class="input-group-append" id="button-addon4">
        <button class="btn btn-outline-primary" type="button">Button</button>
        <button class="btn btn-outline-primary" type="button">Button</button>
      </div>
    </base-input>
</div>
```
:::
