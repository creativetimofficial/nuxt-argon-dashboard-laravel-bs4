# TagsInput

Manage tags effortlessly with our tags input

<hr>

Simple, yet powerful tags input component


Initialization:

```js
import TagsInput from '@/components/Inputs/TagsInput'

export default {
  components: {
    TagsInput
  }
}
```

### Example (single file with preview)

:::demo
```html
<template>
  <tags-input v-model="tags"></tags-input>
</template>
<script>
export default {
   data(){
     return {
       tags: ['New York', 'Boston', 'London'],
     }
   }
}
</script>

```
:::

### TagsInput props

<props-table component-name="tags-input"></props-table>

<script>
export default {
   data(){
     return {
       tags: ['New York', 'Boston', 'London'],
     }
   }
}
</script>

<style>
.tags-input__wrapper input {
  margin-top: 0 !important;
}
</style> 
