import DemoBlock from './demo-block/demo-block'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import getGlobalComponents from './globals'
import '@/plugins/dashboard/dashboard-plugin'
import '@/assets/css/nucleo/css/nucleo.css'
import 'assets/sass/argon.scss'
import './doc_styles.scss'
import './argon-docs.css'
import "../../node_modules/flatpickr/dist/flatpickr.css";
import flatPicker from "../../node_modules/vue-flatpickr-component";
import "../../node_modules/element-ui/lib/theme-chalk/base.css";
import "../../node_modules/element-ui/lib/theme-chalk/icon.css";
import "../../node_modules/element-ui/lib/theme-chalk/popover.css";
import  "../../node_modules/element-ui/lib/theme-chalk/tooltip.css";
import  "../../node_modules/element-ui/lib/theme-chalk/table-column.css";
import  "../../node_modules/element-ui/lib/theme-chalk/table.css";
import  "../../node_modules/element-ui/lib/theme-chalk/select.css";
import  "../../node_modules/element-ui/lib/theme-chalk/tag.css";
import  "../../node_modules/element-ui/lib/theme-chalk/dropdown-item.css";
import  "../../node_modules/element-ui/lib/theme-chalk/dropdown.css";
import  "../../node_modules/element-ui/lib/theme-chalk/dropdown-menu.css";
import "../../node_modules/@fullcalendar/core/main.css";
// import "@/assets/sass/core/vendors/_fullcalendar.scss";
import {Table, TableColumn, DropdownMenu, Dropdown, DropdownItem, Select, Option} from '../../node_modules/element-ui'
import getElements from './utils/get-sidebar-elements';
import VueClipboard from 'vue-clipboard2'

export default ({
                  Vue, // the version of Vue being used in the VuePress app
                  options, // the options for the root Vue instance
                  router, // the router instance for the app
                  siteData
                }) => {
  locale.use(lang);
  Vue.use(VueClipboard)
  Vue.use(TableColumn)
  Vue.use(Table)
  Vue.use(DropdownItem)
  Vue.use(Dropdown)
  Vue.use(DropdownMenu)
  Vue.use(Select)
  Vue.use(Option)
  Vue.component('flat-picker', flatPicker);
  Vue.component('demo-block', DemoBlock);
  let Components = getGlobalComponents()
  let componentEntries = Object.entries(Components);
  for(let [name, component] of componentEntries) {
    Vue.component(component.name || name, component)
  }
  Vue.prototype.$docs = Object.values(Components);
  let docComponents = getElements(componentEntries);
  siteData.themeConfig.sidebar = siteData.themeConfig.sidebar.concat(docComponents);
}
