# Forms

Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.

<hr>


### Form controls

:::demo
```html
<div>
  <div class="row">
    <div class="col-md-6">
        <base-input placeholder="name@example.com"></base-input>
    </div>
    <div class="col-md-6">
      <base-input placeholder="Disabled" disabled></base-input>
    </div>
  </div>
   <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Birthday" prepend-icon="ni ni-zoom-split-in"></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Birthday" append-icon="ni ni-zoom-split-in"></base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
          <base-input placeholder="Success" :valid="true"></base-input>
      </div>
      <div class="col-md-6">
        <base-input placeholder="Error input" error="Some error"></base-input>
      </div>
    </div>
</div>
```
:::

### Alternative

:::demo
```html
<div>
  <div class="row">
    <div class="col-md-6">
      <base-input alternative placeholder="name@example.com"></base-input>
    </div>
    <div class="col-md-6">
      <base-input alternative placeholder="Disabled" disabled></base-input>
    </div>
  </div>
   <div class="row">
      <div class="col-md-6">
          <base-input alternative placeholder="Birthday" prepend-icon="ni ni-zoom-split-in"></base-input>
      </div>
      <div class="col-md-6">
        <base-input alternative placeholder="Birthday" append-icon="ni ni-zoom-split-in"></base-input>
      </div>
    </div>
</div>
```
:::

### Flush

Remove all borders and shadows so you can use it inside other elements:

:::demo
```html
  <base-input placeholder="Flushed input" input-classes="form-control-flush"></base-input>
```
:::


### Muted

:::demo
```html
  <base-input placeholder="Muted input" input-classes="form-control-muted"></base-input>
```
:::

### Form controls

:::demo
```html
 <div>
  <base-input label="Email address" placeholder="name@example.com"/>
   
   <base-input label="Example select">
     <select class="form-control">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </base-input>
   
   <base-input label="Example multiple select">
     <select multiple="" class="form-control">
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
     </select>
   </base-input>
   
   
   <base-input label="Example textarea">
     <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
   </base-input>
</div>
```
:::


### File browser

:::demo
```html
<template>
  <file-input @change="filesChange"></file-input>
</template>
<script>
  export default {
    data() {
      return {
        files: []
      }
    },
    methods: {
      filesChange(files) {
        this.files = files
      }
    }
  }
</script>
```
:::

### HTML5 inputs

:::demo
```html
<div>
  <div class="form-group row">
    <label class="col-md-2 col-form-label form-control-label">Text</label>
    <div class="col-md-10">
      <base-input placeholder="Jon Snow"></base-input>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-search-input" class="col-md-2 col-form-label form-control-label">Search</label>
    <div class="col-md-10">
      <base-input id="example-search-input" placeholder="Tell me your secret ..."></base-input>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-email-input" class="col-md-2 col-form-label form-control-label">Email</label>
    <div class="col-md-10">
      <base-input type="email" autocomplete="username email" placeholder="argon@example.com" id="example-email-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-url-input" class="col-md-2 col-form-label form-control-label">URL</label>
    <div class="col-md-10">
      <base-input type="url" placeholder="https://www.creative-tim.com" id="example-url-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-tel-input" class="col-md-2 col-form-label form-control-label">Phone</label>
    <div class="col-md-10">
      <base-input type="tel" placeholder="40-(770)-888-444" id="example-tel-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-password-input"
           class="col-md-2 col-form-label form-control-label">Password</label>
    <div class="col-md-10">
      <base-input type="password" autocomplete="current-password" placeholder="password" id="example-password-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-number-input" class="col-md-2 col-form-label form-control-label">Number</label>
    <div class="col-md-10">
      <base-input type="number" placeholder="23" id="example-number-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-datetime-local-input" class="col-md-2 col-form-label form-control-label">Datetime</label>
    <div class="col-md-10">
      <base-input type="datetime-local" value="2018-11-23T10:30:00" id="example-datetime-local-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-date-input" class="col-md-2 col-form-label form-control-label">Date</label>
    <div class="col-md-10">
      <base-input type="date" value="2018-11-23" id="example-date-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-month-input" class="col-md-2 col-form-label form-control-label">Month</label>
    <div class="col-md-10">
      <base-input type="month" value="2018-11" id="example-month-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-week-input" class="col-md-2 col-form-label form-control-label">Week</label>
    <div class="col-md-10">
      <base-input type="week" value="2018-W23" id="example-week-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-time-input" class="col-md-2 col-form-label form-control-label">Time</label>
    <div class="col-md-10">
      <base-input type="time" value="10:30:00" id="example-time-input"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="example-color-input" class="col-md-2 col-form-label form-control-label">Color</label>
    <div class="col-md-10">
      <base-input type="color" value="#5e72e4" id="example-color-input"/>
    </div>
  </div>
</div>
```
:::

### Sizing 

:::demo
```html
<div>
  <base-input label="Large input" input-classes="form-control-lg" placeholder=".form-control-lg"/>
  <base-input label="Default input" placeholder="Default input"/>
  <base-input label="Default input" input-classes="form-control-sm" placeholder=".form-control-sm"/>
</div>
```
:::

### Textarea

:::demo
```html
<form>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a large text here ..."></textarea>
</form>
```
:::


### Alternative

:::demo
```html
<form>
  <textarea class="form-control form-control-alternative" rows="3" placeholder="Write a large text here ..."></textarea>
</form>
```
:::


### Checkboxes

:::demo
```html
<template>
<div>
   <base-checkbox class="mb-3" v-model="checkboxes.unchecked">
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checked">
      Checked
  </base-checkbox>

  <base-checkbox class="mb-3" v-model="checkboxes.uncheckedDisabled" disabled>
      Unchecked
  </base-checkbox>
  <base-checkbox class="mb-3" v-model="checkboxes.checkedDisabled" disabled>
      Checked
  </base-checkbox>
</div>
</template>
<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          }
       }
    }
}
</script>
```
:::

### Radio buttons

:::demo
```html
<template>
<div>
    <base-radio name="radio0" class="mb-3" v-model="radio.radio1">
        Unchecked
    </base-radio>

    <base-radio name="radio1" class="mb-3" v-model="radio.radio1">
        Checked
    </base-radio>


    <base-radio name="radio2" class="mb-3" v-model="radio.radio2" disabled>
        Disabled unchecked
    </base-radio>

    <base-radio name="radio3" class="mb-3" v-model="radio.radio2" disabled>
        Disabled checked
    </base-radio>
</div>
</template>
<script>
export default {
    data(){
        return {
         radio: {
           radio1: "radio1",
           radio2: "radio3"
         }
       }
    }
}
</script>
```
:::

### Toggle buttons

:::demo
```html
<template>
<div>
    <base-switch v-model="switches.off"></base-switch>
    <span class="clearfix"></span>
    <base-switch v-model="switches.on"></base-switch>
</div>
</template>
<script>
export default {
    data(){
        return {
         switches: {
             off: false,
             on: true
          },
       }
    }
}
</script>
```
:::

### Sliders

:::demo
```html
<template>
<div>
     <base-slider v-model="sliders.slider1">
    </base-slider>
    <!-- Range slider -->
    <div class="mt-5">
        <!-- Range slider container -->
        <base-slider v-model="sliders.slider2" :range="{min: 0, max: 500}">

        </base-slider>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
         sliders: {
           slider1: 0,
           slider2: [150, 400]
         }
       }
    }
}
</script>
```
:::



<script>
export default {
    data(){
        return {
         checkboxes: {
            unchecked: false,
            checked: true,
            uncheckedDisabled: false,
            checkedDisabled: true
          },
          radio: {
              radio1: "radio1",
              radio2: "radio3"
            },
            switches: {
              off: false,
              on: true
            },
            sliders: {
              slider1: 0,
              slider2: [150, 400]
            },
            files: []
       }
    },
    methods: {
      filesChange(files) {
        this.files = files
      }
    }
}
</script>


### Base Input props

<props-table component-name="base-input"></props-table>

## Base input slots
<slots-table :slots="[
{name: 'label', description: 'Input label'},
{name: 'prepend', description: 'Addon left slot (before input text)'},
{name: 'append', description: 'Addon right slot (after input text)'},
{name: 'default', description: 'Default content (replacing default input component)'},
{name: 'error', description: 'Error slot (displayed below input)'},
]"/>

## Base input events
<events-table :events="[
{name: 'input', description: 'triggers when the binding value changes (default for v-model)', params: 'the updated value'},
{name: 'focus', description: 'triggers when input is focused', params: '(evt) browser event'},
{name: 'blur', description: 'triggers when input is blurred', params: '(evt) browser event'},
]"/>

### Base Checkbox props

<props-table component-name="base-checkbox"></props-table>

## Base checkbox slots
<slots-table :slots="[
{name: 'default', description: 'Default content (text to the right of the icon)'},
]"/>

## Base checkbox events
<events-table :events="[
{name: 'input', description: 'triggers when the binding value changes (default for v-model)', params: 'the updated value'}
]"/>

### Base Radio props

<props-table component-name="base-radio"></props-table>

## Base radio slots
<slots-table :slots="[
{name: 'default', description: 'Default content (text to the right of the icon)'},
]"/>

## Base radio events
<events-table :events="[
{name: 'input', description: 'triggers when the binding value changes (default for v-model)', params: 'the updated value'}
]"/>

### Slider plugin props

<props-table component-name="base-slider"></props-table>

## Base radio events
<events-table :events="[
{name: 'input', description: 'triggers when the binding value changes (default for v-model)', params: 'the updated value'}
]"/>
