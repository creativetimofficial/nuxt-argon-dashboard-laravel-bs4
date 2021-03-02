# Select

<hr>
We used selects from element-ui but restyled them with a light look. To use selects, simply import
them from element-ui

```js
import {Select, Option} from 'element-ui'
```
Global usage

```js
Vue.use(Select)
Vue.use(Option)
```

For local usage

```js
export default {
  components: {
    [Select.name]: Select,
    [Option.name]: Option
  }
}
```

:::tip
You have to specify a `select-{type}` class for
the `select` and `option component` so the style matches the overall dashboard style
:::


## Single select

You can specify a `select-{type}` class to customize the look and feel of the select.
Type can be `default|primary|info|danger|warning`

:::demo
```html
<template>
  <el-select class="select-danger"
             placeholder="Single Select"
             v-model="selects.simple">
    <el-option v-for="option in selects.languages"
               class="select-danger"
               :value="option.value"
               :label="option.label"
               :key="option.label">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        selects: {
            simple: '',
            languages: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
              {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
              {value: 'Català', label: 'Català'},
              {value: 'Dansk', label: 'Dansk'},
              {value: 'Deutsch', label: 'Deutsch'},
              {value: 'English', label: 'English'},
              {value: 'Español', label: 'Español'},
              {value: 'Eλληνικά', label: 'Eλληνικά'},
              {value: 'Français', label: 'Français'},
              {value: 'Italiano', label: 'Italiano'},
              {value: 'Magyar', label: 'Magyar'},
              {value: 'Nederlands', label: 'Nederlands'},
              {value: 'Norsk', label: 'Norsk'},
              {value: 'Polski', label: 'Polski'},
              {value: 'Português', label: 'Português'},
              {value: 'Suomi', label: 'Suomi'},
              {value: 'Svenska', label: 'Svenska'},
              {value: 'Türkçe', label: 'Türkçe'},
              {value: 'Íslenska', label: 'Íslenska'},
              {value: 'Čeština', label: 'Čeština'},
              {value: 'Русский', label: 'Русский'},
              {value: 'ภาษาไทย', label: 'ภาษาไทย'},
              {value: '中文 (简体)', label: '中文 (简体)'},
              {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
              {value: '日本語', label: '日本語'},
              {value: '한국어', label: '한국어'}]
          },
       }
    }
  }
</script>
```
:::

## Multi select

:::demo
```html
<template>
  <el-select multiple
             class="select-primary"
             collapse-tags
             v-model="selects.multiple"
             placeholder="Multiple Select">
    <el-option v-for="option in selects.languages"
               class="select-primary"
               :value="option.value"
               :label="option.label"
               :key="option.label">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        selects: {
              languages: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
              {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
              {value: 'Català', label: 'Català'},
              {value: 'Dansk', label: 'Dansk'},
              {value: 'Deutsch', label: 'Deutsch'},
              {value: 'English', label: 'English'},
              {value: 'Español', label: 'Español'},
              {value: 'Eλληνικά', label: 'Eλληνικά'},
              {value: 'Français', label: 'Français'},
              {value: 'Italiano', label: 'Italiano'},
              {value: 'Magyar', label: 'Magyar'},
              {value: 'Nederlands', label: 'Nederlands'},
              {value: 'Norsk', label: 'Norsk'},
              {value: 'Polski', label: 'Polski'},
              {value: 'Português', label: 'Português'},
              {value: 'Suomi', label: 'Suomi'},
              {value: 'Svenska', label: 'Svenska'},
              {value: 'Türkçe', label: 'Türkçe'},
              {value: 'Íslenska', label: 'Íslenska'},
              {value: 'Čeština', label: 'Čeština'},
              {value: 'Русский', label: 'Русский'},
              {value: 'ภาษาไทย', label: 'ภาษาไทย'},
              {value: '中文 (简体)', label: '中文 (简体)'},
              {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
              {value: '日本語', label: '日本語'},
              {value: '한국어', label: '한국어'}],
              multiple: 'ARS'
          }
       }
    }
  }
</script>
```
:::

For more info check out [Element UI Select](http://element.eleme.io/#/en-US/component/select)

## Available custom css classes for select.
| Class
|---------- |
| select-default     |
| select-primary     |
| select-info     |
| select-success     |
| select-warning     |
| select-danger     |


<script>
  export default {
    props: ['slot-key'],
    data() {
      return {
        selects: {
            languages: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
              {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
              {value: 'Català', label: 'Català'},
              {value: 'Dansk', label: 'Dansk'},
              {value: 'Deutsch', label: 'Deutsch'},
              {value: 'English', label: 'English'},
              {value: 'Español', label: 'Español'},
              {value: 'Eλληνικά', label: 'Eλληνικά'},
              {value: 'Français', label: 'Français'},
              {value: 'Italiano', label: 'Italiano'},
              {value: 'Magyar', label: 'Magyar'},
              {value: 'Nederlands', label: 'Nederlands'},
              {value: 'Norsk', label: 'Norsk'},
              {value: 'Polski', label: 'Polski'},
              {value: 'Português', label: 'Português'},
              {value: 'Suomi', label: 'Suomi'},
              {value: 'Svenska', label: 'Svenska'},
              {value: 'Türkçe', label: 'Türkçe'},
              {value: 'Íslenska', label: 'Íslenska'},
              {value: 'Čeština', label: 'Čeština'},
              {value: 'Русский', label: 'Русский'},
              {value: 'ภาษาไทย', label: 'ภาษาไทย'},
              {value: '中文 (简体)', label: '中文 (简体)'},
              {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
              {value: '日本語', label: '日本語'},
              {value: '한국어', label: '한국어'}],
              multiple: 'ARS',
              single: ''
          }
       }
    }
  }
</script>
