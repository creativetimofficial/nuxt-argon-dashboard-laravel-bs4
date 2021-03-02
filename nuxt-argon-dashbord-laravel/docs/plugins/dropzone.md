# Dropzone File Upload

DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.

<hr>

We've provided a simple wrapper component with `v-model` support over the Dropzone


Initialization:

```js
import DropzoneFileUpload from '@/components/Inputs/DropzoneFileUpload'

export default {
  components: {
    DropzoneFileUpload
  }
}
```

### Example (single file with preview)

:::demo
```html
<template>
  <dropzone-file-upload v-model="fileSingle"></dropzone-file-upload>
</template>
<script>
export default {
   data(){
     return {
       fileSingle: []
     }
   }
}
</script>

```
:::


### Multiple files

:::demo
```html
<template>
  <dropzone-file-upload v-model="fileMultiple" multiple></dropzone-file-upload>
</template>
<script>
export default {
   data(){
     return {
       fileMultiple: []
     }
   }
}
</script>

```
:::

::: tip
  Dropzone plugin requires an `url` where you should upload your files. If you don't provide an url, it will throw an error, yet you can still have
  access to the local files.
:::

### DropzoneFileUpload props

<props-table component-name="dropzone-file-upload"></props-table>

<script>
export default {
   data(){
     return {
       fileSingle: [],
       fileMultiple: []
     }
   }
}
</script>
