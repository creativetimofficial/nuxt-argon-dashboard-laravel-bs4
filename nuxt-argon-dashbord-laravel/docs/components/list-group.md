# List group

List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

<hr>

### Examples

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

:::demo
```html
<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```
:::

### Active items

Add `.active` to a `.list-group-item` to indicate the current active selection.

:::demo
```html
<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>
```
:::

### Links

:::demo
```html
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
</div>
```
:::

### With badges

:::demo
```html
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <badge type="primary" pill>14</badge>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <badge type="primary" pill>2</badge>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Morbi leo risus
    <badge type="primary" pill>1</badge>
  </li>
</ul>
```
:::

## Advanced examples

Here are some more advanced custom examples we’ve made in order to bring more functionality with some really cool list group examples.

### Members

:::demo
```html
<template>
    <div class="card">
        <!-- Card header -->
        <div class="card-header">
            <!-- Title -->
            <h5 class="h3 mb-0">Team members</h5>
        </div>
        <!-- Card body -->
        <div class="card-body">
            <!-- List group -->
            <ul class="list-group list-group-flush list my--3">
                <li v-for="member in members"
                    :key="member.image"
                    class="list-group-item px-0">
                    <div class="row align-items-center">
                        <div class="col-auto">
                            <!-- Avatar -->
                            <a href="#" class="avatar rounded-circle">
                                <img alt="Image placeholder" :src="member.image">
                            </a>
                        </div>
                        <div class="col ml--2">
                            <h4 class="mb-0">
                                <a href="#!">{{member.name}}</a>
                            </h4>
                            <span :class="`text-${member.statusType}`">● </span>
                            <small>{{member.status}}</small>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-sm btn-primary">Add</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        members: [
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: 'In a meeting',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg'
          },
          {
            name: 'Samantha Ivy',
            status: 'Offline',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-3.jpg'
          },
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-4.jpg'
          },
          {
            name: 'John Snow',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-5.jpg'
          }
        ]
      }
    }
  }
</script>

```
:::


### Checklist

:::demo
```html
<template>
  <ul class="list-group list-group-flush" data-toggle="checklist">
    <li class="list-group-item px-0"
        v-for="item in items"
        :key="item.title"
    >
      <div class="checklist-item"
           :class="{'checklist-item-checked': item.done, [`checklist-item-${item.checkType}`]: item.checkType}">
        <div class="checklist-info">
          <h5 class="checklist-title mb-0">{{item.title}}</h5>
          <small>{{item.description}}</small>
        </div>
        <div>
          <base-checkbox v-model="item.done"
                         :type="item.checkType"/>
        </div>
      </div>

    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Call with Dave',
          description: '10:30 AM',
          done: true,
          checkType: 'success'
        },
        {
          title: 'Lunch meeting',
          description: '10:30 AM',
          done: false,
          checkType: 'warning'
        },
        {
          title: 'Argon Dashboard Launch',
          description: '10:30 AM',
          done: false,
          checkType: 'info'
        },
        {
          title: 'Winter Hackaton',
          description: '10:30 AM',
          done: true,
          checkType: 'danger'
        }
      ]
    };
  }
};
</script>
```
:::

### Progress 


:::demo
```html
<template>
  <div class="card">
    <!-- Card header -->
    <div class="card-header">
      <!-- Title -->
      <h5 class="h3 mb-0">Progress track</h5>
    </div>
    <!-- Card body -->
    <div class="card-body">
      <!-- List group -->
      <ul class="list-group list-group-flush list my--3">
        <li v-for="(item, index) in list"
            :key="index"
            class="list-group-item px-0">
          <div class="row align-items-center">
            <div class="col-auto">
              <!-- Avatar -->
              <a href="#" class="avatar rounded-circle">
                <img alt="Image placeholder" :src="item.image">
              </a>
            </div>
            <div class="col">
              <h5>{{item.name}}</h5>
              <base-progress class="progress-xs mb-0"
                             :type="item.color"
                             :value="item.progress">

              </base-progress>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            name: 'Argon Design System',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/bootstrap.jpg',
            color: 'orange',
            progress: 60,
          },
          {
            name: 'Angular Now UI Kit PRO',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/angular.jpg',
            color: 'green',
            progress: 100,
          },
          {
            name: 'Black Dashboard',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/sketch.jpg',
            color: 'red',
            progress: 72
          },
          {
            name: 'React Material Dashboard',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/react.jpg',
            color: 'teal',
            progress: 90
          },
          {
            name: 'Vue Paper UI Kit PRO',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/vue.jpg',
            color: 'green',
            progress: 100
          },
        ]
      }
    }
  }
</script>

```
:::


### Messages

:::demo
```html
<div class="list-group list-group-flush">

    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start py-4 px-4">
        <div class="d-flex w-100 justify-content-between">
            <div>
                <div class="d-flex w-100 align-items-center">
                    <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg" alt="Image placeholder" class="avatar avatar-xs mr-2"/>
                    <h5 class="mb-1">Tim</h5>
                </div>
            </div>
            <small>2 hrs ago</small>
        </div>
        <h4 class="mt-3 mb-1"> New order for Argon Dashboard</h4>
        <p class="text-sm mb-0">Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.</p>

    </a>
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start py-4 px-4">
        <div class="d-flex w-100 justify-content-between">
            <div>
                <div class="d-flex w-100 align-items-center">
                    <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg" alt="Image placeholder" class="avatar avatar-xs mr-2"/>
                    <h5 class="mb-1">Mike</h5>
                </div>
            </div>
            <small>1 day ago</small>
        </div>
        <h4 class="mt-3 mb-1"><span class="text-info">●</span> Your theme has been updated</h4>
        <p class="text-sm mb-0">Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.</p>

    </a>
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start py-4 px-4">
        <div class="d-flex w-100 justify-content-between">
            <div>
                <div class="d-flex w-100 align-items-center">
                    <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-3.jpg" alt="Image placeholder" class="avatar avatar-xs mr-2"/>
                    <h5 class="mb-1">Tim</h5>
                </div>
            </div>
            <small>2 hrs ago</small>
        </div>
        <h4 class="mt-3 mb-1"> New order for Argon Dashboard</h4>
        <p class="text-sm mb-0">Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.</p>

    </a>
</div>
```
:::


### Notifications

:::demo
```html
<div class="list-group list-group-flush">
    
    <a href="#!" class="list-group-item list-group-item-action">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Avatar -->
                <img alt="Image placeholder"
                     src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg"
                     class="avatar rounded-circle">

            </div>
            <div class="col ml--2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                        <small>2 hrs ago</small>
                    </div>
                </div>
                <p class="text-sm mb-0">Let's meet at Starbucks at 11:30. Wdyt?</p>
            </div>
        </div>

    </a>

    <a href="#!" class="list-group-item list-group-item-action">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Avatar -->
                <img alt="Image placeholder"
                     src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg"
                     class="avatar rounded-circle">

            </div>
            <div class="col ml--2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                        <small>3 hrs ago</small>
                    </div>
                </div>
                <p class="text-sm mb-0">A new issue has been reported for Argon.</p>
            </div>
        </div>

    </a>

    <a href="#!" class="list-group-item list-group-item-action">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Avatar -->
                <img alt="Image placeholder"
                     src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-3.jpg"
                     class="avatar rounded-circle">

            </div>
            <div class="col ml--2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 class="mb-0 text-sm">John Snow</h4>
                    </div>
                    <div class="text-right text-muted">
                        <small>5 hrs ago</small>
                    </div>
                </div>
                <p class="text-sm mb-0">Your posts have been liked a lot.</p>
            </div>
        </div>

    </a>
</div>

```
:::


### Countries

:::demo
```html
<ul class="list-group list-group-flush list my--3">


    <li class="list-group-item px-0">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Country flag -->
                <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/icons/flags/US.png" alt="Country flag"/>
            </div>
            <div class="col">
                <small>Country:</small>
                <h5 class="mb-0">United States</h5>
            </div>
            <div class="col">
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
            </div>
            <div class="col">
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
            </div>
        </div>

    </li>

    <li class="list-group-item px-0">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Country flag -->
                <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/icons/flags/DE.png" alt="Country flag"/>
            </div>
            <div class="col">
                <small>Country:</small>
                <h5 class="mb-0">Germany</h5>
            </div>
            <div class="col">
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
            </div>
            <div class="col">
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
            </div>
        </div>
    </li>

    <li class="list-group-item px-0">
        <div class="row align-items-center">
            <div class="col-auto">
                <!-- Country flag -->
                <img src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/icons/flags/GB.png" alt="Country flag"/>
            </div>
            <div class="col">
                <small>Country:</small>
                <h5 class="mb-0">Great Britain</h5>
            </div>
            <div class="col">
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
            </div>
            <div class="col">
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
            </div>
        </div>
    </li>
</ul>

```
:::

<script>
  export default {
    data() {
      return {
       items: [
          {
            title: 'Call with Dave',
            description: '10:30 AM',
            done: true,
            checkType: 'success'
          },
          {
            title: 'Lunch meeting',
            description: '10:30 AM',
            done: false,
            checkType: 'warning'
          },
          {
            title: 'Argon Dashboard Launch',
            description: '10:30 AM',
            done: false,
            checkType: 'info'
          },
          {
            title: 'Winter Hackaton',
            description: '10:30 AM',
            done: true,
            checkType: 'danger'
          }
        ],
        list: [
          {
            name: 'Argon Design System',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/bootstrap.jpg',
            color: 'orange',
            progress: 60,
          },
          {
            name: 'Angular Now UI Kit PRO',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/angular.jpg',
            color: 'green',
            progress: 100,
          },
          {
            name: 'Black Dashboard',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/sketch.jpg',
            color: 'red',
            progress: 72
          },
          {
            name: 'React Material Dashboard',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/react.jpg',
            color: 'teal',
            progress: 90
          },
          {
            name: 'Vue Paper UI Kit PRO',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/vue.jpg',
            color: 'green',
            progress: 100
          },
        ],
        members: [
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-1.jpg'
          },
          {
            name: 'Alex Smith',
            status: 'In a meeting',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-2.jpg'
          },
          {
            name: 'Samantha Ivy',
            status: 'Offline',
            statusType: 'danger',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-3.jpg'
          },
          {
            name: 'John Michael',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-4.jpg'
          },
          {
            name: 'John Snow',
            status: 'Online',
            statusType: 'success',
            image: 'https://demos.creative-tim.com/vue-argon-dashboard-pro/img/theme/team-5.jpg'
          }
        ]
      }
    }
  }
</script>
