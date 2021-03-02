# Changelog

## [1.2.0] - 2020-01-05
- Improve tags input styles on mobile
- Alternative input style fixes
- Update sweet alert
- Lock bootstrap version to 4.3.1
- Modal click outside improvements
- Pie chart tooltip improvements
- Prevent enter key on tags input
- Fix sidebar scroll issue
- Fix sidebar resize issues
- Upgrade vee-validate to version 3. Update form validation code to vee validate 3
- Fix ActivityFeed component import issue

### Upgrade tips
- Copy over *components* folder and *assets* folder.
- Copy *dashboard-plugin.js* and *globalComponents.js* files.
- Add this code under `build` option in nuxt.config.js
```js
transpile: [
  'vee-validate/dist/rules'
]
```
- Diff the package.json with yours to see which packages were upgraded.
- In your code, if you used the old vee-validate with `v-validate` directive, change it like this

This code
```html
<base-input v-validate="'required'" name="First Name" :error="getError('First Name')">
</base-input>
```

should be changed to
```{1}html
<base-input rules="required" name="First Name">
</base-input>
```
The `base-input` component can be used as a wrapper to validate any other custom component now.
For example, validating an element-ui select:

```{1}html
<base-input rules="required" name="My select">
 <el-select v-model="someValue">
 </el-select>
</base-input>
```

For more details check [Migration guide from vee-validate](https://logaretm.github.io/vee-validate/migration.html#migrating-from-2-x-to-3-0)

## [1.1.1] - 2019-10-14
### Bug fixes & improvements
- Improve sidebar behaviour when resizing from desktop to mobile and vice-versa
- Fix checkbox/radio related issue after full page refresh

## [1.1.0] - 2019-08-28
### Bug fixes & improvements

- Add special no ssr plugins for full calendar and vector maps
- Bug fixes for navbar & tables
- Code cleanups

## [1.0.0] - 2019-07-04
### Initial Release
