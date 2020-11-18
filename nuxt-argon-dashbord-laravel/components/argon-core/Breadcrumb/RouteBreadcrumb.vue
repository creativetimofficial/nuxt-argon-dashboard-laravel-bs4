<template>
  <no-ssr>
    <bread-crumb list-classes="breadcrumb-links breadcrumb-dark">
      <BreadCrumbItem>
        <nuxt-link to="/" aria-label="Home">
          <i class="fas fa-home"></i>
        </nuxt-link>
      </BreadCrumbItem>
      <BreadCrumbItem
        v-for="(route, index) in $route.matched.slice()"
        :key="route.name"
        :active="index === $route.matched.length - 1"
        style="display:inline-block"
      >
        <nuxt-link
          :to="{ name: route.name }"
          v-if="index < $route.matched.length - 1"
        >
          {{ route.name }}
        </nuxt-link>
        <span v-else>{{ route.name }}</span>
      </BreadCrumbItem>
    </bread-crumb>
  </no-ssr>
</template>

<script>
  import BreadCrumb from './Breadcrumb';
  import BreadCrumbItem from './BreadcrumbItem';

  export default {
    name: 'route-breadcrumb',
    components: {
      BreadCrumb,
      BreadCrumbItem
    },
    methods: {
      getBreadName(route) {
        return route.name;
      }
    }
  };
</script>

<style scoped></style>
