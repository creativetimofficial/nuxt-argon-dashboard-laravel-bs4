# Card

Cards provide a flexible and extensible content container with multiple variants and options.

<hr> 


### Examples

Cards support a wide variety of content, including images, text, list groups, links, and more. Below are examples of what’s supported.

:::demo
```html
<card type="frame">
  This is some text within a card body.
</div>
```
:::


## Layouts

In addition to styling the content within cards, Bootstrap includes a few options for laying out series of cards. For the time being, these layout options are not yet responsive.

### Card groups

Need a set of equal width and height cards that aren’t attached to one another? Use card decks.

:::demo
```html
<div class="card-group">
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </card>
</div>
```
:::

### Card decks

:::demo
```html
<div class="card-deck">
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card>
    <img slot="image" slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </card>
</div>
```
:::

### Card columns

Cards can be organized into Masonry-like columns with just CSS by wrapping them in `.card-columns`.
Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.


:::demo
```html
<div class="card-columns">
  <card>
    <img slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title that wraps to a new line</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </card>
  <card class="p-3">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </card>
  <card>
    <img slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image cap">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <card class="bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0 text-white">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
      <footer class="blockquote-footer">
        <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </card>
  <card class="text-center">
    
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
  <div class="card">
    <img class="card-img" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image">
  </div>
  <card class="p-3 text-right">
    <blockquote class="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer class="blockquote-footer">
        <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote>
  </card>
  <card>
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </card>
</div>
```
:::


## Advanced examples

### List group

:::demo
```html
<div class="card">
  <!-- Card image -->
  <img class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Image placeholder">
  <!-- List group -->
      
  <ul class="list-group list-group-flush">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  
  <!-- Card body -->
  <div class="card-body">
    <h3 class="card-title mb-3">Card title</h3>
    <p class="card-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim impedit veritatis officiis.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> 
</div>
```
:::

### Profile

:::demo
```html
<div class="card card-profile">
    <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
    <div class="row justify-content-center">
        <div class="col-lg-3 order-lg-2">
            <div class="card-profile-image">
                <a href="#">
                    <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-4.jpg" class="rounded-circle">
                </a>
            </div>
        </div>
    </div>
    <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
        <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-sm btn-info mr-4">Connect</a>
            <a href="#" class="btn btn-sm btn-default float-right">Message</a>
        </div>
    </div>
    <div class="card-body pt-0">
        <div class="row">
            <div class="col">
                <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                        <span class="heading">22</span>
                        <span class="description">Friends</span>
                    </div>
                    <div>
                        <span class="heading">10</span>
                        <span class="description">Photos</span>
                    </div>
                    <div>
                        <span class="heading">89</span>
                        <span class="description">Comments</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <h5 class="h3">
                Jessica Jones<span class="font-weight-light">, 27</span>
            </h5>
            <div class="h5 font-weight-300">
                <i class="ni location_pin mr-2"></i>Bucharest, Romania
            </div>
            
        </div>
    </div>
</div>
```
:::

### Contact

:::demo 
```html
<card>
    <!-- Card body -->
    <div class="row align-items-center">
        <div class="col-auto">
            <!-- Avatar -->
            <a href="#" class="avatar avatar-xl rounded-circle">
                <img alt="Image placeholder" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg">
            </a>
        </div>
        <div class="col ml--2">
            <h4 class="mb-0">
                <a href="#!">John Snow</a>
            </h4>
            <p class="text-sm text-muted mb-0">Working remoteley</p>
            <span class="text-success">●</span>
            <small>Active</small>
        </div>
        <div class="col-auto">
            <button type="button" class="btn btn-sm btn-primary">Add</button>
        </div>
    </div>
</card>
```
:::

### Team member

:::demo 
```html
<card>
    <a href="#!">
        <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg"
             class="rounded-circle img-center img-fluid shadow shadow-lg--hover" style="width: 140px;">
    </a>
    <div class="pt-4 text-center">
        <h5 class="h3 title">
            <span class="d-block mb-1">Ryan Tompson</span>
            <small class="h4 font-weight-light text-muted">Web Developer</small>
        </h5>
        <div class="mt-3">
            <a href="#" class="btn btn-twitter btn-icon-only rounded-circle">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="btn btn-facebook btn-icon-only rounded-circle">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="btn btn-dribbble btn-icon-only rounded-circle">
                <i class="fab fa-dribbble"></i>
            </a>
        </div>
    </div>
</card>
```
::: 

### Image

:::demo 
```html
<card>
    <img slot="image" class="card-img-top" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x900.jpg" alt="Image placeholder">
    <!-- Card body -->
    <h5 class="h2 card-title mb-0">Get started with Argon</h5>
    <small class="text-muted">by John Snow on Oct 29th at 10:23 AM</small>
    <p class="card-text mt-4">Argon is a great free UI package based on Bootstrap 4 that includes the most important
        components and features.</p>

    <a href="#!" class="btn btn-link px-0">View article</a>

</card>
```
::: 

### Testimonial

:::demo 
```html
<card class="bg-gradient-default">
    <h3 class="card-title text-white">Testimonial</h3>
    <blockquote class="blockquote text-white mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer text-danger">Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
    </blockquote>
</card>
```
::: 


### Pricing

:::demo 
```html
<card class="card-pricing bg-gradient-success border-0 text-center mb-4"
      header-classes="bg-transparent"
      body-classes="px-lg-7"
      footer-classes="bg-transparent">

    <h4 slot="header" class="text-uppercase ls-1 text-white py-3 mb-0">Bravo pack</h4>

    <div class="display-2 text-white">$49</div>
    <span class=" text-white">per application</span>
    <ul class="list-unstyled my-4">
        <li>
            <div class="d-flex align-items-center">
                <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i class="fas fa-terminal"></i>
                    </div>
                </div>
                <div>
                    <span class="pl-2 text-sm text-white">Complete documentation</span>
                </div>
            </div>
        </li>
        <li>
            <div class="d-flex align-items-center">
                <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i class="fas fa-pen-fancy"></i>
                    </div>
                </div>
                <div>
                    <span class="pl-2 text-sm text-white">Working materials in Sketch</span>
                </div>
            </div>
        </li>
        <li>
            <div class="d-flex align-items-center">
                <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                        <i class="fas fa-hdd"></i>
                    </div>
                </div>
                <div>
                    <span class="pl-2 text-sm text-white">2GB cloud storage</span>
                </div>
            </div>
        </li>
    </ul>
    <button type="button" class="btn btn-primary mb-3">Start free trial</button>

    <a slot="footer" href="#!" class=" text-white">Request a demo</a>
</card>
```
::: 


### Overlay

:::demo
```html
<div class="card bg-dark text-white border-0">
    <img class="card-img" src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/img-1-1000x600.jpg" alt="Card image">
    <div class="card-img-overlay d-flex align-items-center">
        <div>
            <h5 class="h2 card-title text-white mb-2">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text text-sm font-weight-bold">Last updated 3 mins ago</p>
        </div>
    </div>
</div>
```
:::

### Stats

:::demo
```html
<div class="row mb-4">
    <div class="col-lg-6">
        <stats-card>
            <!-- Card body -->
            <div class="row">
                <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">Total traffic</h5>
                    <span class="h2 font-weight-bold mb-0">350,897</span>
                </div>
                <div class="col-auto">
                    <div class="icon icon-shape bg-red text-white rounded-circle shadow">
                        <i class="ni ni-active-40"></i>
                    </div>
                </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                <span class="text-nowrap">Since last month</span>
            </p>
        </stats-card>
    </div>
    <div class="col-lg-6">
        <stats-card>
            <!-- Card body -->
            <div class="row">
                <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0">New users</h5>
                    <span class="h2 font-weight-bold mb-0">2,356</span>
                </div>
                <div class="col-auto">
                    <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
                        <i class="ni ni-chart-pie-35"></i>
                    </div>
                </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
                <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                <span class="text-nowrap">Since last month</span>
            </p>
        </stats-card>
    </div>
</div>
```
:::

:::demo
```html
<div class="row mb-4">
    <div class="col-lg-6">
        <stats-card class="bg-gradient-default">
            <!-- Card body -->
            <div class="row">
                <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total traffic</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">350,897</span>
                </div>
                <div class="col-auto">
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                        <i class="ni ni-active-40"></i>
                    </div>
                </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
                <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                <span class="text-nowrap text-light">Since last month</span>
            </p>
        </stats-card>
    </div>
    <div class="col-lg-6">
        <stats-card class="bg-gradient-primary">
            <!-- Card body -->
            <div class="row">
                <div class="col">
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">New users</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">2,356</span>
                </div>
                <div class="col-auto">
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                        <i class="ni ni-atom"></i>
                    </div>
                </div>
            </div>
            <p class="mt-3 mb-0 text-sm">
                <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                <span class="text-nowrap text-light">Since last month</span>
            </p>
        </stats-card>
    </div>
</div>

```
:::

