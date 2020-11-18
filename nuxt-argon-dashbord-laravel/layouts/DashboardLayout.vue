<template>
  <div class="wrapper">
    <notifications></notifications>
    <side-bar>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-shop text-primary',
            path: '/dashboard'
          }"
        >
        </sidebar-item>

        <sidebar-item
          opened
          :link="{
            name: 'Examples (API)',
            icon: 'ct-image-icon',
          }"
        >
          <sidebar-item
            opened
            :link="{ name: 'User Profile', path: '/examples/user-profile' }"
          />
          <sidebar-item
            opened
            :link="{
              name: 'User Management',
              path: '/examples/user-management',
            }"
          />
        </sidebar-item>
        <sidebar-item :link="{ name: 'Icons', path: '/components/icons', icon: 'ni ni-planet' }"/>
        <sidebar-item :link="{
                        name: 'Tables',
                        icon: 'ni ni-align-left-2 text-default',
                        path: '/tables/regular'
                      }">
        </sidebar-item>

        <sidebar-item :link="{
                        name: 'Google',
                        icon: 'ni ni-pin-3',
                        path: '/maps/google'
                      }">
        </sidebar-item>
          <a
        href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel"
        target="_blank"
        class="btn btn-sm btn-danger btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"
          ><i class="fas fa-download mr-2"></i
        ></span>
        <span class="nav-link-inner--text">Upgrade to PRO</span></a
      >

      <a
        href="https://nuxt-argon-dashboard-laravel.creative-tim.com/documentation/"
        target="_blank"
        class="btn btn-sm btn-neutral btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fas fa-file-alt"></i></span>
        <span class="nav-link-inner--text">Documentation</span></a
      >

      <a
        href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
        target="_blank"
        class="btn btn-sm btn-info btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fas fa-gift"></i></span>
        <span class="nav-link-inner--text">Download now</span></a
      >

      <a
        href="https://github.com/creativetimofficial/nuxt-argon-dashboard-laravel"
        target="_blank"
        class="btn btn-sm btn-dark btn-icon mx-sm-5 mb-2 d-none d-md-block"
        ><span class="btn-inner--icon"><i class="fab fa-github"></i></span>
        <span class="nav-link-inner--text">Star us on Github</span></a
      >
      </template>
    </side-bar>
    <div class="main-content">
      <dashboard-navbar
        :type="$route.name === 'alternative' ? 'light' : 'default'"
      ></dashboard-navbar>

      <div @click="$sidebar.displaySidebar(false)">
        <nuxt></nuxt>
      </div>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import DashboardNavbar from "~/components/layouts/argon/DashboardNavbar.vue";
import ContentFooter from "~/components/layouts/argon/ContentFooter.vue";
import DashboardContent from "~/components/layouts/argon/Content.vue";
import Vuex from "vuex";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    DashboardContent,
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("scrollbar-inner");
      }
    },
  },
  mounted() {
    this.initScrollbar(), this.$store.dispatch("profile/me");
  },
};
</script>
<style lang="scss">
</style>
