// We initialize map components here since they don't have SSR support.
// We will render them on the client only by making this plugin ssr:false
import Vue from 'vue'
import WorldMap from '@/components/argon-core/WorldMap/WorldMap.vue';
Vue.component('world-map', WorldMap)
