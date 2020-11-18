<template>
  <ul class="list-group list-group-flush list my--3">
    <li class="list-group-item px-0"
        v-for="item in items.slice(0, itemLimit)"
        :key="item.id">
      <div class="row align-items-center">
        <div class="col-auto">
          <!-- Avatar -->
          <a href="#" class="avatar rounded-circle">
            <img alt="Image placeholder" :src="item.img">
          </a>
        </div>
        <div class="col">
          <h5>{{item.title}}</h5>
          <base-progress class="mb-0"
                         :type="item.progressType"
                         :value="item.progress">
          </base-progress>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
  import BaseProgress from '~/components/argon-core/BaseProgress.vue';

  export default {
    name: 'progress-track-list',
    props: {
      itemLimit: {
        type: Number,
        default: 4
      }
    },
    components: {
      BaseProgress
    },
    data() {
      return {
        items: [
          {
            id: 1,
            img: '/img/theme/bootstrap.jpg',
            title: 'Argon Design System',
            progress: 60,
            progressType: 'orange'
          },
          {
            id: 2,
            img: '/img/theme/angular.jpg',
            title: 'Angular Now UI Kit PRO',
            progress: 100,
            progressType: 'green'
          },
          {
            id: 3,
            img: '/img/theme/sketch.jpg',
            title: 'Black Dashboard',
            progress: 72,
            progressType: 'red'
          },
          {
            id: 4,
            img: '/img/theme/react.jpg',
            title: 'React Material Dashboard',
            progress: 90,
            progressType: 'teal'
          },
          {
            id: 5,
            img: '/img/theme/vue.jpg',
            title: 'Vue Paper UI Kit PRO',
            progress: 100,
            progressType: 'success'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
