import Vue from "vue";
import ProSlaps from "./App.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHandPaper,
  faHandRock,
  faHandScissors,
  faHandLizard,
  faHandSpock
} from "@fortawesome/free-solid-svg-icons";

import "./scripts/services/registerServiceWorker";

Vue.component("modalInfo", () => import("@/components/modals/Info.vue"));
Vue.component("modalRules", () => import("@/components/modals/Rules.vue"));
Vue.component("modalStats", () => import("@/components/modals/Stats.vue"));

library.add(faHandPaper, faHandRock, faHandScissors, faHandLizard, faHandSpock);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: program => program(ProSlaps)
}).$mount("#app");
