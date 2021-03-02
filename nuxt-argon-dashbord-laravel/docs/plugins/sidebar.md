# Sidebar

We've created a custom Sidebar plugin that let's you dynamically specify it's content through 
`SidebarItem` components

## Basic example

:::demo
```html
<div class="sidebar-wrapper-docs">
   <side-bar>
        <template slot-scope="props" slot="links">
          <sidebar-item
                    :link="{
                      name: 'Dashboards',
                      icon: 'ni ni-shop text-primary',
                      path: '/dashboard'
                    }"
                  >
          </sidebar-item>
        </template>
  </side-bar>        
</div>
```
:::


## Collapsible menus

You can define sidebar menus with items inside simply by using a `sidebar-item` inside another
`sidebar-item`

:::demo
```html
<div class="sidebar-wrapper-docs">
   <side-bar>
        <template slot-scope="props" slot="links">
          <sidebar-item
                    :link="{
                      name: 'Dashboards',
                      icon: 'ni ni-shop text-primary',
                    }"
                  >
            <sidebar-item
              :link="{ name: 'Dashboard', path: '/dashboard' }"
            ></sidebar-item>
            <sidebar-item
              :link="{ name: 'Alternative', path: '/alternative' }"
            ></sidebar-item>
          </sidebar-item>
        </template>
  </side-bar>        
</div>
```
:::

## 3 level nested menus

:::demo
```html
<div class="sidebar-wrapper-docs">
   <side-bar>
        <template slot-scope="props" slot="links">
          <sidebar-item
                    :link="{
                      name: 'Dashboards',
                      icon: 'ni ni-shop text-primary',
                    }"
                  >
            <sidebar-item
              :link="{ name: 'Dashboard', path: '/dashboard' }"
            ></sidebar-item>
            <sidebar-item :link="{ name: 'Multi Level' }">
              <sidebar-item :link="{ name: 'Third level menu', path:'#' }"/>
              <sidebar-item :link="{ name: 'Just another link', path:'#' }"/>
              <sidebar-item :link="{ name: 'One last link', path:'#' }"/>
            </sidebar-item>
          </sidebar-item>
        </template>
  </side-bar>        
</div>
```
:::

### Logo and links below
:::demo
```html
<div class="sidebar-wrapper-docs">
   <side-bar logo="https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png">
        <template slot-scope="props" slot="links">
          <sidebar-item
                  :link="{
                    name: 'Dashboard',
                    icon: 'ni ni-shop text-danger',
                    path: '#',
                    isRoute: false, 
                  }">
                        
          </sidebar-item>
        </template>
        
        <template slot="links-after">
          <hr class="my-3">
          <h6 class="navbar-heading p-0 text-muted">Documentation</h6>
  
          <ul class="navbar-nav mb-md-3">
            <li class="nav-item">
              <a class="nav-link" href="https://demos.creative-tim.com/vue-argon-dashboard-pro/documentation"
                 target="_blank">
                <i class="ni ni-spaceship"></i>
                <span class="nav-link-text">Getting started</span>
              </a>
            </li>
          </ul>
        </template>
  </side-bar>        
</div>
```
:::

## Sidebar Props
<props-table component-name="sidebar"/>

## Sidebar Item Props
<props-table component-name="sidebar-item"/>

## Sidebar Slots
<slots-table :slots="[
          {name: 'default', description: 'Content before links'},
          {name: 'links', description: 'Content for links'},
          {name: 'links-after', description: 'Content for links below normal links'}
          ]"/>

## Sidebar item Slots
<slots-table :slots="[
          {name: 'default', description: 'Default content. Usually used to add sub menus'},
          {name: 'title', description: 'Custom title content if you want a custom markup for the sidebar item'}
          ]"/>


<script>
 export default {
  mounted() {
     document.body.classList.add('g-sidenav-show')
     document.body.classList.add('g-sidenav-pinned')
  }
}
</script>
