# Sweet Alert

If you want to replace the classic alert box with something that looks amazing, you can use the Sweet Alert 2 Plugin.
We have changed the typography and colours for the plugin provided by [Tristan Edwards](https://twitter.com/t4t5). 
If you want to see the full documentation, please check out [this page](https://sweetalert2.github.io/).

In order to use the sweet alert, you have to import it the javascript and css.


```js
// js import
import swal from 'sweetalert2'

// style import
import 'sweetalert2/dist/sweetalert2.css'
```

### Basic example

:::demo
```html
<template>
   <button class="btn btn-default btn-fill" @click="showSwal">Try me!</button>
</template>

<script>
  import swal from 'sweetalert2';
  export default {
   methods: {
       showSwal () {
          swal.fire({
           type: 'success',
           title: `Here's a message!`,
           buttonsStyling: false,
           confirmButtonClass: 'btn btn-success btn-fill'
         })
       }
     }
  }
</script>
```
:::


<script>
  import swal from 'sweetalert2';
  export default {
   props: ['slot-key'],
   methods: {
       showSwal () {
          swal.fire({
           type: 'success',
           title: `Here's a message!`,
           buttonsStyling: false,
           confirmButtonClass: 'btn btn-success btn-fill'
         })
       }
     }
  }
</script>
