# Contents

Discover what’s included in Bootstrap, including our precompiled and source code flavors.
Remember, Bootstrap’s JavaScript components require Bootstrap Vue.

<hr>

#### Nuxt Argon Dashboard PRO Structure

Once downloaded, unzip the compressed folder and you’ll see something like this:

```
|-- nuxt-argon-dashboard
│   app.html
│   CHANGELOG.md
│   nuxt.config.js
│   package.json
│   polyfills.js
│   README.md
│   yarn.lock
│
├───assets
│   ├───css
│   │   │   style.css
│   │   │
│   │   ├───font-awesome
│   │   └───nucleo
│   └───sass
│       │   argon.scss
│       │
│       ├───core
│       └───custom
│               _components.scss
│               _custom.scss
│               _functions.scss
│               _mixins.scss
│               _transitions.scss
│               _utilities.scss
│               _variables.scss
│               _vendors.scss
│
├───components
│   │   ValidationError.vue
│   │
│   ├───argon-core
│   │   │   Badge.vue
│   │   │   BaseAlert.vue
│   │   │   BaseButton.vue
│   │   │   BaseDropdown.vue
│   │   │   BaseHeader.vue
│   │   │   BasePagination.vue
│   │   │   BaseProgress.vue
│   │   │   CloseButton.vue
│   │   │   index.js
│   │   │   LoadingPanel.vue
│   │   │   Modal.vue
│   │   │   NavbarToggleButton.vue
│   │   │
│   │   ├───Breadcrumb
│   │   │       Breadcrumb.vue
│   │   │       BreadcrumbItem.vue
│   │   │       RouteBreadcrumb.vue
│   │   │
│   │   ├───Cards
│   │   │       Card.vue
│   │   │       StatsCard.vue
│   │   │
│   │   ├───Charts
│   │   │       BarChart.js
│   │   │       config.js
│   │   │       DoughnutChart.js
│   │   │       globalOptionsMixin.js
│   │   │       LineChart.js
│   │   │       optionHelpers.js
│   │   │       PieChart.js
│   │   │
│   │   ├───Collapse
│   │   │       Collapse.vue
│   │   │       CollapseItem.vue
│   │   │
│   │   ├───Feed
│   │   │       Comment.vue
│   │   │
│   │   ├───Inputs
│   │   │       BaseCheckbox.vue
│   │   │       BaseInput.vue
│   │   │       IconCheckbox.vue
│   │   │       TagsInput.vue
│   │   │
│   │   ├───Navbar
│   │   │       BaseNav.vue
│   │   │       NavbarToggleButton.vue
│   │   │
│   │   ├───NotificationPlugin
│   │   │       index.js
│   │   │       Notification.vue
│   │   │       Notifications.vue
│   │   │
│   │   ├───SidebarPlugin
│   │   │       index.js
│   │   │       SideBar.vue
│   │   │       SidebarItem.vue
│   │   │
│   │   └───WorldMap
│   │           AsyncWorldMap.vue
│   │           WorldMap.vue
│   │
│   ├───Dashboard
│   │   └───Cards
│   │           UserEditCard.vue
│   │           UserPasswordCard.vue
│   │
│   ├───feed
│   │       Comment.vue
│   │
│   ├───layouts
│   │   └───argon
│   │           Content.vue
│   │           ContentFooter.vue
│   │           DashboardNavbar.vue
│   │
│   ├───pages
│   │   ├───dashboard
│   │   │       ActivityFeed.vue
│   │   │       LightTable.vue
│   │   │       PageVisitsTable.vue
│   │   │       ProgressTrackList.vue
│   │   │       SocialTrafficTable.vue
│   │   │       UserList.vue
│   │   │
│   │   ├───register
│   │   │       FailedRegistration.vue
│   │   │       SuccessfulRegistration.vue
│   │   │
│   │   └───UserProfile
│   │           UserCard.vue
│   │
│   ├───tables
│   │   │   projects.js
│   │   │   users.js
│   │   │
│   │   ├───PaginatedTables
│   │   │       clientPaginationMixin.js
│   │   │
│   │   └───RegularTables
│   │           DarkTable.vue
│   │           LightTable.vue
│   │           TranslucentTable.vue
│   │
│   └───widgets
│           CreditCard.vue
│           MembersCard.vue
│           PaypalCard.vue
│           ProgressTrackList.vue
│           StatsCards.vue
│           VectorMapCard.vue
│           VisaCard.vue
│
├───layouts
│       AuthLayout.vue
│       DashboardLayout.vue
│       error1.vue
│
├───middleware
│       README.md
│       redirect.js
│
├───mixins
│       form-mixin.js
│       global.js
│
├───pages
│   │   dashboard.vue
│   │   index.vue
│   │   login.vue
│   │   register.vue
│   │
│   ├───components
│   │       icons.vue
│   │       notifications.vue
│   │
│   ├───examples
│   │   ├───user-management
│   │   │       index.vue
│   │   │
│   │   └───user-profile
│   │           index.vue
│   │
│   ├───maps
│   │       google.vue
│   │
│   ├───password
│   │       email.vue
│   │       reset.vue
│   │
│   └───tables
│           regular.vue
│
├───plugins
│   │   axios.js
│   │   elementUi.js
│   │   README.md
│   │
│   └───dashboard
│       │   dashboard-plugin.js
│       │   globalComponents.js
│       │   globalDirectives.js
│       │   JsonApi.js
│       │   world-map.js
│       │
│       └───directives
│               click-outside.js
│
├───services
│       profile-service.js
│       users-service.js
│
├───static
│   │   .nojekyll
│   │   favicon.png
│   │   README.md
│   │   sw.js
│   │
│   └───img
│       │   examples_image.png
│       │   examples_image1.png
│       │   placeholder.jpg
│       │
│       ├───brand
│       │       favicon.png
│       │       green.png
│       │       white.png
│       │
│       ├───icons
│       │   ├───cards
│       │   │       bitcoin.png
│       │   │       mastercard.png
│       │   │       paypal.png
│       │   │       visa.png
│       │   │
│       │   ├───common
│       │   │       github.svg
│       │   │       google.svg
│       │   │
│       │   └───flags
│       │           DE.png
│       │           GB.png
│       │           US.png
│       │
│       └───theme
│               angular.jpg
│               bootstrap.jpg
│               img-1-1000x600.jpg
│               img-1-1000x900.jpg
│               landing-1.png
│               landing-2.png
│               landing-3.png
│               profile-cover.jpg
│               react.jpg
│               sketch.jpg
│               team-1.jpg
│               team-2.jpg
│               team-3.jpg
│               team-4.jpg
│               team-5.jpg
│               vue.jpg
│
├───store
│       index.js
│       profile.js
│       README.md
│       register.js
│       users.js
│
└───util
        API_KEY.js
        authCustomStrategy.js
        throttle.js

```

#### Bootstrap components

Here is the list of Bootstrap 4 components that were restyled in Argon:

<div class="row row-grid mt-5">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Alerts</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Badge</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Buttons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Carousel</h6>
      </div>
    </div>
  </div>
</div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Dropdowns</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Forms</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Modal</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Navs</h6>
      </div>
    </div>
  </div>
</div>
