<template>
  <header
    class="main-nav navbar navbar-horizontal navbar-expand navbar-dark bg-success flex-row align-items-md-center ct-navbar"
  >
    <a class="navbar-brand mr-0 mr-md-2" href="/" aria-label="Bootstrap">
      <img src="/img/brand/white.png" />
      <sup>Docs</sup>
    </a>
    <ul class="navbar-nav flex-row mr-auto ml-4 d-none d-md-flex">
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro-laravel"
          target="_blank"
          >Upgrade to PRO</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://explore.postman.com/api/6357/laravel-jsonapi"
          target="_blank"
          >API Docs</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://nuxt-argon-dashboard-laravel.creative-tim.com"
          target="_blank"
          >Live Preview</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="https://github.com/creativetimofficial/nuxt-argon-dashboard-laravel/issues"
          target="_blank"
          >Support</a
        >
      </li>
    </ul>
    <div class="d-none d-sm-block ml-auto">
      <ul class="navbar-nav ct-navbar-nav flex-row align-items-center">
        <SearchBox v-if="$site.themeConfig.search !== false" />
        <li class="nav-item dropdown d-none">
          <a
            class="btn-link text-white dropdown-toggle mr-sm-3"
            href="#"
            id="ct-versions"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >1.0.0</a
          >
          <div class="dropdown-menu" aria-labelledby="ct-versions">
            <a class="dropdown-item active" href="/">Latest - 1.0.0</a>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/creativetim"
            target="_blank"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/creativetim"
            target="_blank"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
          >
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/creativetimofficial"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
    <a
      href="https://www.creative-tim.com/product/nuxt-argon-dashboard-laravel"
      target="_blank"
      class="btn btn-neutral btn-icon ml-sm-3 d-none d-md-block"
    >
      <span class="btn-inner--icon">
        <i class="fas fa-download mr-2"></i>
      </span>
      <span class="nav-link-inner--text">Download</span>
    </a>
    <button
      class="navbar-toggler ct-search-docs-toggle d-block d-md-none ml-auto ml-sm-0 collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#ct-docs-nav"
      aria-controls="ct-docs-nav"
      aria-expanded="false"
      aria-label="Toggle docs navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </header>
</template>
<script>
import SearchBox from "../../node_modules/vuepress/lib/default-theme/SearchBox.vue";

export default {
  components: {
    SearchBox,
  },
};
</script>
<style lang="scss">
header.main-nav {
  z-index: 50;
  &.navbar {
    background-color: #41b883;
    box-shadow: rgba(116, 129, 141, 0.1) 0 1px 1px 0;
    position: fixed;
    .container {
      max-width: 100%;
      width: 100%;
    }
    .navbar-brand,
    .navbar-brand:hover {
      color: white;
    }
  }

  &.navbar .nav-link {
    color: white !important;
    &:hover {
      border: 0 !important;
      margin: 0 !important;
    }
    &.router-link-active {
      color: white !important;
      border-bottom: 2px solid white !important;
    }
  }

  &.navbar .search-box .suggestion a {
    color: inherit;
  }
}
</style>
