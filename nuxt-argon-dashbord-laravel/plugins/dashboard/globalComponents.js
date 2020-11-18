import Badge from '~/components/argon-core/Badge.vue';
import BaseAlert from "~/components/argon-core/BaseAlert";
import BaseButton from '~/components/argon-core/BaseButton.vue';
import BaseDropdown from '~/components/argon-core/BaseDropdown.vue';
import BaseHeader from '~/components/argon-core/BaseHeader';
import BaseInput from '~/components/argon-core/Inputs/BaseInput.vue';
import BaseNav from "~/components/argon-core/Navbar/BaseNav";
import BasePagination from "~/components/argon-core/BasePagination";
import BaseProgress from "~/components/argon-core/BaseProgress";
import Card from '~/components/argon-core/Cards/Card.vue';
import Modal from '~/components/argon-core/Modal.vue';
import RouteBreadcrumb from '~/components/argon-core/Breadcrumb/RouteBreadcrumb';
import StatsCard from '~/components/argon-core/Cards/StatsCard.vue';
import { Input, Tooltip, Popover } from 'element-ui';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import Vue from 'vue';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

Vue.component(Badge.name, Badge);
Vue.component(BaseAlert.name, BaseAlert);
Vue.component(BaseButton.name, BaseButton);
Vue.component(BaseHeader.name, BaseHeader);
Vue.component(BaseInput.name, BaseInput);
Vue.component(BaseDropdown.name, BaseDropdown);
Vue.component(BaseNav.name, BaseNav);
Vue.component(BasePagination.name, BasePagination);
Vue.component(BaseProgress.name, BaseProgress);
Vue.component(Card.name, Card);
Vue.component(Modal.name, Modal);
Vue.component(StatsCard.name, StatsCard);
Vue.component(RouteBreadcrumb.name, RouteBreadcrumb);
Vue.component(Input.name, Input);
Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)
Vue.use(Tooltip);
Vue.use(Popover);
