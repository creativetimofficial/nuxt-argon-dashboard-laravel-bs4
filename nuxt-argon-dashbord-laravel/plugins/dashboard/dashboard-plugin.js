// Polyfills for js features used in the Dashboard but not supported in some browsers (mainly IE)
import '@/polyfills';
// Notifications plugin. Used on Notifications page
import Notifications from '~/components/argon-core/NotificationPlugin';
// Validation plugin used to validate forms
import VeeValidate from 'vee-validate';
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from '~/components/argon-core/SidebarPlugin';
import Vue from 'vue';
// element ui language configuration
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import './globalDirectives'
import './globalComponents'
import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/en.json';
import { configure } from 'vee-validate';

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule] // assign message
  });
});

locale.use(lang);

Vue.use(SideBar);
Vue.use(Notifications);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], // multiple classes per flag!
  }
});
