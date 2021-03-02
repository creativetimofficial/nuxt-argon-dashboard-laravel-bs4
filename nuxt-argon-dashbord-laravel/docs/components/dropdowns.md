# Dropdowns

Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.

<hr>

### Examples

:::demo
```html
<div>
  <base-dropdown>
    <base-button slot="title-container" type="secondary" class="dropdown-toggle">
      Regular
    </base-button>
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </base-dropdown>
   <base-dropdown>
     <base-button slot="title-container" type="default" class="dropdown-toggle">
        <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/US.png" /> Flags
     </base-button>
       <li>
          <a class="dropdown-item" href="#">
            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/DE.png" /> Deutsch
          </a>
      </li>
      <li>
          <a class="dropdown-item" href="#">
            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/GB.png" /> English(UK)
          </a>
      </li>
      <li>
          <a class="dropdown-item" href="#">
            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/FR.png" /> Français
          </a>
      </li>
    </base-dropddown>
</div>
```
:::

### Colors

The best part is you can do this with any button variant, too:

:::demo
```html
<div>
  <base-dropdown>
    <base-button slot="title-container" type="primary" class="dropdown-toggle">
      Primary
    </base-button>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <base-dropdown>
      <base-button slot="title-container" type="secondary" class="dropdown-toggle">
        Secondary
      </base-button>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <base-dropdown>
        <base-button slot="title-container" type="success" class="dropdown-toggle">
          Success
        </base-button>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <base-dropdown>
      <base-button slot="title-container" type="info" class="dropdown-toggle">
        Info
      </base-button>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <base-dropdown>
        <base-button slot="title-container" type="warning" class="dropdown-toggle">
          Warning
        </base-button>
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
    <base-dropdown>
      <base-button slot="title-container" type="danger" class="dropdown-toggle">
        Danger
      </base-button>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </base-dropdown>
</div>
```
:::

### Props

<props-table component-name="base-dropdown"></props-table>
