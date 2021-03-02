# Navbar

Documentation and examples for Bootstrap’s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.

<hr>

### Example

:::demo

```html
<base-nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark"
           v-model="showNavbar"
          type="default">
    <a slot="brand" class="navbar-brand" href="#">Default Color</a>
     <div class="navbar-collapse-header">
         <div class="row">
             <div class="col-6 collapse-brand">
                 <a href="#">
                     <img src="/img/brand/green.png">
                 </a>
             </div>
             <div class="col-6 collapse-close">
                 <button @click="showNavbar = false" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                     <span></span>
                     <span></span>
                 </button>
             </div>
         </div>
     </div>

     <ul class="navbar-nav ml-lg-auto">
         <li class="nav-item">
             <a class="nav-link nav-link-icon" href="#">
                 <i class="ni ni-favourite-28"></i>
                 <span class="nav-link-inner--text d-lg-none">Discover</span>
             </a>
         </li>
         <li class="nav-item">
             <a class="nav-link nav-link-icon" href="#">
                 <i class="ni ni-notification-70"></i>
                 <span class="nav-link-inner--text d-lg-none">Profile</span>
             </a>
         </li>
         <li class="nav-item dropdown">
             <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <i class="ni ni-settings-gear-65"></i>
                 <span class="nav-link-inner--text d-lg-none">Settings</span>
             </a>
             <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                 <a class="dropdown-item" href="#">Action</a>
                 <a class="dropdown-item" href="#">Another action</a>
                 <div class="dropdown-divider"></div>
                 <a class="dropdown-item" href="#">Something else here</a>
             </div>
         </li>
     </ul>
</nav>
```

:::

### Variations

:::demo

```html
<template>
<div style="position: relative">
<base-nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark mb-3"
    v-for="type in types"
    :key="type"
    v-model="navbars[type]"
    :type="type">
    <a slot="brand" class="navbar-brand" href="#">{{type}} Color</a>

    <div class="navbar-collapse-header">
        <div class="row">
            <div class="col-6 collapse-brand">
                <a href="#">
                    <img src="/img/brand/green.png">
                </a>
            </div>
            <div class="col-6 collapse-close">
                <button @click="navbars[type] = false" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>

    <ul class="navbar-nav ml-lg-auto">
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="ni ni-favourite-28"></i>
                <span class="nav-link-inner--text d-lg-none">Discover</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link nav-link-icon" href="#">
                <i class="ni ni-notification-70"></i>
                <span class="nav-link-inner--text d-lg-none">Profile</span>
            </a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="ni ni-settings-gear-65"></i>
                <span class="nav-link-inner--text d-lg-none">Settings</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
    </ul>

</nav>
</div>
</template>
<script>
  export default {
    data(){
        return {
            types: ['primary', 'success', 'danger', 'warning', 'info']
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
            types: ['primary', 'success', 'danger', 'warning', 'info'],
            showNavbar: false,
            navbars: {
              primary: false,
              success: false,
              danger: false,
              warning: false,
              info: false,
            }
        }
     }
  }
</script>

### Base Nav props

<props-table component-name="base-nav"></props-table>
