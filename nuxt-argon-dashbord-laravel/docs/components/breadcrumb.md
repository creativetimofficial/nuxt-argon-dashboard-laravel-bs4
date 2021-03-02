# Breadcrumb

Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.

<hr>

### Example

:::demo
```html
<div>
   <breadcrumb>
      <breadcrumb-item active>Home</breadcrumb-item>
   </breadcrumb>
   <breadcrumb>
     <breadcrumb-item><a href="#!">Home</a></breadcrumb-item>
     <breadcrumb-item active>Library</breadcrumb-item>
   </breadcrumb>
   <breadcrumb>
    <breadcrumb-item><a href="#!">Home</a></breadcrumb-item>
    <breadcrumb-item><a href="#!">Library</a></breadcrumb-item>
    <breadcrumb-item active>Data</breadcrumb-item>
   </breadcrumb>
</div>
```
:::

### Dark

:::demo
```html
<div>
   <breadcrumb list-classes="breadcrumb-dark bg-default">
      <breadcrumb-item active>Home</breadcrumb-item>
   </breadcrumb>
   <breadcrumb list-classes="breadcrumb-dark bg-primary">
     <breadcrumb-item><a href="#!">Home</a></breadcrumb-item>
     <breadcrumb-item active>Library</breadcrumb-item>
   </breadcrumb>
   <breadcrumb list-classes="breadcrumb-dark bg-danger">
    <breadcrumb-item><a href="#!">Home</a></breadcrumb-item>
    <breadcrumb-item><a href="#!">Library</a></breadcrumb-item>
    <breadcrumb-item active>Data</breadcrumb-item>
   </breadcrumb>
</div>
```
:::


### Links

Using the contextual badge component
together with the `tag` prop in order to switch to your desired html element.
Providing `tag="a"` will transform the badge into an `anchor` with hover and focus states.

:::demo
```html
<breadcrumb list-classes="breadcrumb-links">
  <breadcrumb-item><a href="#!">Home</a></breadcrumb-item>
  <breadcrumb-item><a href="#!">Library</a></breadcrumb-item>
  <breadcrumb-item active>Data</breadcrumb-item>
</breadcrumb>
```
:::

### Breadcrumb Props
<props-table component-name="breadcrumb"></props-table>

### Breadcrumb Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content for the badge'}
          ]"/>
          
### BreadcrumbItem Props
<props-table component-name="breadcrumb-item"></props-table>

### BreadcrumbItem Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content for the badge'}
          ]"/>
